const Covid = require("../Models/Covid");

exports.queString = async (req, res) => {
  try {
    let { date, county, state, city, college, ipeds_id } = req.query;
    let query = {};
    if (date != null) query.customer_id = date;
    if (county != null) query.county = county;
    if (state != null) query.state = state;
    if (city != null) query.city = city;
    if (college != null) query.college = college;
    if (ipeds_id != null) query.ipeds_id = ipeds_id;
    await Covid.find(query).then((response) => {
      if (response) {
        return res.status(200).json(response);
      } else {
        return res.status(401).json({ message: "No such Records Found" });
      }
    });
  } catch (error) {
    return res.send({ error: error.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    await Covid.find()
      .then((response) => {
        if (response) {
          res.status(200).json(response);
        } else {
          res.status(400).json({ message: "No Such records found" });
        }
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  } catch (err) {
    res.status(402).json(err);
  }
};

exports.getById = async (req, res) => {
  try {
    await Covid.findOne({ _id: req.params.id })
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(401).json({ message: "No Records found with such Id" });
      });
  } catch (err) {
    res.status(402).json(err);
  }
};
