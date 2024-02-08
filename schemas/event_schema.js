const mongoose = require("mongoose");
const fixtureEventSchema = new mongoose.Schema({
    "fixture" : Number , 
    "response" : []
})
module.exports = mongoose.model("Event" ,fixtureEventSchema )