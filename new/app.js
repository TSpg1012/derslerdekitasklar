const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router/router");
require("dotenv").config();
require("./config/db");
app.use(bodyParser.json());
app.use("/", router);
const port = process.env.PORT || 3000;
let arr = [
  {
    id: 1,
    name: "Kerem",
  },
  {
    id: 2,
    name: "Aysun",
  },
];
app.get("/", (req, res) => {
  res.send(arr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/", (req, res) => {
  console.log(req.body);
  arr.push(req.body);
  res.send(arr);
});

app.delete("/:id", (req, res) => {
  arr = arr.filter((elem) => elem.id.toString() !== req.params.id);
  res.send(arr);
});

app.get("/:id", (req, res) => {
  searched = arr.find((elem) => elem.id.toString() == req.params.id);
  res.send(searched);
});
