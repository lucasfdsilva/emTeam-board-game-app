<h1>Backend API Methods</h1>

<h2>Users</h2>

<h3>Register User</h3>

<p><b>Route</b>: '/users/register'<p>
<code>data: {
	"firstName": "",
	"lastName": "",
	"email": "",
	"password": ""
}</code><br>
<code>Response: {
	"message": "",
 	 "user": {
    	"firstName": "",
    	"lastName": "",
    	"email": "",
    	"password": ""
}</code>

<h3>Login User</h3> 
<p><b>Route</b>: '/users/login'</p>
<code>data: {
  	"email": "",
	"password": ""
}</code><br>
<code>Response: {
	"message": "",
  	"accessToken": ""
}</code>

<h3>Forgot Password</h3>
<p><b>Route:</b> '/users/forgot_password'</p>
<code>data: {
  "email": ""
}</code><br>
<code>Response: {
	"message": "",
  	"token": "",
 	"expiresAt": ""
}</code>

<h3>Reset Password</h3>
<p><b>Route:</b> '/users/reset_password'</p>
<code>data: {
  	"email": "",
	"token": "",
	"password": ""
}</code><br>
<code>Response: {
	"message": "User password updated successfully"
}</code>


<h2>Events</h2>

<h3>Create Event</h3>

<p><b>Route:</b> '/events/create'</p>
