const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  fixtureId: {
    type: Number,
    required: true,
    index: true // Adding an index for better query performance on fixtureId
  },
  userId: {
    type: String,
    required: true,
    index: true // Adding an index for better query performance on userId
  },
  userVote: {
    type: String,
    required: false,
    default: null,
    enum: ['homeTeam', 'awayTeam', 'draw'] // Enum to ensure valid vote values
  }
});

module.exports = mongoose.model('Vote', voteSchema);
