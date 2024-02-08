
const news = require("./schemas/news_model");
const app = require("./appp");
const port = process.env.PORT || 3001;
const socketIO = require("socket.io")
const User = require("./schemas/user_model")
const userSockets = require("./socket/userSocket")
const mongoose = require("mongoose");
const initializeAgenda = require('./scheduling/initialize_agenda')
const getTodaysMatches = require("./fetch/getTodaysFixtures")
var fileupload = require("express-fileupload");
const fetchFixturesByLeagueId = require("./fetch/new_fetch");
const fetchPlayers = require("./request/insert_players");
const fetchPlayersData = require("./request/footballApi");
const fetchALLPlayersData = require("./request/all_player");
const fetchTeams = require("./request/teamApi");
const fetchAndSaveALLTeams = require("./request/All_team");
const fetchFIxtures = require("./request/fixturesApi");
const fetchPreviousStandingData = require('./insert_champions')
const { fetchEvent, fetchEventt, lastLeagueEventsFetch, fetchEventAndEmit, fetchTodaysEvents } = require("./fetch/fetch_event")
const cors = require("cors");
const makeRequest = require("./makearequest");
const fetchPlaylist = require("./fetch/fetch_playlist")
const verifyUserAccessTokenAndReturnId = require("./middleware/return_id_from_access_token")
const http = require("http")
const fetchStandingNew = require("./fetch/fetch_league_statistics")
const fetchTopAssists = require("./fetch/fetch_top_assists")
const fetchTopScorers = require("./fetch/fetch_topscorer")
const {
  fetchTopYellowCardScorers,
  fetchTopRedCardScorers
} = require("./fetch/fetch_top_card_scorer")
const { fetchRecentMatchesEvent } = require("./fetch_datas")
const { seasonsFor2023, seasonsFor2022, seasonsForWorldCup } = require("./constants/availableSeasons")
const { insertSeasons } = require("./functions/insert_seasons")
const Podcast = require("./schemas/podcast_schema")
const liveTimes = require("./livetimes")
const AmharicSynthesis = require("./speech_synthesis/amharic_tigrigna")
const SomaliSynthesis = require("./speech_synthesis/somali_oromo");
const { ResultReason } = require("microsoft-cognitiveservices-speech-sdk");
const fetchRssDataFor90Minutes = require("./newsAi/webScrapping/extract_news_link")
const addNewsFile = require("./fetch/fetch_current_news")
const transliterateToAmharic = require("./fetch/team_transliteration")
const leagueIds = require("./constants/leagueIds")
const fetchHightlight = require('./fetch/youtube_highlight/fetch_highlight')
const fetchHighlightsFromYoutube = require("./fetch/youtube_highlight/premier_league")
const { fetchTodaysLineup, fetchLineupForMatch } = require("./fetch/fetch_lineup")
const { fetchTodaysMatchStatistics, fetchMatchStatistics } = require("./fetch/fetch_match_statistics")
const allTeamsId = require("./teamIds")

// to be removed

const livetimesForAbol = require("./livetimes_for_abol")
const livetimesForTirita = require("./livetimes_for_tirita")
const livetimesForSportZone = require("./livetimes_for_sport_zone")
const livetimesForMensur = require("./livetimes_mensur")
const updateTeamNames = require('./controller/updateTeamName')
const Match = require("./schemas/match_schema")
const fetchPlayerProfiles = require("./fetch/fetch_player_profile")

const fetchTeamsSquad = require("./fetch/fetch_team_squad")
const { fetchTeamStatistics } = require("./fetch/mirchawoche_team/fetch_team_stat")
const fetchLastFiveMatches = require("./fetch/mirchawoche_team/fetchLastFiveMatches")
const fetchPlayersInformation = require("./fetch/fetch_players_info")
const allPlayerIds = require("./playerIds")
const allPremierLeaguePlayers = require("./constants/playerInfo")
const fetchFaceBookRssFeed = require("./rss_json/fetch_facebook")
// to be removed

// fetching for transfer rss
const getTransferRssFeed = require("./rss_json/transfer")
// const notifyUserIfFavoritePodcastIsLive = require('./socket/podcast_notifier')

require("dotenv").config();
const server = http.createServer(app)

const io = socketIO(server)

