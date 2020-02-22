var router = require('express').Router();

router.use('/api', require('./api/html-routes'));

module.exports = router;
