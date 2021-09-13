const mongoose = require("mongoose");
require("dotenv").config();
const mongo_uri = process.env.mongo_uri;
mongoose
  .connect(mongo_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected Please Proceed...");
  })
  .catch((err) => {
    console.log(err);
  });
