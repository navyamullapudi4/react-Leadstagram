const express = require("express");
const app = express.Router();

const todos = require("../../constants/todos.json");
// get the  complete list
app.get("/", (req, res) => {
  res.json(todos);
});

//get the individual item
app.get("/:id", (req, res) => {
  if (todos[req.params.id]) {
    res.json(todos[req.params.id]);
  } else {
    res.status(404).json("get lost!");
  }
});

//create the new item in the list
app.post("/", (req, res) => {
  if (typeof req.body.item !== "undefined") {
    if (todos.includes(req.body.item)) {
      res.status(409).json("How many times will you add?");
    } else {
      todos.push(req.body.item);
      res.json("Thanks for adding the item" + req.body.item);
    }
  } else {
    res.status(406).json("Give me the item!");
  }
});

//updating a particular element
app.put("/:id", (req, res) => {
  if (todos[req.params.id]) {
    if (typeof req.body.item !== "undefined") {
      if (todos.includes(req.body.item)) {
        res.status(409).json("How many times will you add?");
      } else {
        todos[req.params.id] = req.body.item;
        res.status(201).json("Thanks for updating" + req.body.item);
      }
    } else {
      res.status(406).json("Give me the item!");
    }
  } else {
    res.status(404).json("Get lost!");
  }
});

//Delete an item
app.delete("/:id", (req, res) => {
  if (todos[req.params.id]) {
    todos[req.params.id] = null;
    res.status(204).end();
  } else {
    res.status(404).json("Get lost!");
  }
});

module.exports = app;
