require('dotenv').config();
const Event = require('../../models/Event');
const User = require('../../models/User');

module.exports = {
    async deleteEvent(req, res){ 
        const { id } = req.body;   
        let eventFromDB = await Event.findOne({ _id: id });        
        if(!eventFromDB) return res.status(404).send({Message: 'Unable to locate an event with that ID.'});
        else{                 
            try{  
                eventFromDB.remove();
                res.status(200).json({Message: 'Event Deleted Successfully!'});
            }catch{
                res.status(500).send({error: 'Could not delete the event' 
            });
            }
        }               
    }

}