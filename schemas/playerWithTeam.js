const mongoose = require("mongoose");
const playerName = require("./player_names")
const TeamDataSchema = require("./team_data")
const playerWithTeam = new mongoose.Schema({
    playerId : {
        type : Number ,
        required : true
    } , 
    teamId : {
        type : Number ,
        required : true
    } ,
    
    player : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "PlayerName" ,
    } , 
    team : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "TeamDataSchema" ,
    } ,
    

})
module.exports = mongoose.model("PlayerWithTeam" ,playerWithTeam)