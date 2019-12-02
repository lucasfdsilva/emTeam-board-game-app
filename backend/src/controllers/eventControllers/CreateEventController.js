require('dotenv').config();
const Event = require('../../models/Event');
const User = require('../../models/User');

module.exports = {
    async createEvent(req, res){ 
        
        //Get the request body
        const { hostId, eventName, gameId, location, numOfPlayers, eventDate, duration } = req.body;

        if (!hostId || !eventName || !gameId || !location || !numOfPlayers || !eventDate || !duration) {
            res.status(400).json({ message: "ERROR: Missing Required Information from Request" });
        }

        //TEMPORARY CHECK: See if user id passed for host matches one from DB.
        let userFromDB = await User.findOne({ _id: hostId });

        //If not, return error.
        if(!userFromDB) return res.status(404).send({ Message: `Can't find user in database.` });

        //If successful, attempt to create event with passed params.
        else{
            try{
                let event = {
                    hostId: userFromDB,
                    eventName: eventName,
                    gameId: gameId,
                    location: location,              
                    numOfPlayers: numOfPlayers,
                    eventDate: eventDate,
                    duration: duration,
                    participants: hostId
                };
                await Event.create(event);

                res.status(201).send({Message: 'Event Created Successfully!'});
            }catch{
                res.status(500).send({Message: `Error - couldn't create event. Please try again`});
            }
        }
    }

}