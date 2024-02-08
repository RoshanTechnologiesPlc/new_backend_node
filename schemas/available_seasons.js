const mongoose = require("mongoose");
const availableSeasonsSchema = new mongoose.Schema({
    "leagueId" : Number , 
    "seasons" : [String]
})
module.exports = mongoose.model("Season" , availableSeasonsSchema)