io.on('connection', (socket) => {
  console.log('A new user connected.');

  // Handle user registration with accessToken
  socket.on('registerUser', async (accessToken) => {
    try {
  const userId = await verifyUserAccessTokenAndReturnId(accessToken);
  

      if (userId) {
      
        userSockets.set(userId, socket.id);
        // notifyUserIfFavoritePodcastIsLive(userId, socket)
      }
     
    } catch (error) {
      console.error('Error verifying access token:', error);
    }
  });

  // Handle disconnection 
  socket.on('disconnect', () => {
    userSockets.forEach((value, key) => {
      if (value === socket.id) {
        userSockets.delete(key);
        console.log(`User ${key} disconnected and removed from mapping.`);
      }
    });
  });
});
mongoose.set("strictQuery", true);
mongoose.connection.once("open", () => {
  console.log("mongoDB connection ready!");
});

mongoose.connection.on("error", (error) => {
  console.error(error);
});

const MONGO_URL =  'mongodb+srv://abubekersiraj:Mongodbpassword1234@test.zezynu2.mongodb.net/?retryWrites=true&w=majority';

async function updatePodcastWithTheGiveId(podcastId, rssLink) {
  try {
    await Podcast.findOneAndUpdate({
      id: podcastId
    }, {
      rssLink: rssLink
    })


    console.log("successfully updated the live time")
  } catch (error) {
    console.log(`error happened during updating the podcast ${error}`)
  }
}
const oneHour = 1000 * 60 * 60;
const oneMinute = 1000 * 60;
const oneSecond = 1000;
const oneDay = 1000 * 60 * 60 * 24;
async function startServer() {

  await mongoose.connect(MONGO_URL);
 
  
  server.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
  );

    // await Podcast.findOneAndUpdate({
    //   id : "2ba3765e-47e0-4c21-812a-332df6ed8b36"
    // } , { 
    //   liveTimes : livetimesForMensur
    // })
  

  // await fetchPlayersInformation()
  //   await fetchRecentMatchesEvent()
  //   await fetchTeamsSquad(27)
  //   await fetchTeamsSquad(33)


  // await fetchTodaysLineup()
  // await fetchHightlight()
  // await fetchHighlights()
 

 
 
  
  // await initializeAgenda(io)
  // // // // // // setInterval(fetchRssDataFor90Minutes, 15 * oneMinute) 
  // setInterval(fetchHighlights, oneHour)
  // setInterval(updatorFunction, oneHour * 24)

  // setInterval(updateStandings, oneHour * 2)
  // setInterval(fetchOtherLeagueMatches , oneHour * 24)

 
    // setInterval( fetchFaceBookRssFeed, oneMinute * 5)
  // getTransferRssFeed()
  // fetchMatchHighlightsEveryFiveMins()
  // await storePreviousMatches()
  // fetchPreviousHighlights() 
  // mainPost()

}

startServer();   


