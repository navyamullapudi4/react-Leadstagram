const express = require("express");
const app = express.Router();

const users = {
  Navya: {
    Name: "Navya Mullapudi",
    whatsApp: "08585858558",
    Email: "laharimullapudi94@gmail.com",
    Imgur: null,
    Social: {
      Facebook: "navya.lahari.9",
      Twitter: null,
      LinkedIn: "navya-mullapudi-901258128/",
      Instagram: null,
      Quora: null,
      Youtube: null,
      Reddit: "navyamullapudi4",
      Website: null
    }
  },
  Pradeep: {
    Name: " Pradeep",
    whatsApp: "08585963587",
    Email: "laharimullapudi94@gmail.com",
    Imgur: null,
    Social: {
      Facebook: "laharimullapudi",
      Twitter: null,
      LinkedIn: "navyamullapudi4",
      Instagram: null,
      Quora: null,
      Youtube: null,
      Reddit: "navyamullapudi4",
      Website: null
    }
  }
};

app.get("/", (req, res) => {
  res.json(users);
});

module.exports = app;
