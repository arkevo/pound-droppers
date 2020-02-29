require("dotenv").config();
console.log("[DEBUG] process.env.JAWSDB_URL", process.env.JAWSDB_URL);
const db = require("../models");

db.sequelize.sync({ force: false }).then(() => {
  // var users = [
  //   {
  //     email: "huan1@gmail.com",
  //     password: "1234"
  //   },
  //   {
  //     email: "huan2@gmail.com",
  //     password: "1234"
  //   },
  //   {
  //     email: "huan3@gmail.com",
  //     password: "1234"
  //   },
  //   {
  //     email: "huan4@gmail.com",
  //     password: "1234"
  //   }
  // ];

  // users.forEach(async user => {
  //   try {
  //     await db.User.create(user);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // });

  // var trainers = [
  //   {
  //     name: "Amy",
  //     photo: "/assets/img/Amy.jpg",
  //     introduction: "Hi, My name is Amy."
  //   },
  //   {
  //     name: "Jacob",
  //     photo: "/assets/img/Jacob.jpg",
  //     introduction: "Hi, My name is Jacob."
  //   },
  //   {
  //     name: "Emily",
  //     photo: "/assets/img/Emily.jpg",
  //     introduction: "Hi, My name is Emily."
  //   },
  //   {
  //     name: "Mark",
  //     photo: "/assets/img/Mark.jpg",
  //     introduction: "Hi, My name is Mark."
  //   },
  //   {
  //     name: "Mia",
  //     photo: "/assets/img/Mia.jpg",
  //     introduction: "Hi, My name is Mia."
  //   },
  //   {
  //     name: "Eric",
  //     photo: "/assets/img/Eric.jpg",
  //     introduction: "Hi, My name is Eric."
  //   }
  // ];

  // trainers.forEach(async trainers => {
  //   try {
  //     await db.Trainers.create(trainers);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // });

  var classes = [
    {
      type: "Yoga",
      time: "2019-04-02 5:00:00",
      room: "Room A",
      TrainerId: 4
    },
    {
      type: "HIIT",
      time: "2019-04-03 14:00:00",
      room: "Room 3",
      TrainerId: 5
    },
    {
      type: "Pilates",
      time: "2019-04-04 19:00:00",
      room: "Room C",
      TrainerId: 6
    },
    {
      type: "Cycling",
      time: "2019-04-05 16:00:00",
      room: "Room D",
      TrainerId: 1
    },
    {
      type: "Weight Training",
      time: "2019-04-06 18:00:00",
      room: "Studio A",
      TrainerId: 2
    },
    {
      type: "Cable Training",
      time: "2019-04-07 19:00:00",
      room: "GYM",
      TrainerId: 3
    }
  ];

  classes.forEach(async classes => {
    try {
      await db.Classes.create(classes);
    } catch (err) {
      console.error(err);
    }
  });
});
