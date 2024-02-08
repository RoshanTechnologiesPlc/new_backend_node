const mongoose = require("mongoose");
const teamStatisticsSchema = require(__dirname +'/team_statistics.js').schema;; // Import the teamStatistics schema

const StandingSchema = new mongoose.Schema({
  leagueId:  Number,
   
  season:Number,

 
  standings: [[teamStatisticsSchema]], 
});

module.exports = mongoose.model("standing", StandingSchema);
  