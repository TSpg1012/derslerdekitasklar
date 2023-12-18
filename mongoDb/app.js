const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("dotenv").config();
require("./config/db");
const dbConnect = require("./config/db");
const port = process.env.PORT || 3000;
// let arr = [
//   {
//     id: 1,
//     name: "seid",
//   },
//   {
//     id: 2,
//     name: "elvin",
//   },
// ];
dbConnect();
app.get("/", (req, res) => {
  res.send(arr);
});

app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
