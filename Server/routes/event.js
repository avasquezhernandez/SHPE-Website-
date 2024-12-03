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

router.get("/event", getEvents);
router.get("/event/:id", getEvent);

router.post("/event", createEvent);
router.delete("/event/:id", deleteEvent);
router.patch("/event/:id", updateEvent);

module.exports = router;
