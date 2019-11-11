const express = require('express');

//Middlewares
const authMiddleware = require('./middlewares/auth');

//Users Controllers
const RegisterController = require('./controllers/usersControllers/RegisterController');
const LoginController = require('./controllers/usersControllers/LoginController');
const ForgotPasswordController = require('./controllers/usersControllers/ForgotPasswordController');
const ResetPasswordController = require('./controllers/usersControllers/ResetPasswordController');
const UpdateUserController = require('./controllers/usersControllers/UpdateUserController');
const DeleteUserController = require('./controllers/usersControllers/DeleteUserController');
const VerifyUserController = require('./controllers/usersControllers/VerifyUserController');
const ViewUserController = require('./controllers/usersControllers/ViewUserController');

//Event Controllers
const CreateEventController = require('./controllers/eventsControllers/CreateEventController');
const UpdateEventController = require('./controllers/eventsControllers/UpdateEventController');
const GetAllEventsController = require('./controllers/eventsControllers/GetAllEventsController');
const GetEventController = require('./controllers/eventsControllers/GetEventController');
const DeleteEventController = require('./controllers/eventsControllers/DeleteEventController');


//Homepage Controllers
const HomePageController = require('./controllers/homepageControllers/HomePageController');

//Declaring Router Instances
const openRoutes = express.Router();
const protectedRoutes = express.Router();

protectedRoutes.use(authMiddleware)


//Homepage Routes
openRoutes.get('/', HomePageController.homePage);

//Users Routes
openRoutes.get('/users', ViewUserController.viewUser);
openRoutes.post('/users/register', RegisterController.create);
openRoutes.post('/users/login', LoginController.login);
openRoutes.post('/users/forgot_password', ForgotPasswordController.forgotPassword);
openRoutes.post('/users/reset_password', ResetPasswordController.reset);
openRoutes.put('/users/update', UpdateUserController.updateUser);
openRoutes.delete('/users/delete', DeleteUserController.deleteUser);
openRoutes.get('/users/verify/:verificationToken', VerifyUserController.verifyUser);

//Event Routes
openRoutes.post('/events/create', CreateEventController.createEvent);
openRoutes.put('/events/update', UpdateEventController.updateEvent);
openRoutes.get('/events', GetAllEventsController.getEvents);
openRoutes.get('/events/id', GetEventController.getEvent);
openRoutes.delete('/events/delete', DeleteEventController.deleteEvent);


module.exports = {
    openRoutes: openRoutes,
    protectedRoutes: protectedRoutes
}