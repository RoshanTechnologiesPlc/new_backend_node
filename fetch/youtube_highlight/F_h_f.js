const express = require('express');
const router = express.Router(); 

const Match = require('../../schemas/match_schema');

// const mongoose = require('mongoose');
// const url = 'mongodb+srv://abubekersiraj:Mongodbpassword1234@test.zezynu2.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));


async function getListofMatches() {
  try {
    console.log('Finding matches with non-null YouTube highlights...');
    const matches = await Match.find({
      'youtubeHighlight.VideoTitle': { $ne: null },
      'youtubeHighlight.VideoId': { $ne: null },
      'youtubeHighlight.Thumbnail': { $ne: null }
    }).lean(); 

    console.log(`Found ${matches.length} matches with valid YouTube highlights.`);
    return matches;
  } catch (error) {
    console.error('Error fetching matches:', error.message);
    throw error; 
  }
}


router.get('/matches', async (req, res) => {
  try {
    const matches = await getListofMatches();
    res.json(matches); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching matches', error: error.message });
  }
});

const app = express();
app.use('/api', router);


