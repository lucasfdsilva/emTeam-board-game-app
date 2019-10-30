const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//User Model
const User = require('../models/User');

//Login Page
router.get('/login', (req, res) => res.render('login'));

//Register Page
router.get('/register', (req, res) => res.render('register'));

//Register handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;

    let errors = [];

    //Check for required fields
    if(!name || !email || !password || !password2){
        errors.push({ msg: 'Please fill in all fields' });
    }

    //Check if passwords match
    if(password !== password2){
        errors.push({ msg: 'Passwords do not match'});
    }

    //Check password length
    if(password.length < 6){
        errors.push({ msg: 'Password should be at least 6 characters long'});
    }

    //Check if there was any error in the form
    if(errors.length > 0){
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    }else{
        //Validation Passed
        User.findOne({email: email})
            .then(user => {
                if(user){
                    //User Exists
                    errors.push({ msg: 'Email is already registered' });
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    });
                }else{
                    const newUser = new User({
                        name,
                        email,
                        password
                    });

                    //Encryptes password
                    bcrypt.genSalt(10, (err, salt) => 
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;
                            //Set password to hashed
                            newUser.password = hash;
                            //Save User
                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg', 'You are now registered and can log in!')
                                    res.redirect('/users/login');
                                })
                                .catch(err => console.log(err));
                        }))
                }
            });
    }
});

module.exports = router;