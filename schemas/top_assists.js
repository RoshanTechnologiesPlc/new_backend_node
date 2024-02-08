const mongoose = require("mongoose");
const topAssistor = new mongoose.Schema( {
    leagueid : Number, 
    scorers : [] , 
    season : Number
  }
)
module.exports = mongoose.model("TopAssistor", topAssistor);