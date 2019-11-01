const path = require('path');
const nodemailer = require('nodemailer');
const handleBars = require('nodemailer-express-handlebars');
require('dotenv').config();

//Credentials for using the MailTrap Services
const transport = nodemailer.createTransport({
    host: process.env.MAIL_AUTH_HOST,
    port: process.env.MAIL_AUTH_PORT,
    auth: {
      user: process.env.MAIL_AUTH_USER,
      pass: process.env.MAIL_AUTH_PASS
    }
  });

//Configure the MailTrap Transport declared above
transport.use('compile', handleBars({
  viewEngine: 'handlebars',
  viewPath: path.resolve('./src/resources/mail/'),
  extName: 'html'
}));


module.exports = transport;