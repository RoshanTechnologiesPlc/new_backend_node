const mongoose = require("mongoose")
const PlayerName = require("./player_names");
const TeamDataSchema = require("./team_data")
const squadPlayers = new mongoose.Schema({
    number  : {type : Number , default : null} ,
    player : {type :  mongoose.Schema.Types.ObjectId , ref : "PlayerName" , default : null} ,
    playerId : {type : Number , default : null} ,
    position : {type : String , default : null} ,
    age : {type : Number , default : null} ,

})

const squadSchema = new mongoose.Schema(
    {
        // teamId : Number , 
        // amharicTeamName : String ,
        // englishTeamName : String ,
        // oromoTeamName : String ,
        // somaliTeamName : String ,
        // teamLogo : String ,
        teamId : Number , 
        team : {
            type : mongoose.Schema.Types.ObjectId ,
            ref : "TeamDataSchema"
        } ,
        players : [squadPlayers]
      }
);



module.exports = {
    squad : mongoose.model("Squad" , squadSchema) ,
    player : mongoose.model("SquadPlayers" , squadPlayers)
}