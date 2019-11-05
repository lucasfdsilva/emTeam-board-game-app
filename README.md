<h1>Backend API Methods</h1>

<h2>Users</h2>

<h3>Register User</h3>

<p><b>Route</b>: '/users/register'</p>
<p><b>Method</b>: POST</p>
<code>data: {
	"firstName": "",
	"lastName": "",
	"email": "",
	"password": ""
}</code>
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
<p><b>Method</b>: POST</p>
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
<p><b>Method</b>: POST</p>
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
<p><b>Method</b>: POST</p>
<code>data: {
  	"email": "",
	"token": "",
	"password": ""
}</code><br>
<code>Response: {
	"message": "User password updated successfully"
}</code>


<h3>Update User Profile</h3>
<p><b>Method</b>: PUT</p>
<p><b>Route:</b> '/users/update'</p>
<code>data: {
	"id": "",
  	"email": "",
	"token": "",
	"password": ""
}</code><br>
<code>Response: {
	"message": "User profile updated successfully"
}</code>

<h3>Delete User Profile</h3>
<p><b>Method</b>: DELETE</p>
<p><b>Route:</b> '/users/delete'</p>
<code>data: {
	"id": "",
}</code><br>
<code>Response: {
	"message": "User profile deleted successfully"
}</code>

<h3>Verify User</h3>
<p><b>Route:</b> '/users/${token}'</p>
<p><b>Method</b>: GET</p>
<code>
Response: {
	"message": "User Email Verified Succesfully"
}</code>


<h2>Events</h2>

<h3>Create Event</h3>

<p><b>Route:</b> '/events/create'</p>
