const { Service: ServiceModel } = require("../models/Service.js");

class ServiceRepository {
  async findAll() {
    try {
      const services = await ServiceModel.find();

      return services;
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id) {
    try {
      const service = await ServiceModel.findById(id);

      if (!service) {
        throw new Error("Serviço não encontrado.");
      }

      return service;
    } catch (e) {
      throw new Error("Serviço não encontrado.");
    }
  }

  async create(data) {
    try {
      const result = await ServiceModel.create(data);

      return { result, message: "Serviço criado com sucesso!" };
    } catch (e) {
      throw new Error("Ocorreu um erro ao criar serviço.");
    }
  }

  async update(id, data) {
    try {
      const response = await ServiceModel.findByIdAndUpdate(id, data);

      if (!response) {
        throw new Error("Serviço não encontrado.");
      }

      return {
        message: "Serviço atualizado com sucesso.",
        data: data,
      };
    } catch (e) {
      throw new Error("Serviço não encontrado.");
    }
  }

  async delete(id) {
    try {
      const result = await ServiceModel.findByIdAndDelete(id);

      if (!result) {
        throw new Error("Serviço não encontrado.");
      }

      return {
        message: "Serviço deletado com sucesso!",
      };
    } catch (e) {
      throw new Error("Ocorreu um erro ao deletar o serviço.");
    }
  }
}

module.exports = new ServiceRepository();
