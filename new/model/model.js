const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
    id: String,
    surname: String,
    age: Number,
  },
  { collection: "Kiviler" }
);

const Kiwi = mongoose.model("Kiviler", schema);

module.exports = Kiwi;
