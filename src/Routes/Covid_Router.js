const express = require("express");
const router = express.Router();
const {
  queString,
  getAllData,
  getById,
  getTotalNo,
} = require("../Controller/covid");

router.get("/query", queString);
router.get("/getAll", getAllData);
router.get("/getById/:id", getById);

module.exports = router;
