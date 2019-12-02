const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const socketio = require('socket.io');
const http = require('http');
require('dotenv/config');

const app = express();
const server = http.Server(app);
const io = socketio(server);

io.on('connection', socket => {
  console.log('User connected', socket.id);
});

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false}, () => 
console.log('MongoDB Connected'));

app.use(express.json());
app.use(routes.openRoutes);
app.use(routes.protectedRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = app;