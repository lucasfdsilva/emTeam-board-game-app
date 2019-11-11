require('dotenv').config();
const Event = require('../../models/Event');
const User = require('../../models/User');

module.exports = {
    async getEvent(req, res){
        const {id} = req.body;
        let eventFromDB = await Event.findOne({ _id: id });
        let eventOwner = await User.findOne({_id: eventFromDB.host})
        if(!eventFromDB) return res.status(404).send({Message: 'Unable to locate an event with that ID.'});
        else{
            try{        
                res.status(200).json(eventFromDB + eventOwner);
            }catch{
                res.status(500).send();
            }     
        }           
    }
}