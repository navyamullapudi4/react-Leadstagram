const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
  res.json("welcome to API server!, but we are in root");
});

module.exports = app;
