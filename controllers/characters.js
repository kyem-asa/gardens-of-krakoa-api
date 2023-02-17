const Character = require("../models/Characters");
const charactersData = require("../data/Characters");

module.exports = {
  saveCharacters: async () => {
    try {
      const existingCharacters = await Character.find({});

      if (existingCharacters.length === 0) {
        const docs = await Character.insertMany(charactersData);
        console.log(`Inserted ${docs.length} documents into the database.`);
      } else {
        console.log("Data exists, no insertion needed.");
      }
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  },
  getAllCharacters: async (request, response) => {
    try {
      const results = await Character.find();
      response.json(results);
    } catch (error) {
      console.error(error);
    }
  },
  getCharacterByName: async (request, response) => {
    try {
      const name = request.params.name.toLowerCase();
      const results = await Character.find({ name: name });
      response.json(results);
    } catch (error) {
      console.error(error);
    }
  },
};
