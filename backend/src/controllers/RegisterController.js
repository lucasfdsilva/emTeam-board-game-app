const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async create(req, res) {
    const { firstName, lastName, email, password } = req.body;

    let userFromDB = await User.findOne({ email: email.toLowerCase() });

    if (!userFromDB) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      let user = {
        firstName: firstName,
        lastName: lastName,
        email: email.toLowerCase(),
        password: hashedPassword
      }

      await User.create(user);

      res.json({ message: 'User Created Succesfully', user: user })

    } else {
      
      res.json({ message: 'ERROR: User Already Registered', user: userFromDB })
      
    }
  }
};
