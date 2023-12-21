const express = require("express");
const bodyParser = require("body-parser");
require("./config/db");
require("dotenv").config();

const Products = require("./models/userModel");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT;
// const data = require("./db.json");

app.get("/products", async (req, res) => {
  //   let filteredData = data.products;
  //   if (!req.query.name) {
  //   }
  //   if (req.query.name) {
  //     filteredData = filteredData.filter((x) => x.name == req.query.name);
  //   }
  //   if (req.query.price) {
  //     filteredData = filteredData.filter((x) => x.price == req.query.price);
  //   }
  //   res.send(filteredData);
  let AllProducts = await Products.find({});
  if (!req.query.name) {
  }
  if (req.query.name) {
    AllProducts = AllProducts.filter((x) => x.name == req.query.name);
  }
  if (req.query.price) {
    AllProducts = AllProducts.filter((x) => x.price == req.query.price);
  }

  res.send(AllProducts);
});
app.get("/products/:id", async (req, res) => {
  let AllProducts = await Products.find({});
  res.send(
    AllProducts.find((x) => {
      return x.id == req.params.id;
    })
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
