const User = require('./User');
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  game: {
    type: String,
    required: true
  },
  location:{
    type: String,
    required: true
  },
  eventDate:{
    type: Date,
    default: Date.now,
    required: true
  },
  numOfPlayers:{
    type: Number,
    required: true
  },
  duration:{
      type: Number,
      required: true
  }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;