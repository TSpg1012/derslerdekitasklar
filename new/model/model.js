const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    title: String,
  },
  { collection: "Kiviler" }
);

const Kiwi = mongoose.model("Kiviler", schema);

module.exports = Kiwi;
