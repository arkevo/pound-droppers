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


var classes = [
    {
        type: "yoga",
        time: "2019-04-02 12:00:00",
        room: "yoga studio",
      },
      {
        type: "HIIT",
        time: "2019-04-03 13:00:00",
        room: "yoga studio",
      },
      {
        type: "pilates",
        time: "2019-04-04 18:00:00",
        room: "yoga studio",
      },
      {
        type: "cycling",
        time: "2019-04-05 09:00:00",
        room: "cycling room",
      },
      {
        type: "weight training",
        time: "2019-04-06 08:00:00",
        room: "GYM",
      },
      {
        type: "weight training",
        time: "2019-04-07 11:00:00",
        room: "GYM",
      }
  ];
  
  db.Classes.sync();
  
  classes.forEach(classes => {
    db.Classes.create(classes);
  });
  