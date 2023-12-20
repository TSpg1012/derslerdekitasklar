const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
let arr = [
  {
    name: "Abel Testafe",
    age: 33,
    id: 1,
    img: "https://m.media-amazon.com/images/M/MV5BYjQzODUzYzItMjI2Ni00MTI3LWJhZWYtNjBhYTZmMTI2OGY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UY414_CR25,0,280,414_.jpg",
  },
  {
    name: "Alex Turner",
    age: 37,
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Alex_Turner_en_2022.webp/220px-Alex_Turner_en_2022.webp.png",
  },
  {
    name: "Kevin Parker",
    age: 37,
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tame_Impala-3687_%2818659088669%29.jpg/300px-Tame_Impala-3687_%2818659088669%29.jpg",
  },
];

app.get("/singers", (req, res) => {
  if (req.query.name) {
    singer = arr.find((elem) =>
      elem.name.toLowerCase().includes(req.query.name.toLowerCase())
    );
    res.send(singer);
  } else {
    res.send(arr);
  }
});

app.get("/singers/:id", (req, res) => {
  singer = arr.find((elem) => elem.id == req.params.id);
  res.send(singer);
});

app.post("/singers", function (req, res) {
  let data = req.body;
  console.log(data);
  arr.push(data);
  res.send(arr);
});

app.delete("/singers/:id", function (req, res) {
  arr = arr.filter((elem) => elem.id != req.params.id);
  res.send(arr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
