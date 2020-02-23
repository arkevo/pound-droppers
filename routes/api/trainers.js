var router = require("express").Router();
var models = require("../../models");
var Trainers = models.Trainers;

router.route("/").get(async (req, res) => {
  const trainers = await Trainers.findAll();
  console.log(trainers);
  res.render("trainers", trainers);
});

module.exports = router;
