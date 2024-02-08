

const mongoose = require("mongoose");
const lineupSchema = new mongoose.Schema( {
    
    "fixture": Number, 
    "response" : []

  }
)
module.exports = mongoose.model("Lineup", lineupSchema);