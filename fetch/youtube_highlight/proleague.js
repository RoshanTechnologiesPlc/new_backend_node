const axios = require(`axios`)
const mongoose = require("mongoose");
require('dotenv').config()
const url = 'mongodb+srv://abubekersiraj:Mongodbpassword1234@test.zezynu2.mongodb.net/?retryWrites=true&w=majority';
const API_KEY ='AIzaSyDLKKL5ccJBQExXZXrRCE9t6jF3jere7GQ';


mongoose.connect(url)
  .then(() => {
    //console.log('Connected to the MongoDB database.');
    // Fetch highlights for each playlist
    const playlists = [
        
        { id: " PLvuwbYTkUzHe7rC3ns2q5kZg5yYmQaZ5O", leagueId: 39 },
        { id: "PLgKzKaglVK7Djzb574jtbuwCwN4McHsfy", leagueId: 135 },
   
        { id: "PLKj1QUtwqLN_xhwiUekBYfx4sYVNzRtQO", leagueId: 140 },
        
        { id: "PLrknD2SRMNPm6SR8pMN_Oy-6p9w-DEhc1", leagueId: 363 },
        
        { id: "PLKj1QUtwqLN_xhwiUekBYfx4sYVNzRtQO", leagueId: 61 },
  

        

      // ... Add other playlists here
    ];
    const channelId = "UCG5qGWdu8nIRZqJ_GgDwQ-w";
    playlists.forEach(playlist => {
      fetchHighlightsFromYoutube(playlist.id, playlist.leagueId);
    });
  })
  .catch(err => {
    console.error(`Error connecting to the database: ${err}`);
  });

const transliterateToAmharic = require("./transliterate_highlight");

const transliterateToOromo = require("./transliterateToOromo");
const { highlight, teamNames, playlist } = require('../../schemas/highlight_schema');
const league = require("../../schemas/leagueNamesSchema");

async function fetchHighlightsFromYoutube(playlistId, leagueId, channelId) {


    // Construct the URL for fetching playlist items
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`;

    try {
        // Fetch data from the YouTube API
        const response = await axios.get(url);

        if (response.status === 200) {
            const highlightsList = response.data['items'];

            for (let element of highlightsList) {
                const doesHighlightExist = await highlight.findOne({ video: element.snippet.resourceId.videoId });

                if (doesHighlightExist) {
                    console.log(`Highlight already exists`);
                    continue;
                }

                // Transliterate the team names
                var teamOneName = {
                    englishName: "",
                    amharicName: "",
                    oromoName: "",
                    somaliName: ""
                };

                var teamTwoName = {
                    englishName: "",
                    amharicName: "",
                    oromoName: "",
                    somaliName: ""
                };

                const result = await transliterateToAmharic(element.snippet.title);

                 const resultOr = await transliterateToOromo(element.snippet.title);

                if (result != false) {
                    try {
                        teamOneName = { ...result[0] };
                        teamTwoName = { ...result[1] };
                    } catch (error) {
                        console.log(`Error getting team names from the description: ${error}`);
                        continue;
                    }

                    try {
                        const teamOne = await teamNames.create(teamOneName);
                        const teamTwo = await teamNames.create(teamTwoName);

                        // Get the profile picture of the channel
                        const photo = await getProfilePicture(channelId);

                        const playlistData = await playlist.create({
                            channelName: element.snippet.channelTitle,
                            playlistId: playlistId,
                            channelId: channelId,
                            photo: photo
                        });
                       
                        let channelPhoto;

                        if (leagueId === 135) {
                            channelPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGzzncEDXAKfhn06A7iT7NCbsAM06sGQvLF3r5VJb7g&s';
                        } else if (leagueId === 140) {
                            channelPhoto = 'https://www.fifplay.com/img/public/laliga-logo.png'; 
                        } 
                        else if(leagueId === 39){
                            channelPhoto = 'https://banner2.cleanpng.com/20180601/plw/kisspng-premier-league-england-national-football-team-live-5b10ebe5a94620.9186064015278356216934.jpg'; 
                        }
                        else if(leagueId === 363){
                            channelPhoto = 'https://upload.wikimedia.org/wikipedia/he/0/02/Ethiopian_Premier_League_LOGO.png'; 
                        }
                        else {
                            channelPhoto = 'https://example.com/default.jpg'; // Replace with a default image URL
                        }

                        
                        const highlightsData = {
                            photo: element.snippet.thumbnails.medium.url,
                            matchDate: new Date(element.snippet.publishedAt),
                            description:result,
                            descriptionOr:resultOr,
                            video: element.snippet.resourceId.videoId,
                            teamOneName: teamOne._id,
                            teamTwoName: teamTwo._id,
                            league: leagueId,
                            playlist: playlistData._id,
                            position: element.snippet.position,
                            channelPhoto:channelPhoto,

                        };

                        await highlight.create(highlightsData);
                        console.log('Highlights data inserted successfully!');
                    } catch (error) {
                        console.log(`Error while inserting highlights data: ${error}`);
                    }
                }
            }
        }
    } catch (error) {
        console.log(`Error fetching data from YouTube: ${error}`);
    }
}

async function getProfilePicture(channelId) {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`);
        if (response.status === 200 && response.data.items && response.data.items.length > 0) {
            return response.data.items[0].snippet.thumbnails.default.url;
        } else {
            return "";
        }
    } catch (error) {
        console.log(`Error getting profile picture: ${error}`);
        return "";
    }
}

module.exports = fetchHighlightsFromYoutube;


