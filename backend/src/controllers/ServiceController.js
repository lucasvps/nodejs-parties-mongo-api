const ServiceRepository = require("../repositories/ServiceRepository.js");

class ServiceController {
  async index(req, res) {
    try {
      const result = await ServiceRepository.findAll();

      res.json(result);
    } catch (e) {
      console.log(e);
    }
  }

  async show(req, res) {
    const id = req.params.id;

    try {
      var result = await ServiceRepository.findById(id);

      res.json(result);
    } catch (e) {
      res.status(404).json({
        error: e.message ?? e,
      });
    }
  }

  async store(req, res) {
    const service = req.body;

    try {
      const response = await ServiceRepository.create(service);

      res.json(response);
    } catch (e) {
      res.status(404).json({
        error: e.message ?? e,
      });
    }
  }

  async delete(req, res) {
    const id = req.params.id;

    try {
      const result = await ServiceRepository.delete(id);

      res.json(result);
    } catch (e) {
      res.status(404).json({
        error: e.message ?? e,
      });
    }
  }

  async update(req, res) {
    const data = req.body;

    const id = req.params.id;

    try {
      const response = await ServiceRepository.update(id, data);

      res.json(response);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new ServiceController();
