const mongoose = require("mongoose");
const teamDataSchema = require(__dirname +'/team_data.js').schema;;
const teamStatistics = new mongoose.Schema( {
    leagueid : Number,

    // teamId : Number ,
    // teamName : String,
    // logo : String,
    teamData  : teamDataSchema , 
    season : Number , 
   
    played : Number ,
     
    rank : Number,  
    form : String ,
    win : Number , 
    draw : Number, 
    loss : Number , 
    point : Number ,
    scored: Number ,  
    conceded: Number , 
    goalDifference : Number, 
    averageScored: Number , 
    averageConceded : Number , 
    homePlayed : Number ,  
    homeWon : Number, 
    homeLoose : Number , 
    homeDraw : Number , 
    homePoint : Number,
    homeScored : Number, 
    homeConceded : Number,
    homeGoalDifference : Number,
    awayPlayed : Number , 
    awayWon : Number, 
    awayLoose : Number, 
    awayDraw : Number, 
    awayPoint : Number , 
    awayScored: Number , 
    awayConceded : Number , 
    awayGoalDifference : Number     
      })
module.exports = mongoose.model("teamStatistics", teamStatistics);