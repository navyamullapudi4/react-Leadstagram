const express = require("express");
const app = express.Router();
const users = require("./api/users");
const todos = require("./api/todos");
const auth = require("./api/auth");

app.get("/", (req, res) => {
  res.json("you're in /api");
});

app.use("/users", users);
app.use("/todos", todos);
app.use("/auth", auth);

module.exports = app;
