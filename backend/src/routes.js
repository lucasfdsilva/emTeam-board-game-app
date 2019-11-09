const express = require('express');

//Middlewares
const authMiddleware = require('./middlewares/auth');

//Users Controllers
const RegisterController = require('./controllers/users/RegisterController');
const LoginController = require('./controllers/users/LoginController');
const ForgotPasswordController = require('./controllers/users/ForgotPasswordController');
const ResetPasswordController = require('./controllers/users/ResetPasswordController');
const UpdateUserController = require('./controllers/users/UpdateUserController');
const DeleteUserController = require('./controllers/users/DeleteUserController');
const VerifyUserController = require('./controllers/users/VerifyUserController');
const ViewUserController = require('./controllers/users/ViewUserController');


//Homepage Controllers
const HomePageController = require('./controllers/homepage/HomePageController');


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


module.exports = {
    openRoutes: openRoutes,
    protectedRoutes: protectedRoutes
}