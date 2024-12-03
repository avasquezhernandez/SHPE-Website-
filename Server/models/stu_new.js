const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const news_schema = new Schema(
  {
    First: {
      type: String,
      required: true,
    },
    Last: {
      type: String,
      required: true,
      unique: true,
    },
    Email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("News", news_schema);