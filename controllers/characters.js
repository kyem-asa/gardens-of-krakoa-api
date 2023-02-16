const Character = require('../models/Characters')
const charactersData = require('../data/Characters')

// function saveCharacters() {
//   Character.insertMany(characters
// Data, (error, docs) => {
//     if (error) {
//       console.error('Error inserting data:', error)
//     } else {
//       console.log(`Inserted ${docs.length} documents into the database`)
//     }
//   })
// }


module.exports = {
  saveCharacters: async () => {
    try {
      const existingCharacters = await Character.find({})

      if (existingCharacters.length === 0) {
        const docs = await Character.insertMany(charactersData);
        console.log(`Inserted ${docs.length} documents into the database`);
      } else {
        console.log('Data exists, no insertion')
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
      console.log(name)
      const results = await Character.find( {name: name})
    console.log(results)
      // const found = array1.find(element => element > 10);

      
      
      // const character = Character.find((char) => char.name === name)
      // console.log(character)
      // if (character) {x
      //   response.send({Character})
      // } else {
      //   response.send(`Couldn't find a member of the X-Men named ${name}`)
      // }
    } catch (error) {
    console.error(error)
  }
}
};


// app.get("/api/v1/:name", (request, response) => {
//   const name = request.params.name.toLowerCase();
//   const character = characters.find((char) => char.name === name);

//   if (character) {
//     response.send({character})
//   } else {
//     response.send(`Couldn't find a member of the X-Men named ${name}`)
//   }
// });


