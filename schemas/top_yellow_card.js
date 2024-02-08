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



const topYellowCards = new mongoose.Schema( {
    leagueid : Number, 
    scorers : [] , 
    season : Number
  }
)

module.exports = mongoose.model("topYellowCard", topYellowCards);