const mongoose = require("mongoose");

const covid_schema = new mongoose.Schema({
  date: {
    type: Date,
  },
  state: {
    type: String,
  },
  county: {
    type: String,
  },
  city: {
    type: String,
  },
  ipeds_id: {
    type: Number,
  },
  college: {
    type: String,
  },
  cases: {
    type: String,
  },
  cases_2021: {
    type: String,
  },
});

const Covid = mongoose.model("Covid", covid_schema);
module.exports = Covid;
