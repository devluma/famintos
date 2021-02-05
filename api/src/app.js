require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');

// const { APP_NAME, APP_KEY, APP_DEBUG, APP_URL } = process.env;

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(errors());

module.exports = app;
