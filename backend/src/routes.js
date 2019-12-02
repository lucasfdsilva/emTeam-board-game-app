const express = require('express');

//Middlewares
const authMiddleware = require('./middlewares/auth');

//Users Controllers
const RegisterController = require('./controllers/userControllers/RegisterController');
const LoginController = require('./controllers/userControllers/LoginController');
const ForgotPasswordController = require('./controllers/userControllers/ForgotPasswordController');
const ResetPasswordController = require('./controllers/userControllers/ResetPasswordController');
const UpdateUserController = require('./controllers/userControllers/UpdateUserController');
const DeleteUserController = require('./controllers/userControllers/DeleteUserController');
const VerifyUserController = require('./controllers/userControllers/VerifyUserController');
const ViewUserController = require('./controllers/userControllers/ViewUserController');

//Event Controllers
const CreateEventController = require('./controllers/eventControllers/CreateEventController');
const UpdateEventController = require('./controllers/eventControllers/UpdateEventController');
const GetAllEventsController = require('./controllers/eventControllers/GetAllEventsController');
const GetEventByIdController = require('./controllers/eventControllers/GetEventByIdController');
const GetEventByHostIdController = require('./controllers/eventControllers/GetEventByHostIdController');
const GetEventByGameController = require('./controllers/eventControllers/GetEventByGameController');
const DeleteEventController = require('./controllers/eventControllers/DeleteEventController');

//User with Event Controllers
const SignUpToEventController = require('./controllers/transactionControllers/SignUpToEventController');
const LeaveEventController = require('./controllers/transactionControllers/LeaveEventController');


//Homepage Controllers
const HomePageController = require('./controllers/homepageControllers/HomePageController');

//Declaring Router Instances
const openRoutes = express.Router();
const protectedRoutes = express.Router();

protectedRoutes.use(authMiddleware)

//Homepage Routes
openRoutes.get('/', HomePageController.homePage);

//Users Routes
openRoutes.get('/users/:id', ViewUserController.viewUser);
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
openRoutes.get('/events/:eventId', GetEventByIdController.getEventById);
openRoutes.get('/events/host/:hostId', GetEventByHostIdController.getEventByHostId);
openRoutes.get('/events/game/:gameId', GetEventByGameController.getEventByGame);
openRoutes.delete('/events/delete', DeleteEventController.deleteEvent);

//User with Event Controllers
openRoutes.put('/join_event', SignUpToEventController.signUpToEvent);
openRoutes.put('/leave_event', LeaveEventController.leaveEvent);


module.exports = {
    openRoutes: openRoutes,
    protectedRoutes: protectedRoutes
}