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

      const user = await connection('users')
        .where({ email, password: hashPass })
        .select(['name', 'email'])
        .first();

      if (!user) {
        return response.status(401).json({ erro: 'Invalid password or user' });
      }

      const token = jwt.sign({ id: user.id }, process.env.API_SECRET, {
        expiresIn: '24h',
      });

      return response.json({ user, token });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
  /**
   * Faz o logout de um usuário na aplicação
   *
   * @param {*} request
   * @param {user: false, token: null} response
   */
  async logout(request, response) {
    try {
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
      const token = request.headers['x-access-token'];

      if (!token) return response.status(401).json({ auth: false, message: 'No token provided.' });

      // jwt.verify(token, process.env.SECRET, (err, decoded) => {
      //   if (err) {
      //     return response
      //       .status(500)
      //       .json({ auth: false, message: 'Failed to authenticate token.' });
      //   }

      //   request.userId = decoded.id;

      //   next();
      // });

      return response.json({ token });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
};
