var router = require("express").Router();
var models = require("../models"); // loads index.js
var Classes = models.Classes;

router.route("/").get(async (req, res) => {
  const classes = await Classes.findAll({ order: [["time", "ASC"]] });
  const classesObj = {
    classes: classes,
    trainer: classes[0].Trainer.dataValues
  };
  res.render("trainerSchedule", classesObj);
});

module.exports = router;
