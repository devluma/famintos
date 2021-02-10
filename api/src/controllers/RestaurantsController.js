const jwt = require('jsonwebtoken');
const connection = require('../database/connection');
const generateSchedule = require('../utils/generateSchedule');

module.exports = {
  /**
   * Lista todos os restaurantes cadastrados
   *
   * @param {page, limit} request
   * @param {restaurants[]} response
   */
  async index(request, response) {
    try {
      const { name, page = 1, limit = 100 } = request.query;
      const token = request.headers.authorization.replace('Bearer ', '');
      const secret = process.env.API_SECRET;

      const user = jwt.verify(token, secret);

      if (!user) {
        return response.status(401).json({ message: 'Operation not permitted' });
      }

      const [count] = await connection('restaurants').count();

      let restaurants = await connection('restaurants')
        .select(['restaurants.*'])
        .groupBy('restaurants.id')
        .limit(limit)
        .offset((page - 1) * limit)
        .orderBy('id', 'desc');

      if (name) {
        const seachField = name.replace('"', '').replace('"', '');

        restaurants = await connection('restaurants')
          .where('name', 'like', `%${seachField}%`)
          .limit(limit)
          .offset((page - 1) * limit)
          .orderBy('id', 'desc');
      }

      response.header('X-Total-count', count['count(*)']);

      return response.json(restaurants);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
  /**
   * Procura um restaurante por id
   *
   * @param {id} request
   * @param {restaurant} response
   */
  async show(request, response) {
    try {
      const { id } = request.params;
      const token = request.headers.authorization.replace('Bearer ', '');
      const secret = process.env.API_SECRET;

      const user = jwt.verify(token, secret);

      const restaurant = await connection('restaurants').where('id', id).select('*').first();

      if (!user && !restaurant.id) {
        return response.status(401).json({ message: 'Operation not permitted' });
      }

      return response.json(restaurant);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
  /**
   * Cadastra um novo restaurante
   *
   * @param {name} request
   * @param {id} response
   */
  async store(request, response) {
    try {
      const { name } = request.body;
      const token = request.headers.authorization.replace('Bearer ', '');
      const secret = process.env.API_SECRET;

      const user = jwt.verify(token, secret);

      if (!user && !name) {
        return response.status(401).json({ message: 'Operation not permitted' });
      }

      const [id] = await connection('restaurants')
        .insert({
          name,
        })
        .returning('id');

      return response.json({ id });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
  /**
   * Atualiza o nome do restaurante cadastrado
   *
   * @param {id, name} request
   * @param {restaurant} response
   */
  async update(request, response) {
    try {
      const { id } = request.params;
      const { name, description } = request.body;
      const token = request.headers.authorization.replace('Bearer ', '');
      const secret = process.env.API_SECRET;

      const user = jwt.verify(token, secret);

      const restaurant = await connection('restaurants').where('id', id).select('*').first();

      if (!restaurant) {
        return response.status(401).json({ message: 'Restaurant isn`t finded' });
      }

      if (!user && !restaurant.id) {
        return response.status(401).json({ message: 'Operation not permitted' });
      }

      let upName = name;

      if (!upName && name !== '') {
        upName = restaurant.name;
      }

      let upDescription = description;

      if (!upDescription && name !== '') {
        upDescription = restaurant.description;
      }

      const update = await connection('restaurants')
        .where({ id })
        .update({ name: upName, description: upDescription });

      if (!update) {
        return response.status(401).json({ message: 'The update has not been performed' });
      }

      const updatedRestaurantData = await connection('restaurants')
        .where('id', id)
        .select('*')
        .first();

      return response.json({ restaurant: updatedRestaurantData });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },

  async liked(request, response) {
    try {
      const { restaurant_id } = request.body;
      const token = request.headers.authorization.replace('Bearer ', '');
      const secret = process.env.API_SECRET;
      const { weekDay, dayWeek, completeDate } = generateSchedule('JSON');

      const user = jwt.verify(token, secret);

      if (!user && !restaurant_id) {
        return response.status(401).json({ message: 'Operation not permitted' });
      }

      const votingRecords = await connection('voting_records')
        .where('user_id', user.id)
        .andWhere('restaurant_id', restaurant_id)
        .andWhere('day_week', dayWeek)
        .andWhere('last_day_of_likes', '<=', completeDate)
        .select(['user_id', 'restaurant_id', 'day_week'])
        .first();

      if (votingRecords) {
        return response.status(401).json({ message: 'Have you enjoyed this restaurant today' });
      }

      const [votingRecordId] = await connection('voting_records')
        .insert({
          user_id: user.id,
          restaurant_id,
          day_week: dayWeek,
          week_day_name: weekDay,
        })
        .returning('id');

      return response.json({
        restaurant_id,
        user: user.id,
        votingRecords,
        votingRecordId,
      });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },

  /**
   * Remove um restaurante pelo id
   *
   * @param {id, authorization} request
   * @param {null} response
   */
  async destroy(request, response) {
    try {
      const { id } = request.params;
      const token = request.headers.authorization.replace('Bearer ', '');
      const secret = process.env.API_SECRET;

      const user = jwt.verify(token, secret);

      const restaurant = await connection('restaurants').where('id', id).select('id').first();

      if (!user && !restaurant.id) {
        return response.status(401).json({ message: 'Operation not permitted' });
      }

      await connection('restaurants').where('id', id).delete();

      return response.status(204).send();
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
  /**
   * Lista apenas os restaurantes disponíveis para o usuário
   *
   * @param {page, limit, token} request
   * @param {restaurants[]} response
   */
  async listByUsers(request, response) {
    try {
      const { page = 1, limit = 100 } = request.query;
      const token = request.headers.authorization.replace('Bearer ', '');
      const secret = process.env.API_SECRET;
      // const { dayWeek, completeDate } = generateSchedule('JSON');

      const user = jwt.verify(token, secret);

      if (!user && !user.id) {
        return response.status(401).json({ message: 'Operation not permitted' });
      }

      const restaurants = await connection('restaurants')
        .select([
          'restaurants.id',
          'restaurants.name',
          'restaurants.description',
          'voting_records.user_id',
          'voting_records.day_week',
          'voting_records.last_day_of_likes',
        ])
        .leftJoin('voting_records', 'voting_records.restaurant_id', 'restaurants.id')
        .groupBy('restaurants.id')
        .limit(limit)
        .offset((page - 1) * limit)
        .orderBy('restaurants.id', 'desc');

      restaurants.find((restaurant, index) => {
        return console.log(restaurant, index);
      });

      return response.json(restaurants);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
  /**
   * Lista apenas os restaurantes com pontuação
   *
   * @param {page, limit} request
   * @param {restaurants[]} response
   */
  async listByPoints(request, response) {
    try {
      const { page = 1, limit = 100 } = request.query;

      const schedule = generateSchedule('JSON');
      const { dayWeek } = schedule;
      const categories = [];
      const points = [];
      const winners = [];

      const restaurants = await connection('voting_records')
        .select(['restaurants.*', 'voting_records.*'])
        .count('voting_records.attempts', { as: 'points' })
        .join('restaurants', 'restaurants.id', 'voting_records.restaurant_id')
        .where('voting_records.attempts', '>=', 1)
        .andWhere('voting_records.day_week', '=', dayWeek)
        .groupBy(['voting_records.restaurant_id', 'voting_records.day_week'])
        .limit(limit)
        .offset((page - 1) * limit);

      restaurants.map((restaurant) => {
        if (restaurant) {
          categories.push(restaurant.name);
          points.push(restaurant.points);
          winners.push({ name: restaurant.name, attempts: restaurant.points });
        }

        return { categories, points, winners };
      });

      const highestScore = Math.max.apply(null, points);

      const winner = winners.find((restaurant) => {
        if (restaurant && restaurant.attempts === highestScore) {
          return restaurant.name;
        }

        return '';
      });

      const tieLevel = points.filter((point) => point === winner.attempts).length;

      if (winner && winner.name) {
        winner.name = tieLevel !== 1 ? 'HAVE_A_TIE' : winner.name;
      }

      return response.json({ categories, points, highestScore, tieLevel, winner });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
};
