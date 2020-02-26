var router = require("express").Router();
var models = require("../models");
var Trainers = models.Trainers;
var Classes = models.Classes;

router.route("/").get(async (req, res) => {
  const trainers = await Trainers.findAll();
  res.render("trainers", trainers);
});
router.route("/:id").get(async (req, res) => {
  const classes = await Classes.findAll({
    include: [Trainers],
    where: { trainerid: req.params.id }
  });
  const classesObj = {
    classes: classes,
    trainer: classes[0].Trainer.dataValues
  };
  res.render("trainerSchedule", classesObj);
});

module.exports = router;
