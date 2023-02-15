const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const characters = require('./data/Characters')
const cors = require('cors')
const characterController = require('./controllers/characters')


app.use(cors());

characterController.saveCharacters();

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/v1", (request, response) => {
  response.json(characters)
});

app.get("/api/:name", (request, response) => {
  const name = request.params.name.toLowerCase();
  const character = characters.find((char) => char.name === name);

  if (character) {
    response.send({character})
  } else {
    response.send(`Couldn't find a member of the X-Men named ${name}`)
  }
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});

module.exports = app;
