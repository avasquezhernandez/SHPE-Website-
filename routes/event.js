const express = require("express");
const Events = require("../models/events");
const {
  createEvent,
  getEvent,
  getEvents,
  deleteEvent,
  updateEvent,
} = require("../controller/eventController");
const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getEvent);

router.post("/", createEvent);
router.delete("/:id", deleteEvent);
router.patch("/:id", updateEvent);

module.exports = router;
