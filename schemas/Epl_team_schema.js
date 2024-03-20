

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for individual goal information
const goalSchema = new Schema({
  playerId: {
    type: Number,
    required: true,
    default: 0
  },
  rank: {
    type: String,
    required: true
  },
  englishName: {
    type: String,
    required: true
  },
  teamName: {
    type: String,
    default: ''
  },
  goals: {
    type: Number,
    required: true
  },
  teamLogo: {
    type: String,
    default: ''
  },
  photo: {
    type: String,
    default: ''
  }
});

const statsSchema = new Schema({
  goals: [goalSchema]
});

const playerStatsSchema = new Schema({
  leagueid: {
    type: Number,
    required: true
  },
  season: {
    type: Number,
    required: true
  },
  stats: statsSchema 
});


const PlayerStats = mongoose.model('team_stat', playerStatsSchema);

module.exports = PlayerStats;
