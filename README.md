<h2>Backend API Available at:</h2>
http://apiboardgeek.co.uk

<h2>Mobile Application Available at:</h2>
<b>Google Play:</b> https://play.google.com/store/apps/details?id=com.emteam.boardgeek</br>
<b>Aptoide App Store (Most up-to-date version):</b> https://boardgeek.en.aptoide.com/

<h2>Run Backend Locally:</h2>
<code>cd backend</code>
<code>npm install</code>
<code>npm run devStart</code>
<code>Application will listen to Port 5000 if no System Env is configured.</code>
<br>

<h2>Run Mobile Locally:</h2>
<code>npm install --global expo</code>
<code>cd frontend-mobile</code>
<code>npm install</code>
<code>npm run start</code>
<br>

<h2>Run Web App Locally:</h2>
<code>cd frontend-web</code>
<code>npm install</code>
<code>npm run start</code>
<br>

<h2>Backend API Methods</h2>

<h2>Users</h2>

<h3>Register User</h3>

<p><b>Route</b>: '/users/register'</p>
<p><b>Method</b>: POST</p>
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
<p><b>Route:</b> '/users/update'</p>
<p><b>Method</b>: PUT</p>
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
<p><b>Route:</b> '/users/delete'</p>
<p><b>Method</b>: DELETE</p>
<code>data: {
	"id": "",
}</code><br>
<code>Response: {
	"message": "User profile deleted successfully"
}</code>

<h3>Verify User</h3>
<p><b>Route:</b> '/users/:verificationToken'</p>
<p><b>Method</b>: GET</p>
<code>
Response: {
	"message": "User Email Verified Succesfully"
}</code>


<h2>Events</h2>


<h3>Create Event</h3>
<p><b>Route:</b> '/events/create'</p>
<p><b>Method</b>: POST</p>
<code>data: {
	"id": "",
	"eventName": "",
	"game": "",
	"location": "",
	"numOfPlayers": "",
	"eventDate": "",
	"duration": ""
</code><br>
<code>Response: {
	"message": "Event Created Successfully!"
	}</code>
	
	
<h3>Get All Events</h3>
<p><b>Route:</b> '/events'</p>
<p><b>Method</b>: GET</p>
<code>Response: {
	"_id": "",
	"host": "",
	"eventName": "",
	"game": "",
	"location": "",
	"numOfPlayers": "",
	"eventDate": "",
	"duration" "",
	"__v": ""
	}</code>
	
	
<h3>Get Event</h3>
<p><b>Route:</b> '/events/id'</p>
<p><b>Method</b>: GET</p>
<code>data: {
	"id": ""
</code><br>
<code>Response: {
	"_id": "",
	"host": "",
	"eventName": "",
	"game": "",
	"location": "",
	"numOfPlayers": "",
	"eventDate": "",
	"duration": "",
	"__v": "",
	"verified": "",
	"_id": "",
	"firstName": "",
	"lastName": "",
	"email": "",
	"password": "",
	"verificationToken": "",
	"createdAt": "",
	"__v": "",
	"passwordRestExpires": "",
	"passwordResetToken": ""
	}</code>
	
	
<h3>Update Event</h3>
<p><b>Route:</b> '/events/update'</p>
<p><b>Method</b>: PUT</p>
<code>data: {
	"id": "",
	"eventName": "",
	"game": "",
	"location": "",
	"numOfPlayers": "",
	"eventDate": "",
	"duration": ""
</code><br>
<code>Response: {
	"message": "Event Updated Successfully!"
	}</code>
	
	
<h3>Delete Event</h3>
<p><b>Route:</b> '/events/delete'</p>
<p><b>Method</b>: DELETE</p>
<code>data: {
	"id": "",
</code><br>
<code>Response: {
	"message": "Event Deleted Successfully!"
	}</code>
