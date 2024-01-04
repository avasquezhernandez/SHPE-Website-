const { default: mongoose } = require("mongoose");
const Events = require("../models/events");

// get a single event
const getEvent = async (req, res) => {
  const { id } = req.params;
  const events = await Events.findById(id);
  if (!mongoose.Types.ObjectId.isValid(id) || !events) {
    return res.status(404).json({ error: "there is no event with this id" });
  }

  res.status(200).json(events);
};

//get all of the events
const getEvents = async (req, res) => {
  const events = await Events.find({});
  res.status(200).json(events);
};
//create an event
const createEvent = async (req, res) => {
  const { title, description, start, end } = req.body;
  try {
    const events = await Events.create({ title, description, start, end });
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteEvent = async (req, res) => {
  const { id } = req.params;
  const events = await Events.findByIdAndDelete(id);
  if (!mongoose.Types.ObjectId.isValid(id) || !events) {
    return res.status(404).json({ error: "there is no event with this id" });
  }

  res.status(200).json(events);
};
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const events = await Events.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!mongoose.Types.ObjectId.isValid(id) || !events) {
    return res.status(404).json({ error: "there is no event with this id" });
  }

  res.status(200).json(events);
};

module.exports = { createEvent, getEvents, getEvent, deleteEvent, updateEvent };
