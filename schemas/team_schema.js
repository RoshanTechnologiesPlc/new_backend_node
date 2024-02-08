//should be deleted!

const mongoose = require("mongoose")
const teamsSchema = new mongoose.Schema(
    {
        id: Number,              
        lastMatch: Number,       
        previousMatch: Number     
      }
);
module.exports  =  mongoose.model("Team" , teamsSchema )