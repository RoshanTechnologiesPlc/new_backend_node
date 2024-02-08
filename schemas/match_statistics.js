const mongoose = require("mongoose");
const MatchStatisticsModel= require(__dirname +'/team_match_statistics.js').schema;;
const matchStatisticsSchema = new mongoose.Schema({
    fixtureId  : Number,
    teamOneStat  : MatchStatisticsModel ,
    teamTwoStat  : MatchStatisticsModel})
module.exports = mongoose.model("MatchStatisticsSchema", matchStatisticsSchema);   