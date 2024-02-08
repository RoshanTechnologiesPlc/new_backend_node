const mongoose = require("mongoose")
const countryName = new mongoose.Schema(
    {   AmharicName : String, 
        EnglishName : String, 
        OromoName : String, 
        SomaliName : String, 
        translated : {
          type: Boolean,
          default: true
        }  
    }
);
module.exports  =  mongoose.model("CountryName" , countryName)