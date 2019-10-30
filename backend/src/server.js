const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const dbConfig = require('./config/database');

const app = express();

mongoose.connect(dbConfig.MongoURI, {useNewUrlParser:true, useUnifiedTopology:true}, console.log('MongoDB Connected'));

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));