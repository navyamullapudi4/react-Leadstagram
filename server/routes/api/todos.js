const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
  res.json("you're in /api/todos");
});

module.exports = app;
