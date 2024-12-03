
const { default: mongoose } = require("mongoose");
const News = require("../models/stu_new");

const createEntry = async (req, res) => {
    const { First, Last, Email } = req.body;
    try {
      const entry = await News.create({ First, Last, Email });
      res.status(200).json(entry);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = { createEntry};