const express = require('express');

//Controllers
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/users', SessionController.store);

module.exports = routes;