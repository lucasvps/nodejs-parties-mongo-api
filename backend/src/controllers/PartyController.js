const { Party: PartyModel } = require("../models/Party.js");

function checkPartyBudget(budget, services) {
  const priceSum = services.reduce((sum, service) => sum + service.price, 0);

  return budget >= priceSum;
}

class PartyController {
  async create(req, res) {
    try {
      const partyData = req.body;

      if (
        partyData.services &&
        !checkPartyBudget(partyData.budget, partyData.services)
      ) {
        return res
          .status(406)
          .json({ message: "O seu orçamento não é suficiente." });
      }

      const response = await PartyModel.create(partyData);

      res.status(201).json({ response, message: "Festa criada com sucesso!" });
    } catch (e) {
      console.log(e);
    }
  }

  async getAll(req, res) {
    try {
      const partys = await PartyModel.find();

      res.json(partys);
    } catch (e) {
      console.log(e);
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;

      const party = await PartyModel.findById(id);

      if (!party) {
        res.status(404).json({ message: "Festa não encontrada." });
        return;
      }

      res.json(party);
    } catch (e) {
      console.log(e);
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;

      const party = await PartyModel.findByIdAndDelete(id);

      if (!party) {
        res.status(404).json({ message: "Festa não encontrada." });
        return;
      }

      res.json({ message: "Festa deletada com sucesso!" });
    } catch (e) {
      console.log(e);
    }
  }

  async update(req, res) {
    try {
      const partyData = req.body;

      const id = req.params.id;

      if (
        partyData.services &&
        !checkPartyBudget(partyData.budget, partyData.services)
      ) {
        return res
          .status(406)
          .json({ message: "O seu orçamento não é suficiente." });
      }

      const response = await PartyModel.findByIdAndUpdate(id, partyData);

      if (!response) {
        res.status(404).json({ message: "Festa não encontrada." });
        return;
      }

      res
        .status(201)
        .json({ partyData, message: "Festa atualizada com sucesso!" });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new PartyController();
