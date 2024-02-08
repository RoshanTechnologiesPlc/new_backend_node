// const axios = require("axios");
// const Profile = require("../models/playerProfileSchema");
// const Stats = require("../models/playerStatsSchema");
// const PlayerPreference = require("../models/player");
// const { mapProfileData, mapStatsData } = require("../dataMapper/dataMapper");

// async function fetchPlayersData() {
//   try {
//     const playerPreferences = await PlayerPreference.find();

//     for (const preference of playerPreferences) {
//       const { name, season, league } = preference;

//       const response = await axios.get(
//         "https://v3.football.api-sports.io/players",
//         {
//           params: {
//             search: name,
//             season,
//             league,
//           },
//           headers: {
//             "x-rapidapi-key": "373145c158a54c630c57f0af6bc798f4",
//           },
//         }
//       );

//       const playerData = response.data.response[0];

//       const profileData = mapProfileData(playerData);
//       const statsData = mapStatsData(playerData);

//       const stats = new Stats(statsData);
//       await stats.save();

//       profileData.stats = stats._id;
//       const profile = new Profile(profileData);
//       await profile.save();
//     }

//     console.log("Players data fetched and saved successfully");
//   } catch (error) {
//     console.error("Failed to fetch and save players data", error);
//   }
// }

// module.exports = fetchPlayersData;
