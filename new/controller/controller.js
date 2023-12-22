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

const patchKiwi = async (req, res) => {
  let id = req.params.id;
  let updated = await Seid.findOneAndUpdate({ id: id }, req.body);
};

const getById = async (req, res) => {
  let id = req.params.id;
  let find = await Seid.findOne({ id: id });
  // console.log(findUser);
  res.send(find);
};

const getPutKiwi = async (req, res) => {
  let id = req.params.id;
  let updated = await Seid.replaceOne({ id: id }, req.body);
};

module.exports = {
  getAllUser,
  getPostKiwi,
  deleteKiwi,
  patchKiwi,
  getById,
  getPutKiwi,
};
