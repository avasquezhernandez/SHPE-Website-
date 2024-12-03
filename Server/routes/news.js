const express = require("express");
const News = require("../models/stu_new");
const {
  createEntry
} = require("../controller/newsController");
const router = express.Router();

router.post("/News", createEntry);

module.exports = router;