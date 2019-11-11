require('dotenv').config();
const Event = require('../models/Event');
const User = require('../models/User');

module.exports = {
    async createEvent(req, res){ 
        
        //Get the request body
        const { id, eventName, game, location, numOfPlayers, eventDate, duration } = req.body;

        //TEMPORARY CHECK: See if email passed for host matches one from DB.
        let userFromDB = await User.findOne({ _id: id });

        //If not, return error.
        if(!userFromDB) return res.status(404).send({Message: 'Unable to locate that user.'});

        //If successful, attempt to create event with passed params.
        else{
            try{
                let event = {
                    host: userFromDB,
                    eventName: eventName,
                    game: game,
                    location: location,              
                    numOfPlayers: numOfPlayers,
                    eventDate: eventDate,
                    duration: duration
                };
                await Event.create(event);        
                res.status(201).send({Message: 'Event Created Successfully!'});
            }catch{
                res.status(500).send({Message: "Error - couldn't create event."});
            }
        }
    }

}