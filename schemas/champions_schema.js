const mongoose = require('mongoose')
const championsSchema  = new mongoose.Schema({
    season : {type : String, required  : true} , 
    championTeam   : {  type : mongoose.Schema.Types.ObjectId,
        ref : "TeamDataSchema" } , 
    secondTeam  :  {  type : mongoose.Schema.Types.ObjectId,
        ref : "TeamDataSchema" } , 
    league   : {type : Number, required : true}
})


module.exports  =  mongoose.model("Champion" , championsSchema)