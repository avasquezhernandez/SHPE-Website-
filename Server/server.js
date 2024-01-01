const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const eventRoutes = require("./routes/event");
dotenv.config();

const app = express();
app.use(express.json());
const MonConnect = async () => {
  try {
    await mongoose.connect(process.env.database_url);
    console.log("connected to data base");
  } catch (error) {
    throw error;
  }
};
// app.use("/", (req, res) => {
//   return res.send("<h1>login sucessful!!!!</h1>");
// });
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.get("/", (req, res) => {
  console.log("Welcome to my SHPE server");
});
app.use("/api/event", eventRoutes);
app.listen(5000, () => {
  MonConnect();
  console.log("Server started on port 5000");
});
