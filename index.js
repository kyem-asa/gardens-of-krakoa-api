const express = require("express");
const app = express();
const PORT = process.env.PORT || 7777;
const characters = require("./data/Characters");
const cors = require("cors");
const characterController = require("./controllers/characters");
const connectDB = require("./config/database");
const Character = require("./models/Characters");
const router = express.Router();
const dotenv = require("dotenv");
require("dotenv").config({ path: "./config/.env" });

connectDB();

characterController.saveCharacters();

// Routes

app.use(router);

router.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

router.get("/api/v1", characterController.getAllCharacters);

router.get("/api/v1/:name", characterController.getCharacterByName);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
