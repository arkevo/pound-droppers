var router = require("express").Router();

router.use("/api", require("./api/"));
router.use("/trainers", require("./trainersRoutes"));
router.use("/classes", require("./classesRoutes"));
module.exports = router;
