require('dotenv').config();
const Event = require('../../models/Event');
const User = require('../../models/User');

module.exports = {
    async updateEvent(req, res){ 
        const { id, eventName, game, location, numOfPlayers, eventDate, duration } = req.body;   
        let eventFromDB = await Event.findOne({ _id: id });        
        if(!eventFromDB) return res.status(404).send({Message: 'Unable to locate an event with that ID.'});
        else{                 
            try{
                if(eventFromDB.eventName !== eventName) eventFromDB.eventName = eventName;
                if(eventFromDB.game !== game) eventFromDB.game = game;
                if(eventFromDB.location !== location) eventFromDB.location = location;
                if(eventFromDB.numOfPlayers !== numOfPlayers) eventFromDB.numOfPlayers = numOfPlayers;
                if(eventFromDB.eventDate !== eventDate) eventFromDB.eventDate = eventDate;
                if(eventFromDB.duration !== duration) eventFromDB.duration = duration;
                
                await eventFromDB.save();        
                res.status(200).json({Message: 'Event Updated Successfully!'});
            }catch{
                res.status(500).send();
            }
        }               
    }

}