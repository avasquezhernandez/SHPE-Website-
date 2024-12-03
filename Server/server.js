const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const eventRoutes = require("./routes/event");
const news_routes = require("./routes/news");
const cors= require("cors");
dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['POST'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));
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
app.use("/api", eventRoutes , news_routes);
app.listen(5000, () => {
  MonConnect();
  console.log("Server started on port 5000");
});
