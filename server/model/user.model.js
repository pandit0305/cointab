const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userData:{}
})

const userModel = mongoose.model("userDetailsData", userSchema);

module.exports = {userModel};
