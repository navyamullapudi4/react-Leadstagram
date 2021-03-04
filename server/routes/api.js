const express = require("express");
const app = express.Router();
const auth = require("./api/auth");
const users = require("./api/users");
const notes = require("./api/notes");

app.get("/", (req, res) => {
  res.json("you're in /api");
});

app.use("/auth", auth);
app.use("/users", users);
app.use("/notes", notes);

module.exports = app;
