const router = require("express").Router();

const servicesRouter = require("./services.js");

router.use("/", servicesRouter);

const partyRouter = require("./parties.js");

router.use("/", partyRouter);

module.exports = router;