async function updateMatchDetails() {
  const matches = [{ "id": 1035151, "homeTeam": { "_id": "651c50d6a15ba05139f93e63", "id": 49, "AmharicName": "ቼልሲ", "EnglishName": "Chelsea", "OromoName": "Chelsee", "SomaliName": "Chelsea", "__v": 0, "logo": "https://media-4.api-sports.io/football/teams/49.png", "translated": true } }, { "id": 1035155, "homeTeam": { "_id": "651c5105a15ba05139f989b6", "id": 48, "AmharicName": "ዌስት ሀም", "EnglishName": "West Ham", "OromoName": "West Ham", "SomaliName": "West Ham", "__v": 0, "logo": "https://media-4.api-sports.io/football/teams/48.png", "translated": true } }, { "id": 1035149, "homeTeam": { "_id": "651c5111a15ba05139f99e9d", "id": 66, "AmharicName": "አስቶን ቪላ", "EnglishName": "Aston Villa", "OromoName": "Aastoon Villa", "SomaliName": "Aston Villa", "__v": 0, "logo": "https://media-4.api-sports.io/football/teams/66.png", "translated": true } }, { "id": 1035153, "homeTeam": { "_id": "651c50ffa15ba05139f98048", "id": 40, "AmharicName": "ሊቨርፑል", "EnglishName": "Liverpool", "OromoName": "Liibarpool", "SomaliName": "Liverpool", "__v": 0, "logo": "https://media-4.api-sports.io/football/teams/40.png", "translated": true } }, { "id": 1035150, "homeTeam": { "_id": "651c4f7ba15ba05139f719de", "id": 51, "AmharicName": "ብራይተን", "EnglishName": "Brighton", "OromoName": "Biriteen", "SomaliName": "Biriteen", "__v": 0, "logo": "https://media-4.api-sports.io/football/teams/51.png", "translated": true } }, { "id": 1035152, "homeTeam": { "_id": "651c50f3a15ba05139f96b89", "id": 52, "AmharicName": "ክሪስታል ፓላስ", "EnglishName": "Crystal Palace", "OromoName": "Krisitall Pallas", "SomaliName": "Krisitall Palas", "__v": 0, "logo": "https://media-4.api-sports.io/football/teams/52.png", "translated": true } }, { "id": 1035154, "homeTeam": { "_id": "651c50e8a15ba05139f95ab7", "id": 33, "AmharicName": "ማንችስተር ዩናይትድ", "EnglishName": "Manchester United", "OromoName": "Mancistar Yuunaytid", "SomaliName": "Manchester United", "__v": 0, "logo": "https://media-4.api-sports.io/football/teams/33.png", "translated": true } }, { "id": 1035148, "homeTeam": { "_id": "651c5116a15ba05139f9a60c", "id": 42, "AmharicName": "አርሴናል", "EnglishName": "Arsenal", "OromoName": "Aarsanaal", "SomaliName": "Arsanaal", "__v": 0, "logo": "https://media-4.api-sports.io/football/teams/42.png", "translated": true } }, { "id": 1035147, "homeTeam": { "_id": "651c4f12a15ba05139f66c07", "id": 35, "AmharicName": "ቦርንማውዝ", "EnglishName": "Bournemouth", "OromoName": "Bormontii", "SomaliName": "Bormontii", "__v": 0, "logo": "https://media-4.api-sports.io/football/teams/35.png", "translated": true } }, { "id": 1035156, "homeTeam": { "_id": "651c4f7ca15ba05139f71a60", "id": 39, "AmharicName": "ዎልቭስ", "EnglishName": "Wolves", "OromoName": "Wulufa", "SomaliName": "Wulufa", "__v": 0, "logo": "https://media-4.api-sports.io/football/teams/39.png", "translated": true } }]


  for (let i = 0; i < matches.length; i++) {
    // await  fetchEventAndEmit(matches[i]['id'] , io) 
    // await fetchMatchStatistics(matches[i]['id'])
    fetchLineupForMatch(matches[i]['id'])
  }

}

async function fetchEthiopianTeamsStatistics() {
  const EthiopianTeams = [
    {

      'id': 4119,
      'imageUrl': 'https://media-2.api-sports.io/football/teams/4119.png'
    },
    {

      'id': 4116,
      'imageUrl': 'https://media-2.api-sports.io/football/teams/4116.png'
    },
    {

      'id': 4117,
      'imageUrl': 'https://cdn.resfu.com/img_data/equipos/96940.png'
    },
    {

      'id': 4110,
      'imageUrl': 'https://secure.cache.images.core.optasports.com/soccer/teams/150x150/3584.png'
    },
    {

      'id': 4111,
      'imageUrl': 'https://media-2.api-sports.io/football/teams/4111.png'
    },
    {

      'id': 4112,
      'imageUrl': 'https://media-2.api-sports.io/football/teams/4112.png'
    },
    {

      'id': 4113,
      'imageUrl': 'https://media-2.api-sports.io/football/teams/4113.png'
    },
    {

      'id': 4114,
      'imageUrl': 'https://media-2.api-sports.io/football/teams/4114.png'
    },
    {

      'id': 4115,
      'imageUrl': 'https://media-2.api-sports.io/football/teams/4115.png'
    },
    {

      'id': 4120,
      'imageUrl': 'https://media-2.api-sports.io/football/teams/4120.png'
    },
    {

      'id': 4121,
      'imageUrl': 'https://upload.wikimedia.org/wikipedia/en/d/d8/Mekelle_70_Enderta_Logo.png'
    },
    {

      'id': 4122,
      'imageUrl': 'https://media-2.api-sports.io/football/teams/4122.png'
    },
    {
      'id': 4123,
      'imageUrl': 'https://media-2.api-sports.io/football/teams/4123.png'
    },
    {

      'id': 4124,
      'imageUrl': 'https://media-2.api-sports.io/football/teams/4124.png'
    },
    {

      'id': 4125,
      'imageUrl': 'https://media-2.api-sports.io/football/teams/4125.png'
    },
    {

      'id': 4126,
      'imageUrl': 'https://upload.wikimedia.org/wikipedia/en/3/34/Arba_minch_fc.gif'
    },
    {

      'id': 4127,
      'imageUrl': 'https://media-2.api-sports.io/football/teams/4127.png'
    },
    {

      'id': 4130,
      'imageUrl': 'https://soccer.et/wp-content/uploads/2022/11/Bank-W.png'
    },
    {

      'id': 9984,
      'imageUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/JimmaAbaBunnaSC.jpg/640px-JimmaAbaBunnaSC.jpg'
    },
    {

      'id': 9983,
      'imageUrl': 'https://www.ethiopianpremierleague.net/media/f13g2lli/hadiya_logo.png?anchor=center&mode=crop&width=200&rnd=132512107128730000'
    },
    {

      'id': 9985,
      'imageUrl': 'https://upload.wikimedia.org/wikipedia/fr/thumb/b/b8/Sebeta_City_FC_logo.png/130px-Sebeta_City_FC_logo.png'
    },
    {

      'id': 20030,
      'imageUrl': 'https://s.scr365.net/teams/2022/8/26/ltuL4L_24247.png'
    },
    {

      'id': 20031,
      'imageUrl': 'https://api.sofascore.app/api/v1/team/448124/image'
    }
  ];

  for (let i = 3; i < EthiopianTeams.length; i++) {
    const id = EthiopianTeams[i]["id"];
    await fetchTeamStatistics(2023, id, 363)
    await fetchTeamsSquad(id)
  }
}

