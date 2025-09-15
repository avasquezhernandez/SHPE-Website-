const { default: mongoose } = require("mongoose");
const Emails = require("../models/subscribe");



const createEmailEntry = async (req, res) => {
  const { email } = req.body;
  try {
    const emails = await Emails.create({ email });
    await emails.save();
    res.status(200).json(emails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { createEmailEntry };
