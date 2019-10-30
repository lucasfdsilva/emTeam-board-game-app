const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

//DB Config
const db = require('./config/keys').MongoURI;


//Connect to MongoDB
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


//EJS for the Dev Views. These views are to be used by the app devs only for quick testing. User view will be mobile app only
app.use(expressLayouts);
app.set('view engine', 'ejs');


//Bodyparser Middleware
app.use(express.urlencoded({ extended: false }));


//Express Session Middleware
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );


//Connect Flash
app.use(flash());


//Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg')
    next();
});


//Routes Middleware
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));