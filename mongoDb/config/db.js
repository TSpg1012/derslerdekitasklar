const mongoose = require("mongoose");

// const dbConnect = async () => {
//   await mongoose.connect(process.env.MONGODB_URI);
//   console.log("connected mongoDB");
// };

// module.exports = dbConnect;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected mongoDB");
  })
  .catch((err) => {
    console.log("failed" + err);
  });
