const User = require('../../models/User');

module.exports = {

    async deleteUser(req, res) {

        const { id } = req.body;

        try {

            if (!id) {
                res.status(400).json({ message: "ERROR: Missing User Id from Request" });
            }

            let userFromDB = await User.findOne({ _id: id });

            if (!userFromDB) {
                return res.status(400).json({ message: "User Not Found" });
            } else {
                await userFromDB.remove();

                res.status(200).json({ message: 'User Account deleted succesfully' });
            }
        }
        catch {
            res.status(500).send({ error: 'Could not delete the user' });
        }
    }
}