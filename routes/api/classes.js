const express = require("express");
var data = require("../../dummy_data");
// routers

var router = express.Router();
router.get("/", function(req, res) {
  var hbsObject = { trainers: data.trainers };
  res.render("trainers", hbsObject);
});
module.exports = router;