const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
    
  async login(req, res) {
    const { email, password } = req.body;

    let user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).send("Cannot find user");
    } else {
      try {
        if(await bcrypt.compare(password, user.password)){
            res.send('User logged in succesfully');
        } else {
            res.send('Password is incorrect');
        }
      } catch {
        res.status(500).send();
      }
    }
  } //END of Login Function
};
