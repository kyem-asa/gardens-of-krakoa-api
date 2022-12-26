const express = require('express');
const app = express();
const PORT = 5000;
const xmenCharacters = require('./data/xmen')

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api", (request, response) => {
  response.json(xmenCharacters)
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});

module.exports = app;
