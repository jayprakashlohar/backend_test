const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;
const NAME = process.env.NAME;

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/Home", (req, res) => {
  res.send(`Welcome to home ${NAME}`);
});

app.listen(PORT, () => {
  console.log(`Lidting on port ${PORT}`);
});
