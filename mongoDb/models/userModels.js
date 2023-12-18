const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  email: String,
  text: String,
  date: Date,
});

userModel = mongoose.model("User", schema);

module.exports = userModel;
