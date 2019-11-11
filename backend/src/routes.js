const express = require('express');

//Middlewares
const authMiddleware = require('./middlewares/auth');

//Controllers
const RegisterController = require('./controllers/RegisterController');
const LoginController = require('./controllers/LoginController');
const ForgotPasswordController = require('./controllers/ForgotPasswordController');
const ResetPasswordController = require('./controllers/ResetPasswordController');
const CreateEventController = require('./controllers/CreateEventController');
const UpdateEventController = require('./controllers/UpdateEventController');
const GetAllEventsController = require('./controllers/GetAllEventsController');
const GetEventController = require('./controllers/GetEventController');
const DeleteEventController = require('./controllers/DeleteEventController');

//Declaring Router Instances
const openRoutes = express.Router();
const protectedRoutes = express.Router();

protectedRoutes.use(authMiddleware)

//Routes
openRoutes.post('/users/register', RegisterController.create);
openRoutes.post('/users/login', LoginController.login);
openRoutes.post('/users/forgot_password', ForgotPasswordController.forgotPassword);
openRoutes.post('/users/reset_password', ResetPasswordController.reset);
openRoutes.post('/events/create', CreateEventController.createEvent);
openRoutes.put('/events/update', UpdateEventController.updateEvent);
openRoutes.get('/events', GetAllEventsController.getEvents);
openRoutes.get('/events/id', GetEventController.getEvent);
openRoutes.delete('/events/delete', DeleteEventController.deleteEvent);


module.exports = {
    openRoutes: openRoutes,
    protectedRoutes: protectedRoutes
}