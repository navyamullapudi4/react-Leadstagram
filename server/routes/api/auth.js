const express = require("express");
const app = express.Router();

const users = [
  {
    Username: "Navya",
    password: "navya@123",
    FullName: "Navya Mullapudi"
  },
  {
    Username: "Keerthi",
    password: "Keerthi@123",
    FullName: "Keerthi sekhar"
  }
];

//create new user
//validate user
app.post("/login", (req, res) => {
  const { Username, Password } = req.body;
  let match = users.find(
    u => u.Username === Username && u.Password === Password
  );
  if (match) {
    // Make a shallow copy so that even if we remove password, it doesn't affect the original variable.
    match = { ...match };
    delete match.Password;
    req.session.User = match;
    res.status(`Successfully logged in as ${match.FullName}!`);
  }
});
//update existing user
//delete existing user

module.exports = app;
