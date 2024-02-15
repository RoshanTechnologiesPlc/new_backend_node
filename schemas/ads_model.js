const mongoose = require("mongoose");
const uuid = require("uuid");
//const newsContentSchema = require(__dirname +'/newsContentSchema.js').schema;;// Import the teamStatistics schema
 // Import the newsContentSchema schema
const adsSceham = new mongoose.Schema({
  //add id to the schema, default uuid
  id: {type  : String , default: uuid.v4 , required  : false} ,
  Ad_picture:  {type  : String , required  : true} ,
  Ad_redirect:  {type  : String , required  : true} ,
}, { timestamps: true }); 

module.exports = mongoose.model("ads", adsSceham);
  