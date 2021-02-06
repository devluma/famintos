const connection = require('../database/connection');
const generateSchedule = require('../utils/generateSchedule');

module.exports = {
  async index(request, response) {
    try {
      const { page = 1, limit = 10 } = request.query;

      const [count] = await connection('restaurants').count();

      const restaurants = await connection('restaurants')
        .select(['restaurants.*'])
        .groupBy('restaurants.id')
        .limit(limit)
        .offset((page - 1) * limit);

      response.header('X-Total-count', count['count(*)']);

      return response.json(restaurants);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async show(request, response) {
    try {
      const { id } = request.params;
      const restaurant = await connection('restaurants').where('id', id).select('*').first();

      return response.json(restaurant);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async store(request, response) {
    try {
      const { name } = request.body;
      const attempts = 1;
      const schedule = generateSchedule();
      const [id] = await connection('restaurants')
        .insert({
          name,
          attempts,
          schedule,
        })
        .returning('id');

      response.header('X-Total-attempts', attempts);

      return response.json({ id });
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async update(request, response) {
    try {
      const { id } = request.params;
      const { name } = request.body;

      const restaurant = await connection('restaurants').where('id', id).select('*').first();

      if (!restaurant) {
        return response.status(401).json({ erro: 'Restaurant isn`t finded' });
      }

      const schedule = generateSchedule();
      const attempts = restaurant.attempts + 1;

      const update = await connection('restaurants')
        .where({ id })
        .update({ name, schedule, attempts });

      if (!update) {
        return response.status(401).json({ erro: 'The update has not been performed' });
      }

      const updatedRestaurantData = await connection('restaurants')
        .where('id', id)
        .select('*')
        .first();

      response.header('X-Total-attempts', attempts);

      return response.json({ restaurant: updatedRestaurantData });
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async destroy(request, response) {
    try {
      const { id } = request.params;
      const sessionId = request.headers.authorization;
      const restaurant = await connection('restaurants').where('id', id).select('id').first();

      if (restaurant.id === sessionId) {
        return response.status(401).json({ erro: 'Operation not permitted' });
      }

      await connection('restaurants').where('id', id).delete();

      return response.status(204).send();
    } catch (err) {
      return response.status(400).json(err);
    }
  },
};
