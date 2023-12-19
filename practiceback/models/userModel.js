const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    discountPercent: Number,
    price: Number,
    salePrice: Number,
  },
  { collection: "products", timestamps: true }
);

const Products = mongoose.model("products", userSchema);

module.exports = Products;
