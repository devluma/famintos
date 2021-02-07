const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const SessionsController = require('./controllers/SessionsController');
const UsersController = require('./controllers/UsersController');
const RestaurantsController = require('./controllers/RestaurantsController');

const routes = express.Router();

// Rotas de Sessão
routes.get('/sessions/logout', SessionsController.logout);
routes.get('/sessions/verify', SessionsController.verify);
routes.post(
  '/sessions',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  SessionsController.authenticate
);

// Rotas para Usuários
routes.get(
  '/users',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  UsersController.index
);
routes.get(
  '/users/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  UsersController.show
);
routes.post(
  '/users',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  UsersController.store
);
routes.put(
  '/users/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  UsersController.update
);
routes.delete(
  '/users/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  UsersController.destroy
);

// Rotas para Restaurantes
routes.get(
  '/restaurants',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      name: Joi.string(),
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  RestaurantsController.index
);
routes.get(
  '/restaurants/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  RestaurantsController.show
);
routes.post(
  '/restaurants',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  RestaurantsController.store
);
routes.put(
  '/restaurants/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string(),
      attempts: Joi.number(),
    }),
  }),
  RestaurantsController.update
);
routes.delete(
  '/restaurants/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  RestaurantsController.destroy
);

module.exports = routes;
