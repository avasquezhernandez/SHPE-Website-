const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const eventRoutes = require("./routes/event");
const emailRoutes = require("./routes/sub");
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const MonConnect = async () => {
  try {
    await mongoose.connect(process.env.database_url);
    console.log("connected to data base");
  } catch (error) {
    throw error;
  }
};

app.listen(5000, () => {
  MonConnect();
  console.log("Server started on port 5000");
});

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.get("/", (req, res) => {
  console.log("Welcome to my SHPE server");
});

app.use("/api/event", eventRoutes);
app.use("/api/subscribe", emailRoutes);




