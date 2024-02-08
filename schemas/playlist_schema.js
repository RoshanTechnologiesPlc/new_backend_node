const mongoose = require("mongoose");


const playlistSchema = new mongoose.Schema(
  {
    id: { type : String , required  : true},
    podcastId : { type : String , required  : true},
   title : { type : String , required  : true},
   avatar : { type : String , required  : true},
   audioUrl : { type : String , required  : true},
   journalist :  { type : String , required  : true}, 
   station :  { type : String , required  : true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("playlist", playlistSchema);
