# emTeam---board-game-matcher-app

Backend API Methods

Register User: /users/register
data: {
	"firstName": "",
	"lastName": "",
	"email": "",
	"password": ""
}
Response: {
	"message": "",
 	 "user": {
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
Response: {
	"message": "",
  	"accessToken": ""
}

Forgot Password: /users/forgot_password
data: {
  "email": ""
}
Response: {
	"message": "",
  	"token": "",
 	"expiresAt": ""
}

Reset Password: /users/reset_password
data: {
  	"email": "",
	"token": "",
	"password": ""
}
Response: {
	"message": "User password updated succesfully"
}

