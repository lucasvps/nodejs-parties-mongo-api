const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.nbh4myb.mongodb.net/?retryWrites=true&w=majority`
    );
  } catch (e) {
    console.log(`Erro ao conectar ao banco: ${e}`);
  }
}

module.exports = main;
