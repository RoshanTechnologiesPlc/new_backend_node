// const axios = require("axios");
// const Team = require("../models/allTeam");
// const { mapTeamData } = require("../dataMapper/teamDataMapper");

// const apiKey = "373145c158a54c630c57f0af6bc798f4";
// const apiUrl = "https://v3.football.api-sports.io/teams";
// const season = 2021;

// async function fetchAndSaveTeams() {
//   const leagueIds = [39, 2, 363, 140, 61, 135];

//   for (const leagueId of leagueIds) {
//     try {
//       const response = await axios.get(
//         `${apiUrl}?league=${leagueId}&season=${season}`,
//         {
//           headers: {
//             "x-rapidapi-key": apiKey,
//           },
//         }
//       );

//       const teamDataList = response.data.response;

//       for (const teamData of teamDataList) {
//         const mappedTeamData = mapTeamData(teamData);
//         const team = new Team(mappedTeamData);

//         try {
//           const savedTeam = await team.save();
//           console.log("Team saved:", savedTeam);
//         } catch (error) {
//           console.error("Error saving team:", error);
//         }
//       }
//     } catch (error) {
//       console.error("Error retrieving teams:", error);
//     }
//   }
// }

// module.exports = fetchAndSaveTeams;
