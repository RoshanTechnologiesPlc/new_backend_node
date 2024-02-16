const mongoose = require("mongoose");
const TeamDataSchema = require("./team_data.js"); // Directly import the model

const matchSchema = new mongoose.Schema({
  id: Number,
  referee: String,
  timezone: String,
  kickOfTime: {type : String, required  : false  , default : null},
  secondHalfTime: {type : String, required  : false  , default : null},
  date: String,
  dateOnly : String, 
  homeTeamWinner : {type : Boolean , default : null , required : false} ,
  awayTeamWinner : {type : Boolean , default : null , required : false} ,
  venue: { id: Number,
    name: String,
    city: String },
  status: {long: String,
    short: String,
    elapsed: Number},
  league: {
    id: Number,
    name: String,
    country: String,
    logo: String,
    flag: String,
    season: Number,
    round: String
  },
  homeTeam:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TeamDataSchema" 
  }  , 
  awayTeam :  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TeamDataSchema" 
  }  ,
  goals: {
    home: Number,
    away: Number
  },
  score: {
    halftime: {
      home: Number,
      away: Number
    },
    fulltime: {
      home: Number,
      away: Number
    },
    extratime: {
      home: Number,
      away: Number
    },
    penalty: {
      home: Number,
      away: Number
    }
  },
  youtubeHighlight: {
    VideoTitle: String,
    VideoId: String,
    Thumbnail: String
  }
}
, {timestamps : true});

module.exports = mongoose.model("Match", matchSchema);
