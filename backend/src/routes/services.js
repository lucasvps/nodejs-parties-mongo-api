const router = require("express").Router();

const ServiceController = require("../controllers/ServiceController.js");

//

router.post("/services", (req, res) => ServiceController.store(req, res));

router.get("/services", (req, res) => ServiceController.index(req, res));

router.get("/services/:id", (req, res) => ServiceController.show(req, res));

router.delete("/services/:id", (req, res) =>
  ServiceController.delete(req, res)
);

router.put("/services/:id", (req, res) => ServiceController.update(req, res));

module.exports = router;