async function deploymentFunction() {

  setInterval(fetchRssDataFor90Minutes, 1000 * 60 * 60)
  setInterval(fetchHighlights, oneHour)
  setInterval(updateMatches, oneHour)
  // setInterval(updatorFunction, oneHour)

}



async function fetchTodayMatchesStatistics() {
  const matches = await getTodaysMatches()
  for (let i = 0; i < matches.length; i++) {
    await fetchMatchStatistics(matches[i]['id'])
  }


}

async function fetchLastFiveMatchesForAll() {
  for (let i = 0; i < allTeamsId.length; i++) {

    await fetchLastFiveMatches(allTeamsId[i])
  }
}

async function fetchLastFiveMatchesForPremierLeague() {
  const ids = [
    33,
    34,
    35,
    36,
    39,
    40,
    42,
    44,
    45,
    47,
    48,
    49,
    50,
    51,
    52,
    55,
    62,
    65,
    66,
    1359
  ]



  for (let index = 0; index < ids.length; index++) {
    const id = ids[index];
    // await fetchLastFiveMatches(id)
    await fetchTeamsSquad(id)
    await fetchTeamStatistics(2023, id, 39)
  }
}

// todo to be implemented connected with events

// await fetchEvent()
async function updatorFunction() {

  //  39  , 2  ,
  //  [39  , 2 , 363 , 140, 61 , 135, 78 ,  3 , 307 , 45 ,  48 ];
  const ourleagueIds =
    [39, 2, 363, 140, 61, 135, 78, 3, 307, 45, 48];
  const otherLeagues = [
    // 144 , 88 , 94 ,
    // 179, 288, 203 , 
    204
  ]
  // const ourleagueIds = [
  //   4];
  // await fetchFixturesByLeagueId(48, 2023 , true);
  // for (let i = 30; i < 400; i++) {
  for (let i = 0; i < otherLeagues.length; i++) {
    // await fetchFixturesByLeagueId(ourleagueIds[i], 2023, true);
    // await fetchStandingNew(ourleagueIds[i], 2023); 
    await fetchFixturesByLeagueId(ourleagueIds[i], 2023, false);
    await fetchFixturesByLeagueId(ourleagueIds[i], 2023, true);
  }
 

}


async function updateStandings() {
  // const ourLeagues = [ 29  , 32  , 34   , 31  ,  30 , 33];
  const ourLeagues = [ // 4 , 
    39, 2, 140, 135, 78, 363, 61, 307, 45, 41, 40, 42, 6,
    // 4 , 
    // 960,
    //   1  , 5 ,  29  , 32  , 34   , 31  ,  30 , 33  

  ];
  for (let i = 0; i < ourLeagues.length; i++) {

    await fetchStandingNew(ourLeagues[i], 2023);

  }
}





