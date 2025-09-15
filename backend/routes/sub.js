const express = require("express");
const Emails = require("../models/subscribe");
const {
  createEmailEntry

} = require("../controller/sub_controller");
const router = express.Router();



router.post("/", createEmailEntry);


module.exports = router;
