const axios = require("axios");
const mongoose = require('mongoose');
const getTodaysMatches = require("./getTodaysFixtures")
const PlayerName = require("../schemas/player_names")
const Lineup = require("../schemas/lineup_schema")
const fetchPlayerProfiles = require("./fetch_player_profile")
const transliteratePlayers = require("./player_transliteration")
const userSockets = require("../socket/userSocket")
const User = require("../schemas/user_model");
const TeamData = require("../schemas/team_data")
const matchSchema = require('../schemas/match_schema')
const url = 'mongodb+srv://abubekersiraj:Mongodbpassword1234@test.zezynu2.mongodb.net/?retryWrites=true&w=majority';



mongoose.connect(url)
  .then(() => {
    console.log('Connected to the MongoDB database.');
    fetchTodaysLineup();
   
  })
  .catch(err => {
    console.error(`Error connecting to the database: ${err}`);
  });
require('dotenv').config()
async function fetchTodaysLineup() {
  const fixtures = await getTodaysMatches()
  console.log(`there are ${fixtures.length} fixtures today`)
  if (fixtures) {
    for (fixture of fixtures) {
      result = await fetchLineupForMatch(fixture["id"])
      console.log(result)
    }
  }
}

async function fetchLineupForMatch(fixtureId , io , homeTeamId , awayTeamId) {
  console.log(`inside function ${fixtureId}`)
  const config = {
    method: 'GET',

    url: `https://v3.football.api-sports.io/fixtures/lineups`,
    params: { fixture: `${fixtureId}` },
    headers: {

      'x-rapidapi-key':"1d8b97a2a806716a1f50c53d5ca840fd",
      "x-rapidapi-host": "v3.football.api-sports.io"
    }
  }; 

  const response = await axios(config)
  const idsList = [homeTeamId , awayTeamId]

  try {
      console.log(`${response}`)
   if(response.status == 200){
    console.log('this is ',response.data.response)
    let lineupData = response.data.response;
response
    lineupData[0]["startXI"] = await setPlayerName(lineupData[0]["startXI"])
    lineupData[0]["substitutes"] = await setPlayerName(lineupData[0]["substitutes"])
    lineupData[1]["startXI"] = await setPlayerName(lineupData[1]["startXI"])
    lineupData[1]["substitutes"] = await setPlayerName(lineupData[1]["substitutes"])

     console.log(response.data.response)
     console.log(`line up data is. ... ${lineupData}`)
     const updatedLineupData = lineupData.map((data) => ({ ...data, fixture: fixtureId }));

    if (lineupData.length === 0) {
      console.log("No fixtures found for the specified team ID and season.");
      return;
    }
    if (lineupData.length < 2) {
      console.error("Lineup data is not in the expected format or is incomplete.");
      return false;
    }
    

    console.log( lineupData[0]["startXI"].length)
    console.log( lineupData[1]["startXI"].length)
   if( lineupData[0]["startXI"].length === 11 &&  lineupData[1]["startXI"].length === 11 ){
    await Lineup.findOneAndUpdate({ fixture: fixtureId }, { fixture: fixtureId, response: lineupData }, { upsert: true })
    console.log("inserted!")
    const interestedUsers = await User.find({
      $or: [
        { favouriteMatches: { $elemMatch: { $eq: fixtureId } } },
        { favouriteTeams: { $elemMatch: { $in: idsList } } }
      ]
    });
    const receivedMatch = await matchSchema.findOne({ id: fixtureId }).populate("homeTeam").populate('awayTeam');
    const eventObj = {
      'event': 'lineup',
      'event-am': "አሰላለፍ ተረጋግጧል",
       'event-ti': "ኣሰላልፋ ተረጋጊጹ",
       'event-so': "Safka la xaqiijiyay",
       'event-or': "Tartiiba sarara fuulduraa mirkanaa'eera",
       'event-en': "Lineup Confirmed",
      'team': receivedMatch.homeTeam.EnglishName + ' vs ' + receivedMatch.awayTeam.EnglishName,
      'am' : receivedMatch.homeTeam.AmharicName + ' vs ' + receivedMatch.awayTeam.AmharicName,
      'tr' : receivedMatch.homeTeam.AmharicName + ' vs ' + receivedMatch.awayTeam.AmharicName,
      'si' : receivedMatch.homeTeam.SomaliName + ' vs ' + receivedMatch.awayTeam.SomaliName,
      'or' : receivedMatch.homeTeam.OromoName + ' vs ' + receivedMatch.awayTeam.OromoName,
      'image': "",
      'type':'lineup', 
      'fixtureId' : fixtureId
    }
    const notificationPromises = interestedUsers.map(user => {
      return new Promise((resolve, reject) => {
        const userSocketId = userSockets.get(user.id);
        if (userSocketId) {
          io.to(userSocketId).emit("ev", eventObj);
          resolve(`Notification sent to user ${user.id}`);
        } else {
          resolve(`No socket ID found for user ${user.id}`);
        }
      });
    });
  
    const results = await Promise.all(notificationPromises);
   
    



    return true
  }
    console.log(`lineup data not inserted successfully. ${lineupData[0]["startXI"]} -- ${lineupData[1]["startXI"]}`);

    return false
   
  
   }
  } catch (error) {
    console.error("Error fetching and inserting data:", error);
    return false
  }
}