async function fetchHighlights() {


  await fetchHighlightsFromYoutube("PLKj1QUtwqLN_xhwiUekBYfx4sYVNzRtQO", 140)

  await fetchHighlightsFromYoutube("PLFTjYT0jsEKwuqv5UVaErB3RDUI-XI-9C", 135)
  await fetchHighlightsFromYoutube("PLcj4z4KsbIoVPGtu3C-dRs4Ry-2pSWgAl", 253)

  await fetchHighlightsFromYoutube("PL3uJGozO1imf_dHCPebi_o8asEMnadkUN", 78)

  await fetchHighlightsFromYoutube("PLvnfVnc10KYhswTH08Lz1k2-ehpIqmP75", 45)

  await fetchHighlightsFromYoutube('PLyeZvgLTmwr5kNa1CFO-eJ7Q6sgR1I_t7', 46)

  await fetchHighlightsFromYoutube("PL6SufeKmBK0E-JC_2ONuJlxp87J3aTvAu", 135)

  await fetchHighlightsFromYoutube("PLHKIZtgW3StyLS_4vbWko-4qKiBZ0hFNp", 203)

  await fetchHighlightsFromYoutube("PL79m9Jm7_jmDfSTbNR28HDvm6XlnboAXu", 20)

  await fetchHighlightsFromYoutube("PL79m9Jm7_jmBoG6Zz1nj8tO8uXR8FBB7R", 12)



  await fetchHighlightsFromYoutube("PLS9YRt7PtOaRmxK_tPJ2h4uNu0LZ8BCqd", 61)
  await fetchHighlightsFromYoutube("PLgKzKaglVK7Djzb574jtbuwCwN4McHsfy", 135)
  await fetchHighlightsFromYoutube("PLQ_voP4Q3cffZYz6sVkSigiLfAZI_5vba", 39)
  await fetchHighlightsFromYoutube("PLvuwbYTkUzHe7rC3ns2q5kZg5yYmQaZ5O", 39)
  await fetchHighlightsFromYoutube("PLrknD2SRMNPm6SR8pMN_Oy-6p9w-DEhc1", 363)
  await fetchHighlightsFromYoutube('PLQZMWakg6Kkra--nS5mAvsGxffYkeBF9O', 2)
}


async function updateMatches() {
  // await fetchTodaysLineup() 
  // await  fetchTodaysEvents() 
  // await fetchTodaysMatchStatistics()
  const ourleagueIds = [
    39, 2, 363, 140, 61, 135, 78, 3, 307, 45, 48,
    41,
    42,
    40,
    6,
    // 4 , 
    960,

    45, 41, 40, 42, 32, 29, 34, 31, 30, 33, 5];
  // await fetchFixturesByLeagueId(48, 2023 , true);
  // for (let i = 30; i < 400; i++) {
  for (let i = 0; i < ourleagueIds.length; i++) {
    await fetchFixturesByLeagueId(ourleagueIds[i], 2023, true);
    await fetchFixturesByLeagueId(ourleagueIds[i], 2023, false);

  }
}


async function fetchPlayersProfile() {

  for (let i = 452; i >= 0; i--) {
    try {
      console.log(`the value of i is ${i} and player id is ${allPlayerIds[i]}`)
      await fetchPlayerProfiles(allPlayerIds[i])
    } catch (e) {
      console.log(`error happened ${e}`)
    }
  }


  // for(let i = 0 ; i < allPremierLeaguePlayers.length ; i ++){
  //   const playerInfo = allPremierLeaguePlayers[i]
  //   const playerId =  playerInfo["playerId"]
  //   console.log(`the value of i is ${i} and player id is ${playerId}` )
  //   await fetchPlayerProfiles(playerId)
  //   console.log(`successfully fetched ${i} `)
  // }

}


async function fetchTeamsProfile() {
  for (let i = 0; i < allTeamsId.length; i++) {
    await fetchTeamsSquad(allTeamsId[i])
    await fetchTeamStatistics(2023, allTeamsId[i], 39)
  }
}


async function deploymentFunction() {
  setInterval(updateStandings, 3 * 60 * 60 * 1000);
  setInterval(fetchRssDataFor90Minutes, 10 * 60 * 1000);
  setInterval(updateMatches, oneHour)
}



async function fetchOtherLeagueMatches() {
  const otherLeagueIds = [
    9, 7, 22, 1043, 17, 18, 12, 20, 19, 141, 288, 136, 138, 203, 204, 305, 144, 145,
    88, 89, 94, 95, 79, 80, 62, 63, 71, 72, 75, 128, 129, 130,
    253, 255, 489, 233, 570, 179, 180]

  for (let i = 0; i < otherLeagueIds.length; i++) {
    await fetchFixturesByLeagueId(otherLeagueIds[i], 2023, true)
    await fetchFixturesByLeagueId(otherLeagueIds[i], 2023, false)
  }
}

// module.exports.io = io; 