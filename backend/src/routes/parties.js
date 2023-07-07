const router = require("express").Router();

const PartyController = require("../controllers/PartyController.js");

router.post("/parties", (req, res) => PartyController.create(req, res));

router.get("/parties", (req, res) => PartyController.getAll(req, res));

router.get("/parties/:id", (req, res) => PartyController.getById(req, res));

router.delete("/parties/:id", (req, res) => PartyController.delete(req, res));

router.put("/parties/:id", (req, res) => PartyController.update(req, res));

module.exports = router;
