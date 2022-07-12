const mongoose = require('mongoose');

const users = {
    email: { type: String, required: true },
    firstName: String,
    _id: mongoose.Schema.Types.ObjectId,
};

module.exports = mongoose.model("Users", users);