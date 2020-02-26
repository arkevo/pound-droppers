const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const moment = require("moment");
var app = express();

var hbs = exphbs.create({
  // Specify helpers which are only registered on this instance.
  helpers: {
    "date-helper": function(time) {
      var formatedTime = moment(time).format("MMMM Do YYYY");
      return formatedTime;
    },
    "day-helper": function(time) {
      var formatedTime = moment(time).format("dddd");
      return formatedTime;
    },
    "time-helper": function(time) {
      var formatedTime = moment(time).format("h:mm a");
      return formatedTime;
    }
  }
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.get("/", function(req, res, next) {
  res.render("home");
});
app.get("/survey", function(req, res, next) {
  res.render("survey");
});

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded());

app.use(morgan("dev"));
app.use(require("./routes"));

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on ${process.env.PORT || PORT}`);
});
