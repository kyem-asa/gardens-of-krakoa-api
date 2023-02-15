const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const characters = require('./data/Characters')
const cors = require('cors')
const characterController = require('./controllers/characters')
const connectDB = require('./config/database');
const Character = require('./models/Characters');
const router = express.Router()




require('dotenv').config({path: './config/.env'})

connectDB()

characterController.saveCharacters();

// Routes

app.use(router);

router.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

app.get('/api/v1', (request, response) => {
      Character.find()
      .then(results => {
          console.log(results)
          response.json(results)
      })
      .catch(error => console.error(error))
  })


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
