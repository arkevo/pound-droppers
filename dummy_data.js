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
  { id: 1, type: "yoga", time: "MON 6PM", room: "yoga studio", trainerId: 6 },
  { id: 2, type: "HIIT", time: "MON 7PM", room: "yoga studio", trainerId: 4 },
  {
    id: 3,
    type: "pilates",
    time: "TUE 6PM",
    room: "yoga studio",
    trainerId: 1
  },
  {
    id: 4,
    type: "cycling",
    time: "TUE 6PM",
    room: "cycling room",
    trainerId: 2
  },
  {
    id: 5,
    type: "weight training",
    time: "WED 6PM",
    room: "GYM",
    trainerId: 4
  },
  {
    id: 6,
    type: "weight training",
    time: "WED 7PM",
    room: "GYM",
    trainerId: 3
  },
  { id: 7, type: "yoga", time: "THUR 6PM", room: "yoga studio", trainerId: 5 },
  { id: 8, type: "HIIT", time: "THUR 7PM", room: "yoga studio", trainerId: 3 },
  {
    id: 9,
    type: "pilates",
    time: "FRI 7PM",
    room: "yoga studio",
    trainerId: 6
  },
  {
    id: 10,
    type: "cycling",
    time: "FRI 8PM",
    room: "cycling room",
    trainerId: 3
  },
  {
    id: 11,
    type: "nutrition",
    time: "SAT 3PM",
    room: "yoga studio",
    trainerId: 1
  },
  {
    id: 12,
    type: "weight training",
    time: "SAT 5PM",
    room: "GYM",
    trainerId: 4
  },
  {
    id: 13,
    type: "yoga",
    time: "SAT 7PM",
    room: "yoga studio",
    trainerId: 1
  },
  {
    id: 14,
    type: "weight training",
    time: "SUN 3PM",
    room: "GYM",
    trainerId: 2
  },
  {
    id: 15,
    type: "pilates",
    time: "SUN 5PM",
    room: "yoga studio",
    trainerId: 5
  },
  {
    id: 16,
    type: "cycling",
    time: "SUN 7PM",
    room: "cycling room",
    trainerId: 6
  }
];
