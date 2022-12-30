const express = require('express');
const characters = require('marvel-api/lib/characters');
const app = express();
const PORT = 5000;
const xmenData = require('./data/xmen')

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api", (request, response) => {
  response.json(xmenData)
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});

module.exports = app;
