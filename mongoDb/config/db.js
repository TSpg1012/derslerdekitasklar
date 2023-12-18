const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("connected mogodb");
};

module.exports = dbConnect;
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("connected mongoDB");
//   })
//   .catch((err) => {
//     console.log("failed" + err);
//   });
