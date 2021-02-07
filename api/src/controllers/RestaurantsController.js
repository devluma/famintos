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
      const restaurant = await connection('restaurants').where('id', id).select('*').first();

      return response.json(restaurant);
    } catch (err) {
      return response.status(400).json(err);
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
      const schedule = generateSchedule();
      const [id] = await connection('restaurants')
        .insert({
          name,
          schedule,
        })
        .returning('id');

      return response.json({ id });
    } catch (err) {
      return response.status(400).json(err);
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
      const { name, attempts } = request.body;

      const restaurant = await connection('restaurants').where('id', id).select('*').first();

      if (!restaurant) {
        return response.status(401).json({ message: 'Restaurant isn`t finded' });
      }

      const schedule = generateSchedule({ id: 1, name: 'Luiz' });

      let upAttempts = attempts;

      if (!attempts && attempts <= 0) {
        upAttempts = restaurant.attempts + 1;
      }

      let upName = name;

      if (!name && name !== '') {
        upName = restaurant.name;
      }

      const update = await connection('restaurants')
        .where({ id })
        .update({ name: upName, schedule, attempts: upAttempts });

      if (!update) {
        return response.status(401).json({ message: 'The update has not been performed' });
      }

      const updatedRestaurantData = await connection('restaurants')
        .where('id', id)
        .select('*')
        .first();

      response.header('X-Total-attempts', upAttempts);

      return response.json({ restaurant: updatedRestaurantData });
    } catch (err) {
      return response.status(400).json(err);
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
      const sessionId = request.headers.authorization;
      const restaurant = await connection('restaurants').where('id', id).select('id').first();

      if (restaurant.id === sessionId) {
        return response.status(401).json({ message: 'Operation not permitted' });
      }

      await connection('restaurants').where('id', id).delete();

      return response.status(204).send();
    } catch (err) {
      return response.status(400).json(err);
    }
  },
};
