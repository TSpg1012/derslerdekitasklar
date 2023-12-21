const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
    id: String,
  },
  { collection: "Kiviler" }
);

const Kiwi = mongoose.model("Kiviler", schema);

module.exports = Kiwi;
