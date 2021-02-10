const jwt = require('jsonwebtoken');
const generateHash = require('../utils/generateHash');
const connection = require('../database/connection');

module.exports = {
  /**
   * Autentica um usuário e gera o token
   *
   * @param {email, password} request
   * @param {user, token} response
   */
  async authenticate(request, response) {
    try {
      const { email, password } = request.body;
      const hashPass = generateHash(password);
      const secret = process.env.API_SECRET;

      const user = await connection('users')
        .select(['id', 'name', 'email'])
        .where({ email, password: hashPass })
        .first();

      if (!user) {
        return response.status(401).json({ message: 'Invalid password or user' });
      }

      const secretText = `${secret}_${user.name}`.replace(/ /gi, '_').toLocaleUpperCase();
      const secretHash = generateHash(secretText);

      const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: '24h',
      });

      const existApiToken = await connection('api_tokens')
        .select('user_id')
        .where('user_id', user.id)
        .first();

      if (!existApiToken) {
        const create = await connection('api_tokens').insert({
          user_id: user.id,
          name: secretHash,
          type: 'JWT',
          token,
        });

        if (!create) {
          return response.status(401).json({ message: 'The create has not been performed' });
        }
      } else {
        const update = await connection('api_tokens').where('user_id', user.id).update({
          name: secretHash,
          token,
        });

        if (!update) {
          return response.status(401).json({ message: 'The update has not been performed' });
        }
      }

      return response.json({ user, token });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
  /**
   * Faz o logout de um usuário na aplicação
   *
   * @param {id, token} request
   * @param {user: false, token: null} response
   */
  async logout(request, response) {
    try {
      const token = request.headers.authorization.replace('Bearer ', '');
      const secret = process.env.API_SECRET;

      const user = jwt.verify(token, secret);

      if (!user || !token) {
        return response.status(401).json({ message: 'Operation not permitted' });
      }

      const apiTokens = await connection('api_tokens')
        .select('id')
        .where('user_id', user.id)
        .first();

      if (!apiTokens) {
        return response.status(401).json({ message: 'Operation not permitted' });
      }

      await connection('api_tokens').where('id', apiTokens.id).delete();

      return response.json({ user: false, token: null });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
  /**
   * Verifica um token válido na aplicação
   *
   * @param {token} request
   * @param {token} response
   * @param {*} next
   */
  async verify(request, response, next) {
    try {
      const token = request.headers.authorization.replace('Bearer ', '');
      const secret = process.env.API_SECRET;

      if (!token) return response.status(401).json({ auth: false, message: 'No token provided.' });

      const user = jwt.verify(token, secret);

      if (!user && !user.id) {
        return response.status(401).json({ auth: false, message: 'Failed to authenticate token.' });
      }

      const apiTokens = await connection('api_tokens')
        .where('user_id', user.id)
        .select('*')
        .first();

      if (!apiTokens) {
        return response.status(401).json({ auth: false, message: 'Failed to authenticate token.' });
      }

      return response.status(200).json({ token });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
};
