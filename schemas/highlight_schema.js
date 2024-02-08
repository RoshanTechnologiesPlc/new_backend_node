const mongoose = require("mongoose");

const teamNamesSchema = new mongoose.Schema({
  amharicName: String,
  englishName: String,
  oromoName: String,
  somaliName: String
});



const TeamNames = mongoose.model("TeamNames", teamNamesSchema);



const playlist = new mongoose.Schema({
  channelName: String,
  playlistId : String, 
  channelId : String , 
  photo : String
});



const PlaylistSchema = mongoose.model("Playlist", playlist);


const highlightSchema = new mongoose.Schema({

  teamOneName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TeamNames"
  } , 
  teamTwoName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TeamNames"
  } , 


 
   leagueName: String,
  matchDate: String,
  photo : String, 
  video: String, 
  position : Number ,
  channelPhoto: String,
  league : Number, 
  descriptionOr:String,
  description  : String   , 
  playlist  : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Playlist"
  } ,
});

mongoose.model('Highlight', highlightSchema);
module.exports =  {
  highlight : mongoose.model("Highlight", highlightSchema),
  teamNames : TeamNames , 
  playlist : PlaylistSchema
}