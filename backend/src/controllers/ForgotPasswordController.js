const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../modules/mailer');

module.exports = {
    async reset(req, res){
        const { email } = req.body;

        try{
            let userFromDB = await User.findOne({ email: email.toLowerCase() });

            //Checks if user exists in the Database
            if(!userFromDB){

                return res.status(400).send({ message: 'User Not Found'});

            } else {

                const token = crypto.randomBytes(20).toString('hex'); //creates a token using crypto to generate random 20 hex characters

                //Creates an instance of date to be used as time limit for the token created above
                const now = new Date();
                now.setHours(now.getHours() + 1);

                //Updates the user found using the email address with the token and token expiration time
                await User.findOneAndUpdate(userFromDB.id, {
                    '$set':{
                        passwordResetToken: token,
                        passwordResetExpires: now
                    }
                });

                /*//Sends Email using template stored in "Resources" to the email address received on request
                mailer.sendMail({
                    to: email,
                    from: 'lucas.silva00@outlook.ie',
                    template: 'auth/forgot_password',
                    context: { token },
                }, (err) => {
                    if (err){
                        return res.status(400).send({ message: 'Cannot send forgot email password'});
                    }
                })*/

                //Sends back response after completing tasks above
                res.status(200).json({ message: 'Success', token: token, expiresAt: now })
            }
        } catch (err){
            res.status(400).send({ message: 'Error on forgot password, try again'});
        }
    }
};