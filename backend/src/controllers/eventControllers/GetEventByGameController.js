require("dotenv").config();
const Event = require("../../models/Event");
const User = require("../../models/User");

module.exports = {
  async getEventByGame(req, res) {
    const { gameId } = req.params;

    let eventFromDB = await Event.find({ gameId: gameId });

    if (eventFromDB.length == 0)
      return res.status(404).send({ Message: "Unable to locate an event with provided game ID." });
    else {
      try {
        res.status(200).json({message: eventFromDB});
      } catch {
        res.status(500).send();
      }
    }
  }
};
