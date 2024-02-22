const mongoose = require("mongoose");
const uuid = require("uuid");
//const newsContentSchema = require(__dirname +'/newsContentSchema.js').schema;;// Import the teamStatistics schema
 // Import the newsContentSchema schema
const newsSchema = new mongoose.Schema({
  //add id to the schema, default uuid
  id: {type  : String , default: uuid.v4 , required  : false} ,
  viewCount  : {type  : Number , default : 0 , required  : false} , 
  pending  : {type  : Boolean , default : false , required  : false} , 
  newsLink: String,
  author: String,
  figCaption: String,
  description: String,
  mainImage: String,
  publishedDate: Date,
  title: String,
  is_processed: Boolean,

  author_so: String,
  author_am: String,
  author_or: String,
  author_tr: String,

  summarizedTitle: String,
  summarizedDescription: String,
  summarized: String,
  figCaption_am: String, 
  figCaption_or: String,
  figCaption_tr: String, 
  figCaption_so: String, 
  summarized_am: String, 
  summarized_or: String, 
  summarized_tr: String, 
  summarized_so: String, 
  summarizedDescription_am: String, 
  summarizedDescription_or: String,
  summarizedDescription_tr: String, 
  summarizedDescription_so: String, 
  summarizedTitle_am: String, 
  summarizedTitle_or: String, 
  summarizedTitle_tr: String, 
  summarizedTitle_so: String,

  // transcriptions_am: {type:String, required: false},
  // transcriptions_or: String,
  // transcriptions_tg: String,
  // transcriptions_so: String,

}, { timestamps: true }); 

module.exports = mongoose.model("news", newsSchema);
  
