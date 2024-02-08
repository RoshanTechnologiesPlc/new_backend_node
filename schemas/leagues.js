const mongoose = require("mongoose") 
const teamStatistics = require(__dirname +'/team_statistics.js').schema;;
const leagues = new mongoose.Schema({
    id : {
        type : Number,
        required : true
    } , 
    standings :{
        type : [[teamStatistics]] , 
        required  : true
    }
})

module.exports = mongoose.model("League" , leagues)