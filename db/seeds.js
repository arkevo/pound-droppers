require("dotenv").config();
console.log("[DEBUG] process.env.JAWS_DB_URL", process.env.JAWS_DB_URL);
const db = require("../models");

db.sequelize.sync().then(() => {
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

  users.forEach(async user => {
    try {
      await db.User.create(user);
    } catch (err) {
      console.error(err);
    }
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

  trainers.forEach(async trainers => {
    try {
      await db.Trainers.create(trainers);
    } catch (err) {
      console.error(err);
    }
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

  classes.forEach(async classes => {
    try {
      await db.Classes.create(classes);
    } catch (err) {
      console.error(err);
    }
  });

  var answers = [
    {
      a1: 1,
      a2: 2,
      a3: 3,
      a4: 4,
      a5: 3,
      a6: 4
    },
    {
      a1: 5,
      a2: 5,
      a3: 2,
      a4: 1,
      a5: 3,
      a6: 2
    },
    {
      a1: 4,
      a2: 4,
      a3: 4,
      a4: 2,
      a5: 2,
      a6: 1
    },
    {
      a1: 1,
      a2: 1,
      a3: 1,
      a4: 2,
      a5: 2,
      a6: 5
    },
    {
      a1: 1,
      a2: 2,
      a3: 2,
      a4: 2,
      a5: 2,
      a6: 2
    },
    {
      a1: 5,
      a2: 5,
      a3: 5,
      a4: 4,
      a5: 5,
      a6: 4
    }
  ];

  answers.forEach(async answers => {
    try {
      await db.Answers.create(answers);
    } catch (err) {
      console.error(err);
    }
  });
});
