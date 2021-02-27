const express = require("express");
const app = express.Router();

const users = require("../../constants/users.json");

app.get("/", (req, res) => {
  res.json(users);
});

app.get("/:id", (req, res) => {
  //check whether  this ID is existing.
  //If exists,show the content if not send error message
  if (users[req.params.id]) {
    res.json(users[req.params.id]);
  } else {
    res.status(404).json("get lost!");
  }
});

module.exports = app;
