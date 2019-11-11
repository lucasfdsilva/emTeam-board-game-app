const User = require('../../models/User');


module.exports = {

    async viewUser(req, res){
        const { id } = req.body;

        let userFromDB = await User.findOne({ _id: id });

        if (!userFromDB) {
            return res.status(400).json({ message: "User Not Found" });
          } else {
            try {
      
              res.status(200).json({ message: userFromDB });
              
            } catch {
              res.status(500).send();
            }
          }
    }
};