// async function setPlayerName(playersList) {
//   let dataList = []
//   for (let i = 0; i < playersList.length; i++) {
//     data = playersList[i]
//     playerData = data.player
//     const id = data.player.id;
//     const name = data.player.name
//     try {
//       const playerNameData = await PlayerName.findOne({ id: id });
//       if (playerNameData != null && playerNameData['englishName'] != null) {
//         plData = playerNameData
//         playerData["amharicName"] = plData.amharicName
//         playerData["englishName"] = plData.englishName
//         playerData["oromoName"] = plData.oromoName
//         playerData["somaliName"] = plData.somaliName

//         const toBePushed = {
//           'player': playerData,
//           'playerName': playerNameData
//         }
//         dataList.push(toBePushed)
//       } else {
//         const translatedPlayer = await transliteratePlayers(name);
//         // await fetchPlayerProfiles(id)
//         if (translatedPlayer ) {
//           const toBeInserted = {
//             amharicName: translatedPlayer.amharicName,
//             englishName: translatedPlayer.englishName,
//             oromoName: translatedPlayer.oromoName,
//             somaliName: translatedPlayer.somaliName,
//             id: id,
//             translated: true
//           }

//           playerData["amharicName"] = translatedPlayer.amharicName
//           playerData["englishName"] = translatedPlayer.englishName
//           playerData["oromoName"] = translatedPlayer.oromoName
//           playerData["somaliName"] = translatedPlayer.somaliName

//           const playerNameData = await PlayerName.findOneAndUpdate({ id: id }, toBeInserted, { new: true, upsert: true });
//           const toBePushed = {
//             'player': playerData,
//             'playerName': toBeInserted
//           }
//           dataList.push(toBePushed)


//         } else {
//           const toBeInserted = {
//             amharicName: name,
//             englishName: name,
//             oromoName: name,
//             somaliName: name,
//             id: id,
//           } 
//           playerData["amharicName"] = toBeInserted.amharicName
//           playerData["englishName"] = toBeInserted.englishName
//           playerData["oromoName"] = toBeInserted.oromoName
//           playerData["somaliName"] = toBeInserted.somaliName
//           const toBePushed = {
//             'player': playerData,
//             'playerName': toBeInserted
//           }
//           dataList.push(toBePushed)
//         }
//       }
//     } catch (e) {
//       console.log(`error catched while fetching the data ${e}`)
//       const toBeInserted = {
//         amharicName: name,
//         englishName: name,
//         oromoName: name,
//         somaliName: name,
//         id: id,
//       }

//       playerData["amharicName"] =name
//       playerData["englishName"] =name
//       playerData["oromoName"] = name
//       playerData["somaliName"] = name


//       const toBePushed = {
//         'player': playerData,
//         'playerName': toBeInserted
//       }
//       dataList.push(toBePushed)
//     }


//   }

//   return dataList
// }



async function setPlayerName(playersList) {
  console.log(`received players`)
  let promises = [];
  console.log( `received players list is ${playersList.length}`)
  for (let data of playersList) {
    let playerData = data.player;
    let id = playerData.id;
    let name = playerData.name;

    // Create a promise for each player and add it to the promises array
    let promise = (async () => {
      try {
        let playerNameData = await PlayerName.findOne({ id: id });

        if (playerNameData != null && playerNameData['englishName'] != null) {
          playerData = { ...playerData, ...playerNameData._doc }; // assuming _doc holds the relevant fields

          return {
            'player': playerData,
            'playerName': playerNameData
          };
        } else {
          const translatedPlayer = await transliteratePlayers(name);

          if (translatedPlayer) {
            const toBeInserted = {
              ...translatedPlayer,
              id: id,
              translated: true
            };

            playerNameData = await PlayerName.findOneAndUpdate({ id: id }, toBeInserted, { new: true, upsert: true });
            return {
              'player': { ...playerData, ...toBeInserted },
              'playerName': toBeInserted
            };
          } else {
            const toBeInserted = {
              amharicName: name,
              englishName: name,
              oromoName: name,
              somaliName: name,
              id: id
            };

            return {
              'player': { ...playerData, ...toBeInserted },
              'playerName': toBeInserted
            };
          }
        }
      } catch (e) {
        console.log(`Error caught while fetching data for player ${id}: ${e}`);

        const toBeInserted = {
          amharicName: name,
          englishName: name,
          oromoName: name,
          somaliName: name,
          id: id
        };

        return {
          'player': { ...playerData, ...toBeInserted },
          'playerName': toBeInserted
        };
      }
    })();

    promises.push(promise);
  }

  // Use Promise.all to wait for all promises to resolve
  const dataList = await Promise.all(promises);

  return dataList;
}


module.exports = { fetchTodaysLineup, fetchLineupForMatch };
