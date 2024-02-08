const mongoose = require("mongoose");
const PlayerName = require("./player_names");
const CountryName = require("./countryNames");
const playerStatistics = require(__dirname +'/player_statistics.js').schema;;
// require("./player_statistics")
const playerProfileSchema = new mongoose.Schema({
    id : Number,
    player : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "PlayerName"} ,
    birthCountry : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "CountryName"  } ,  
    age : Number, 
    birthDate : String ,
    birthPlace : String ,
    nationality :  {type : mongoose.Schema.Types.ObjectId,  ref : "CountryName"  } ,
    height : String, 
    weight : String,
    injured : Boolean ,
    statistics : [playerStatistics] ,
       

})
module.exports = mongoose.model("PlayerProfile" , playerProfileSchema )