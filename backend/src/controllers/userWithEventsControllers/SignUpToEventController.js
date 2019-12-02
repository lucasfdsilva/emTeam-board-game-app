require('dotenv').config();
const Event = require('../../models/Event');
const User = require('../../models/User');

module.exports = {
  async signUpToEvent(req, res){

    const { eventId, userId } = req.body;

    try{

      if(!eventId || !userId){
        res.status(400).json({ message: "Error - Missing Required Information from Request"});
      }

      let eventFromDB = await Event.findOne({ _id: eventId });
      let userFromDB = await User.findOne({ _id: userId });
      
      if(!eventFromDB){
        res.status(400).json({ message: "Error - Can't find Event with provided ID" });
      }

      if(!userFromDB){
        res.status(400).json({ message: "Error - Can't find User with provided ID" });
      }

      if(eventFromDB.participants.length >= eventFromDB.numOfPlayers){
        res.status(400).json({ message: "Error - Number Maximum of players reached" });
      }

      eventFromDB.participants.forEach(function(item, index){
        if(item == userId){
          res.status(400).json({ message: "Error - User already joined the event"});
        }
      });

      eventFromDB.participants.push(userFromDB);
      await eventFromDB.save();

      res.status(200).json({ message: "User Joined Event Succesfully" });

    }catch(e){
      res.status(500).json({ message: "Error - could not join event"})
    }

  }
};