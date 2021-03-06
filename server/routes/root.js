const express = require("express");

const app = express.Router();
const api = require("./api");

app.get("/", (req, res) => {
  res.json("welcome to API server!, but we are in root");
});

app.use("/api", api);

module.exports = app;
