// playerModel.js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    id: {type : Number ,required : true} , 
  index: { type: Number, required: true },
  name: { type: String, required: true },
//   firstname:{ type: String, required: true },
  position: { type: String, required: true },
  club: { type: String, required: true },
  OVA: { type: Number, required: true },
  POT: { type: Number, required: true },
  ATT: { type: Number, required: true },
  SKI: { type: Number, required: true },
  MOV: { type: Number, required: true },
  POW: { type: Number, required: true },
  MEN: { type: Number, required: true },
  DEF: { type: Number, required: true },
  GK: { type: Number, required: true },
  STATS: { type: Number, required: true },
  amharicName: { type: String, required: true },
  englishName: { type: String, required: true },
  somaliName: { type: String, required: true },
  oromoName: { type: String, required: true },
  photo: { type: String, required: true },
  teamId:{type: Number, required: true },
  teamName:{
    amharicName: String,
    oromoName: String,
    tigrignaName: String,
    somaliName:String
},
  teamLogo:{type: String, required: true }
});

const Player = mongoose.model('Player_rating', playerSchema);

module.exports = Player;
