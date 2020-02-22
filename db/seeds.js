const db = require("../models");

var users = [
  {
    email: "huan1@gmail.com",
    password: "1234"
  },
  {
    email: "huan2@gmail.com",
    password: "1234"
  },
  {
    email: "huan3@gmail.com",
    password: "1234"
  },
  {
    email: "huan4@gmail.com",
    password: "1234"
  }
];

db.User.sync();

users.forEach(user => {
  db.User.create(user);
});

