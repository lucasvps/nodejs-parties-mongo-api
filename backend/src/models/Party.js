const mongoose = require("mongoose");

const { Schema } = mongoose;

const { serviceSchema } = require("./Service.js");

const partySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    services: {
      type: [serviceSchema],
    },
  },
  { timestamps: true } // Cria created and updated at
);

const Party = mongoose.model("Party", partySchema);

module.exports = { Party };
