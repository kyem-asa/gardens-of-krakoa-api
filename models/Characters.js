const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  fullName: {
    type: String,
    required: true,
  },

  aliases: {
    type: Array,
    required: true,
  },

  teamAffiliations: {
    type: Array,
    required: true,
  },

  firstAppearance: {
    type: String,
    required: true,
  },

  powers: {
    type: Array,
    required: true,
  }
})


const Character = mongoose.model('Character', CharacterSchema)

module.exports = Character
