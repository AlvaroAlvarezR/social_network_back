const db = require("../models");
const User = db.User;

exports.findUserLogin = async (email) => {
    return await User.findOne({
        where: { email }
    })
}