var router = require("express").Router();
var models = require("../models"); // loads index.js
var Classes = models.Classes;
var Trainers = models.Trainers;

router.route("/").get(async (req, res) => {
  const classes = await Classes.findAll({
    include: [Trainers],
    order: [["time", "ASC"]]
  });
  const classesObj = {
    classes: classes
  };
  res.render("classes", classesObj);
});

module.exports = router;
