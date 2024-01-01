const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ events: "my events" });
});
router.get("/:id", (req, res) => {
  res.json({ events: "get a single workout" });
});

router.post("/", (req, res) => {
  res.json({ events: "my events asdf" });
});

module.exports = router;
