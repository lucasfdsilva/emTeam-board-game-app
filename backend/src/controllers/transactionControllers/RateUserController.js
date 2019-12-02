require('dotenv').config();
const User = require('../../models/User');

module.exports = {

  async rateUser(req, res){

    const { userId, ratedUserId, score } = req.body;

    try{

      //Check for missing data on request
      if(!userId || !ratedUserId ||!score ){
        res.status(400).json({ message: "Error - Missing Required Information from Request"});
      }

      //retrieves user & event from DB
      let userFromDB = await User.findOne({ _id: userId });
      let ratedUserFromDB = await User.findOne({ _id: ratedUserId });

      //Check if User that want to rate exists
      if(!userFromDB){
        res.status(400).json({ message: "Error - Can't find User with provided ID" });
      }

      //Check if Rated User exists
      if(!ratedUserFromDB){
        res.status(400).json({ message: "Error - Can't find the to rate" });
      }

      ratedUserFromDB.totalScore = ratedUserFromDB.totalScore + parseInt(score);
      ratedUserFromDB.numOfReviews = ratedUserFromDB.numOfReviews + 1;

      let averageScoreCalculated = ratedUserFromDB.totalScore / ratedUserFromDB.numOfReviews;

      ratedUserFromDB.averageScore = Math.floor(averageScoreCalculated)

      console.log(ratedUserFromDB.totalScore);
      console.log(ratedUserFromDB.averageScore);
      console.log(ratedUserFromDB.numOfReviews);

      await ratedUserFromDB.save();

      res.status(200).json({ message: "Player rated Succesfully" });

    }catch(err){
      res.status(500).json({ message: "Error - could not rate user" });
    }
  }
};