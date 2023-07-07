const express = require("express");

require("dotenv").config({ path: "../.env" });

const cors = require("cors");

const conn = require("./database/conn.js");

const app = express();

app.use(cors());

app.use(express.json());

conn();

const routes = require("./routes/router.js");

app.use("/api", routes);

app.listen(3000, function () {
  console.log("Servidor funcionando!");
});

//
