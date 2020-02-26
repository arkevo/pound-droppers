require("dotenv").config();
console.log("[DEBUG] process.env.JAWS_DB_URL", process.env.JAWS_DB_URL);
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

var trainers = [
  {
    name: "Amy",
    photo: "photoUrl",
    introduction: "Hi, My name is Amy."
  },
  {
    name: "Jacob",
    photo: "photoUrl",
    introduction: "Hi, My name is Jacob."
  },
  {
    name: "Emily",
    photo: "photoUrl",
    introduction: "Hi, My name is Emily."
  },
  {
    name: "Mark",
    photo: "photoUrl",
    introduction: "Hi, My name is Mark."
  },
  {
    name: "Mia",
    photo: "photoUrl",
    introduction: "Hi, My name is Mia."
  },
  {
    name: "Eric",
    photo: "photoUrl",
    introduction: "Hi, My name is Eric."
  }
];

db.Trainers.sync();

trainers.forEach(trainers => {
  db.Trainers.create(trainers);
});

var classes = [
  {
    type: "yoga",
    time: "2019-04-02 12:00:00",
    room: "yoga studio",
    TrainerId: 1
  },
  {
    type: "HIIT",
    time: "2019-04-03 13:00:00",
    room: "yoga studio",
    TrainerId: 2
  },
  {
    type: "pilates",
    time: "2019-04-04 18:00:00",
    room: "yoga studio",
    TrainerId: 3
  },
  {
    type: "cycling",
    time: "2019-04-05 09:00:00",
    room: "cycling room",
    TrainerId: 4
  },
  {
    type: "weight training",
    time: "2019-04-06 08:00:00",
    room: "GYM",
    TrainerId: 5
  },
  {
    type: "weight training",
    time: "2019-04-07 11:00:00",
    room: "GYM",
    TrainerId: 6
  }
];

db.Classes.sync();

classes.forEach(classes => {
  db.Classes.create(classes);
});
