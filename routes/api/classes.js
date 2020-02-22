var router = require("express").Router();
var models = require('../../models'); // loads index.js
var Classes = models.Classes; 



router
  .route("/class")
  .get(async (req, res) => {
    const classes = await Classes.findAll();
    res.json({ classes: classes });
  });

  module.exports = router;

