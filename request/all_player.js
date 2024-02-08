// const axios = require("axios");
// const ALLPlayerProfileSchema = require("../models/allPlayer");
// const Stats = require("../models/playerStatsSchema");
// const { mapProfileData, mapStatsData } = require("../dataMapper/dataMapper");
// const path = require("path");
// const fs = require("fs");

// async function fetchALLPlayersData() {
//   try {
//     const totalPages = 46;
//     const league = 39;
//     const season = 2022;
//     const filePath = path.join(__dirname, "player_profiles.txt");

//     for (let page = 1; page <= totalPages; page++) {
//       const response = await axios.get(
//         "https://v3.football.api-sports.io/players",
//         {
//           params: {
//             season,
//             league,
//             page,
//           },
//           headers: {
//             "x-rapidapi-key": "373145c158a54c630c57f0af6bc798f4",
//           },
//         }
//       );

//       const playerDataArray = response.data.response;

//       for (const playerData of playerDataArray) {
//         const profileData = mapProfileData(playerData);
//         const statsData = mapStatsData(playerData);

//         const stats = new Stats(statsData);
//         await stats.save();

//         profileData.stats = stats._id;
//         const profile = new ALLPlayerProfileSchema(profileData);

//         // Write profile information to text file
//         const profileInfo = `${profile.playerId}, ${profile.firstname}, ${profile.lastname}\n`;
//         fs.appendFileSync(filePath, profileInfo);

//         await profile.save();
//       }
//     }

//     console.log("Players data fetched and saved successfully");
//   } catch (error) {
//     console.error("Failed to fetch and save players data", error);
//   }
// }

// module.exports = fetchALLPlayersData;
