const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statSchema = new Schema({
  rank: String,
  name: String,
  clubName: String,
  goals: Number,
  assists: Number, // Assuming you might have assist data
  passes: Number, // Assuming you might have pass data
  minutesPlayed: Number, // Assuming you might have minutes played data
  clubLogoUrl: String,
  playerPhotoUrl: String
}, { _id: false });

const teamStatsSchema = new Schema({
  leagueid: {
    type: Number,
    required: true
  },
  season: {
    type: Number,
    required: true
  },
  stats: {
    type: Map,
    of: [statSchema]
  }
});

module.exports = mongoose.model("team_stat", teamStatsSchema);
    
