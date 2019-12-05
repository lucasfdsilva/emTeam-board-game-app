require('dotenv').config();
const Event = require('../../models/Event');
const User = require('../../models/User');

module.exports = {
  async getEventByHostId(req, res){
    const { hostId } = req.params;

    let eventFromDB = await Event.find({ hostId: hostId });

    if (eventFromDB.length == 0)
      return res.status(404).send({ Message: "Unable to locate an event with provided host ID." });
    else {
      try {
        res.status(200).json({message: eventFromDB});
      } catch {
        res.status(500).send();
      }
    }
  }
};