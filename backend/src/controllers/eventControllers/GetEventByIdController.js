require('dotenv').config();
const Event = require('../../models/Event');
const User = require('../../models/User');

module.exports = {
    async getEventById(req, res){
        const { eventId } = req.params;
        let eventFromDB = await Event.findOne({ _id: eventId });
        if(!eventFromDB) return res.status(404).send({Message: 'Unable to locate an event with that ID.'});
        else{
            try{        
                res.status(200).json(eventFromDB);
            }catch{
                res.status(500).send();
            }     
        }           
    }
}