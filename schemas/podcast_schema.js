
const mongoose = require('mongoose');

// Define the schema
const podcastSchema = new mongoose.Schema({
  id: String,
  avatar: String,
  amharicName: String,
  englishName: String,
  oromoName: String,
  tigrignaName: String,
  somaliName: String,

  amharicDescription: String,
  englishDescription: String,
  oromoDescription: String,
  tigrignaDescription: String,
  somaliDescription: String,

  amharicStationName: String,
  englishStationName: String,
  oromoStationName: String,
  tigrignaStationName: String,
  somaliStationName: String,

  amharicProgramName: String,
  englishProgramName: String,
  oromoProgramName: String,
  tigrignaProgramName: String,
  somaliProgramName: String,

  liveLink: String,
  liveTimes: [], // Array 
  rssLink: String
});

// Create a model from the schema
const Podcast = mongoose.model('Podcast', podcastSchema);

// Export the model
module.exports = Podcast;
