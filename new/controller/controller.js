const Seid = require("../model/model");

const getAllUser = async (req, res) => {
  let SeidHamisi = await Seid.find({});
  res.send(SeidHamisi);
};

const getPostKiwi = async (req, res) => {
  // let findUser = await Seid.findOne({})
  const newKiwi = new Seid(req.body);
  newKiwi.save();
};

const deleteKiwi = async (req, res) => {
  let findKiwi = await Seid.findOne({ id: req.params.id });
  console.log(findKiwi);
  let deletedKiwi = await Seid.findByIdAndDelete(findKiwi._id);
};

const patchKiwi = async (req, res) => {};

module.exports = { getAllUser, getPostKiwi, deleteKiwi, patchKiwi };
