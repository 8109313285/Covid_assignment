const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 9999;
const bodyParser = require("body-parser");
require("./src/dbConfig/connection");

const route = require("./src/Routes/Covid_Router");
const { config } = require("dotenv");

app.use(express.json({ extended: true }));

app.use("/covid", route);

app.listen(PORT, (req, res) => {
  console.log("ServerStarted at PORT : 9999");
});
