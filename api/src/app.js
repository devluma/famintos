require('dotenv-safe').config();

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');

const { APP_DEBUG, API_NAME, API_KEY } = process.env;

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(errors());

if (APP_DEBUG) {
  console.log(`Server name: ${API_NAME} / ${API_KEY}`);
}

module.exports = app;
