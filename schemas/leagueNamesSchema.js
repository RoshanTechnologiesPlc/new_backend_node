const mongoose = require("mongoose");

const leagueNameSchema = new mongoose.Schema({
    id :    Number , 
    amharicName: String,
    englishName: String,
    oromoName: String,
    somaliName: String , 
    // tigrignaName  : String , 
    photo : String , 
    // englishCountryName : String, 
    // amharicCountryName : String, 
    // somaliCountryName : String, 
    // oromoCountryName : String , 
    translated : {
        type: Boolean,
        default: true
      }
  });


module.exports = mongoose.model("LeagueName", leagueNameSchema);