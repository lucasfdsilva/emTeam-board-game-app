# emTeam---board-game-matcher-app

Backend API Methods

Register User: /users/register
data: {
	"firstName": "",
	"lastName": "",
	"email": "",
	"password": ""
}

Login User: /users/login
data: {
  "email": "",
	"password": ""
}

Forgot Password: /users/forgot_password
data: {
  "email": ""
}

Reset Password: /users/reset_password
data: {
  "email": "",
	"token": "",
	"password": ""
}

