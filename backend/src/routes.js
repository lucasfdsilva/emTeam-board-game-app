const express = require('express');

//Controllers
const RegisterController = require('./controllers/RegisterController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.post('/users/register', RegisterController.create);
routes.post('/users/login', LoginController.login)

module.exports = routes;