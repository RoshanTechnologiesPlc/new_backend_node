const mongoose = require("mongoose");
// const topScorer = new mongoose.Schema( {
//     id : Number, 
//     name: String,
//     logo : String , 
//     photo : String  , 
//     teamName : String ,
//     goals : Number
//   }
// )



const topRedCards = new mongoose.Schema( {
    leagueid : Number, 
    scorers : [] , 
    season : Number
  }
)

module.exports = mongoose.model("topRedCard", topRedCards);