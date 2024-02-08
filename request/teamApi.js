// const axios = require("axios");
// const Team = require("../models/team");
// const { mapTeamData } = require("../dataMapper/teamDataMapper");

// const fetchTeamData = async () => {
//   // const teamIds = [33, 42, 85, 541, 40, 50, 49, 4116, 4119];

//   try {
//     for (const id of teamIds) {
//       const response = await axios.get(
//         "https://v3.football.api-sports.io/teams",
//         {
//           params: {
//             id: id,
//           },
//           headers: {
//             "x-rapidapi-key": "373145c158a54c630c57f0af6bc798f4",
//           },
//         }
//       );

//       const teamData = response.data.response[0];
//       const mappedTeamData = mapTeamData(teamData);
//       const team = new Team(mappedTeamData);
//       await team.save();
//     }

//     console.log("Teams saved successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// };

// module.exports = fetchTeamData;
