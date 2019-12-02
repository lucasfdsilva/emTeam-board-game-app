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
  },
  joinedEvents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  }],
  fiveStarsReviews: {
    type: Number,
  },
  fourStarsReviews: {
    type: Number,
  },
  threeStarsReviews: {
    type: Number,
  },
  twoStarsReviews: {
    type: Number,
  },
  oneStarReviews: {
    type: Number,
  },
  averageStar: {
    type: Number,
  },
  
});

const User = mongoose.model('User', UserSchema);

module.exports = User;