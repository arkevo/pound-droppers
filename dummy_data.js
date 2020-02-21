var q1 = "Would you like to try yoga?";
var q2 = "Would you like to try pilates?";
var q3 = "Would you like to try cycling?";
var q4 = "Would you like to try weight training?";
var q5 = "Would you like to try HIIT (High-intensity interval training)?";
var q6 =
  "Would you like to get advice about diet and nutritions from your trainer?";
var users = [
  {
    id: 1,
    email: "huan123@gmail.com",
    password: "1234",
    q1: "5",
    q2: "5",
    q3: "3",
    q4: "3",
    q5: "4",
    q6: "5"
  }
];
var trainers = [
  {
    id: 1,
    name: "Amy",
    photo: "photoUrl",
    q1: "5",
    q2: "5",
    q3: "4",
    q4: "3",
    q5: "3",
    q6: "5",
    introduction: "Hi, My name is Amy."
  },
  {
    id: 2,
    name: "Jacob",
    photo: "photoUrl",
    q1: "3",
    q2: "3",
    q3: "5",
    q4: "5",
    q5: "5",
    q6: "5",
    introduction: "Hi, My name is Jacob."
  },
  {
    id: 3,
    name: "Emily",
    photo: "photoUrl",
    q1: "3",
    q2: "3",
    q3: "5",
    q4: "5",
    q5: "5",
    q6: "4",
    introduction: "Hi, My name is Emily."
  },
  {
    id: 4,
    name: "Mark",
    photo: "photoUrl",
    q1: "3",
    q2: "3",
    q3: "3",
    q4: "5",
    q5: "5",
    q6: "3",
    introduction: "Hi, My name is Mark."
  },
  {
    id: 5,
    name: "Mia",
    photo: "photoUrl",
    q1: "4",
    q2: "4",
    q3: "3",
    q4: "3",
    q5: "3",
    q6: "3",
    introduction: "Hi, My name is Mia."
  },
  {
    id: 6,
    name: "Eric",
    photo: "photoUrl",
    q1: "4",
    q2: "4",
    q3: "5",
    q4: "4",
    q5: "4",
    q6: "4",
    introduction: "Hi, My name is Eric."
  }
];
var classes = [
  {
    id: 1,
    type: "yoga",
    day: "MON",
    time: "6PM",
    room: "yoga studio",
    trainerId: 6
  },
  {
    id: 2,
    type: "HIIT",
    day: "MON",
    time: "7PM",
    room: "yoga studio",
    trainerId: 4
  },
  {
    id: 3,
    type: "pilates",
    day: "TUE",
    time: "6PM",
    room: "yoga studio",
    trainerId: 1
  },
  {
    id: 4,
    type: "cycling",
    day: "TUE",
    time: "6PM",
    room: "cycling room",
    trainerId: 2
  },
  {
    id: 5,
    type: "weight training",
    day: "WED",
    time: "6PM",
    room: "GYM",
    trainerId: 4
  },
  {
    id: 6,
    type: "weight training",
    day: "WED",
    time: "7PM",
    room: "GYM",
    trainerId: 3
  },
  {
    id: 7,
    type: "yoga",
    day: "THUR",
    time: "6PM",
    room: "yoga studio",
    trainerId: 5
  },
  {
    id: 8,
    type: "HIIT",
    day: "THUR",
    time: "7PM",
    room: "yoga studio",
    trainerId: 3
  },
  {
    id: 9,
    type: "pilates",
    day: "FRI",
    time: "7PM",
    room: "yoga studio",
    trainerId: 6
  },
  {
    id: 10,
    type: "cycling",
    day: "FRI",
    time: "8PM",
    room: "cycling room",
    trainerId: 3
  },
  {
    id: 11,
    type: "nutrition",
    day: "SAT",
    time: "3PM",
    room: "yoga studio",
    trainerId: 1
  },
  {
    id: 12,
    type: "weight training",
    day: "SAT",
    time: "5PM",
    room: "GYM",
    trainerId: 4
  },
  {
    id: 13,
    type: "yoga",
    day: "SAT",
    time: "7PM",
    room: "yoga studio",
    trainerId: 1
  },
  {
    id: 14,
    type: "weight training",
    day: "SUN",
    time: "3PM",
    room: "GYM",
    trainerId: 2
  },
  {
    id: 15,
    type: "pilates",
    day: "SUN",
    time: "5PM",
    room: "yoga studio",
    trainerId: 5
  },
  {
    id: 16,
    type: "cycling",
    day: "SUN",
    time: "7PM",
    room: "cycling room",
    trainerId: 6
  }
];
module.exports = { users, trainers, classes };
