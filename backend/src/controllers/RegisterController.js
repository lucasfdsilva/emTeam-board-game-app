const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async create(req, res) {
    const { firstName, lastName, email, password } = req.body;

    let msg;

    let user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      user = await User.create({
        firstName,
        lastName,
        email: email.toLowerCase(),
        password: hashedPassword
      });

      msg = {
        text: "New User Created",
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        email: `${email}`,
        password: `${password}`
      };
    } else {
      msg = {
        text: "User already registered",
        firstName: `${user.firstName}`,
        lastName: `${user.lastName}`,
        email: `${user.email}`,
        password: `${user.password}`
      };
    }

    return res.json(msg);
  }
};
