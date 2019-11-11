require('dotenv').config();
const Event = require('../models/Event');

module.exports = {
    async getEvents(req, res){
        const collection = await Event.find();         
        res.json(collection);
    }
}