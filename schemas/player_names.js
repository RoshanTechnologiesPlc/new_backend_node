const mongoose = require("mongoose");
const playerNames = new mongoose.Schema({
    id : {
        type : Number ,
        required : true
    } , 
    amharicName : {
        type : String, 
        required : true
    } , 
    englishName : {
        type : String, 
        required : true
    } ,
    somaliName : {
        type : String, 
        required : true
    } ,
    oromoName : {
        type : String, 
        required : true
    } ,
    photo : {
        type : String, 
        required : true
    }  , 
    translated : {
        type : Boolean, 
        required : false , 
        default : true
    } , 
    amharicEditted : {type :  Boolean , required  : false  , default : null}, 
    somaliEditted : {type :  Boolean , required  : false  , default : null}, 
    oromoEditted : {type :  Boolean , required  : false  , default : null}
    
})
module.exports = mongoose.model("PlayerName" ,playerNames)