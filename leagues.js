const mongoose = require("mongoose") 
const leagues = new mongoose.Schema({
    id : {
        type : Number,
        required : true
    } , 
    standings :{
        type : [[]] , 
        required  : true
    }
})

module.exports = mongoose.model("League" , leagues)