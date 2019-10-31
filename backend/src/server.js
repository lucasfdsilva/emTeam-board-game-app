const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv/config');


const app = express();

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser:true, useUnifiedTopology:true}, () => console.log('MongoDB Connected'));

app.use(express.json());
app.use(routes.openRoutes);
app.use(routes.protectedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));