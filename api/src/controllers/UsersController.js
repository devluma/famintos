const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    try {
      const { page = 1, limit = 10 } = request.query;

      const [count] = await connection('users').count();

      const users = await connection('users')
        .select(['users.*'])
        .groupBy('users.id')
        .limit(limit)
        .offset((page - 1) * limit);

      response.header('X-Total-count', count['count(*)']);

      return response.json(users);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async show(request, response) {
    try {
      const { id } = request.params;
      const user = await connection('users').where('id', id).select('*').first();

      return response.json(user);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async store(request, response) {
    try {
      const { name, email } = request.body;
      const [id] = await connection('users')
        .insert({
          name,
          email,
        })
        .returning('id');

      return response.json({ id });
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async update(request, response) {
    try {
      const { id } = request.params;
      const { name } = request.body;

      const user = await connection('users').where('id', id).select('*').first();

      if (!user) {
        return response.status(401).json({ erro: 'Restaurant isn`t finded' });
      }

      const attempts = user.attempts + 1;

      const update = await connection('users').where({ id }).update({ name, attempts });

      if (!update) {
        return response.status(401).json({ erro: 'The update has not been performed' });
      }

      const updatedRestaurantData = await connection('users').where('id', id).select('*').first();

      return response.json({ user: updatedRestaurantData });
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async destroy(request, response) {
    try {
      const { id } = request.params;
      const sessionId = request.headers.authorization;
      const user = await connection('users').where('id', id).select('id').first();

      if (user.id === sessionId) {
        return response.status(401).json({ erro: 'Operation not permitted' });
      }

      await connection('users').where('id', id).delete();

      return response.status(204).send();
    } catch (err) {
      return response.status(400).json(err);
    }
  },
};
