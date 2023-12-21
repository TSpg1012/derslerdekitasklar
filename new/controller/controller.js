const Seid = require("../model/model");

const getAllUser = async (req, res) => {
  let SeidHamisi = await Seid.find({});
  res.send(SeidHamisi);
};

module.exports = { getAllUser };
