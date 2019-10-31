const express = require('express');

//Middlewares
const authMiddleware = require('./middlewares/auth');

//Controllers
const RegisterController = require('./controllers/RegisterController');
const LoginController = require('./controllers/LoginController');

//Declaring Router Instances
const openRoutes = express.Router();
const protectedRoutes = express.Router();

protectedRoutes.use(authMiddleware)

//Routes
openRoutes.post('/users/register', RegisterController.create);
openRoutes.post('/users/login', LoginController.login)


module.exports = openRoutes, protectedRoutes;