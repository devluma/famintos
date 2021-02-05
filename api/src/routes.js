const express = require('express');
// const { celebrate, Segments, Joi } = require('celebrate');

const RestaurantController = require('./controllers/RestaurantController');

const routes = express.Router();

// Rotas de Sessão

// Rotas para Restaurantes
routes.get('/restaurants', RestaurantController.index);

// Rotas para Colaboradores

module.exports = routes;
