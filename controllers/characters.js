const Character = require('../models/Characters')
const charactersData = require('../data/Characters')

function saveCharacters() {
  Character.insertMany(charactersData, (error, docs) => {
    if (error) {
      console.error('Error inserting data:', error)
    } else {
      console.log(`Inserted ${docs.length} documents into the database`)
    }
  })
}

module.exports = {
  saveCharacters
}