require('dotenv').config();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  async create(req, res) {
    const { firstName, lastName, email, password } = req.body;

    try {

      if (!firstName || !lastName || !email || !password) {
        res.status(400).json({ message: "Missing Required Information from Request" });
      }

      let userFromDB = await User.findOne({ email: email });

      if (!userFromDB) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        verificationToken = crypto.randomBytes(20).toString("hex");

        let user = {
          firstName: firstName,
          lastName: lastName,
          email: email.toLowerCase(),
          password: hashedPassword,
          verificationToken: verificationToken
        };

        await User.create(user);

        //SendGrid configuration & Email send
        const msg = {
          to: `${user.email}`,
          from: "no-reply@boardgeek.ie",
          subject: "Please verify your email address - Board Geek",
          html: `<p>Please use the following token to verify your email address: http://apiboardgeek.co.uk/users/verify/${user.verificationToken}</p>`
        };

        await sgMail.send(msg).then(() => {
          console.log("SendGrid Service Email Sent");
        })
          .catch(err => {
            console.log(err);
          });

        res.status(200).json({ message: 'User Created Succesfully', verificationEmail: 'Verification Email Sent Successfully', user: user });

      } else {
        res.status(403).json({ message: "ERROR: User Already Registered", user: userFromDB });
      }

    } catch {
      res.status(500).send();
    }
  }
}
