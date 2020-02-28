var router = require('express').Router();

router.use('/trainers', require('./trainers'));
router.use('/classes', require('./classes'));
router.use('/users', require('./users'));

module.exports = router;
