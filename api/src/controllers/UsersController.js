const connection = require('../database/connection');
const generateHash = require('../utils/generateHash');

module.exports = {
  /**
   * Lista todos os usuários cadastrados
   *
   * @param {page, limit} request
   * @param {users[]} response
   */
  async index(request, response) {
    try {
      const { page = 1, limit = 10 } = request.query;

      // const [count] = await connection('users').count();

      const users = await connection('users')
        .select(['users.*'])
        .groupBy('users.id')
        .limit(limit)
        .offset((page - 1) * limit);

      // response.header('X-Total-count', count['count(*)']);

      return response.json(users);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
  /**
   * Procura um usuário por id
   *
   * @param {id} request
   * @param {user} response
   */
  async show(request, response) {
    try {
      const { id } = request.params;
      const user = await connection('users').where('id', id).select('*').first();

      return response.json(user);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
  /**
   * Cadastra um novo usuários
   *
   * @param {name, email, password} request
   * @param {id} response
   */
  async store(request, response) {
    try {
      const { name, email, password } = request.body;
      const hashPass = generateHash(password);

      const user = await connection('users').where({ email }).select('*').first();

      if (user) {
        return response.status(400).json({ message: 'User already exists, register a new user' });
      }

      const [id] = await connection('users')
        .insert({
          name,
          email,
          password: hashPass,
        })
        .returning('id');

      return response.json({ id });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
  /**
   * Atualiza o nome do usuário cadastrado
   *
   * @param {id, name} request
   * @param {user} response
   */
  async update(request, response) {
    try {
      const { id } = request.params;
      const { name } = request.body;

      const user = await connection('users').where('id', id).select('*').first();

      if (!user) {
        return response.status(401).json({ message: 'Restaurant isn`t finded' });
      }

      const attempts = user.attempts + 1;

      const update = await connection('users').where({ id }).update({ name, attempts });

      if (!update) {
        return response.status(401).json({ message: 'The update has not been performed' });
      }

      const updatedRestaurantData = await connection('users').where('id', id).select('*').first();

      return response.json({ user: updatedRestaurantData });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
  /**
   * Remove um usuário pelo id
   *
   * @param {id, authorization} request
   * @param {null} response
   */
  async destroy(request, response) {
    try {
      const { id } = request.params;
      const sessionId = request.headers.authorization;
      const user = await connection('users').where('id', id).select('id').first();

      if (user.id === sessionId) {
        return response.status(401).json({ message: 'Operation not permitted' });
      }

      await connection('users').where('id', id).delete();

      return response.status(204).send();
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
};
