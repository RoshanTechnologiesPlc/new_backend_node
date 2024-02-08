const mongoose = require("mongoose");
const teamStatisticsSchema = require(__dirname +'/team_statistics.js').schema;; // Import the teamStatistics schema

const leagueStatisticsSchema = new mongoose.Schema({
  leagueId:  Number,
   
  season:Number,

 
  teamStatistics: [teamStatisticsSchema], // Use the teamStatistics schema as the type
});

module.exports = mongoose.model("leagueStatistics", leagueStatisticsSchema);
  