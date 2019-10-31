require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {

  async login(req, res) {
    const { email, password } = req.body;

    let userFromDB = await User.findOne({ email: email.toLowerCase() });

    if (!userFromDB) {
      return res.status(400).json({message: 'User Not Found'});
    } else {
      try {
        let user = {
            id: userFromDB.id,
            firstName: userFromDB.firstName,
            lastName: userFromDB.lastName,
            email: userFromDB.email,
            password: userFromDB.password
        }//Finishes converting the User Doc received from MongoDB to an object

        if(await bcrypt.compare(password, user.password)){
            //JWT Auth is built here - After checking the user credentials (authentication)

            const accessToken = jwt.sign(user.id, process.env.ACCESS_TOKEN_SECRET);         
            
            res.status(200).json({message: 'User Logged in succesfully', accessToken: accessToken });

        } else {
            res.status(400).json({message: 'Password is incorrect'});
        }
      } catch {
        res.status(500).send();
      }
    }
  } //END of Login Function
};
