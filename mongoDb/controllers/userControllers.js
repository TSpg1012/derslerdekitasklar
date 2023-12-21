const User = require("./../models/userModel");

const postUser = (req, res) => {
  console.log(req.body);
};

const getAllUser = async (req, res) => {
  let allUser = await User.find({});
  res.send(allUser);
};

module.exports = { postUser, getAllUser };
