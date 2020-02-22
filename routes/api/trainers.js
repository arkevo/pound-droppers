var router = require("express").Router();
var models = require('../../models'); 
var Trainers = models.Trainers; 


router
  .route("/")
  .get(async (req, res) => {
    const trainers = await Trainers.findAll();
    res.json({ trainers: trainers });
  });

  module.exports = router;


  
  