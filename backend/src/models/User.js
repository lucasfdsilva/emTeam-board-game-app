const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true
  },
  verified:{
    type: Boolean,
    default: false
  },
  verificationToken:{
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  passwordResetToken: {
    type: String,
  },
  passwordResetExpires: {
    type: Date,
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;