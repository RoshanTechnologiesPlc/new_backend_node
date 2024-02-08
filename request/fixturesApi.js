// const axios = require("axios");
// const mongoose = require("mongoose");
// const Team = require("../models/team");
// const Fixture = require("../models/fixture");
// const { mapFixtureData } = require("../dataMapper/fixture");

// const fetchDataAndSaveFixtures = async () => {
//   try {
//     const teams = await Team.find({}).exec();
//     const season = 2022;
//     const league = 39;
//     console.log(teams.join());
//     for (const team of teams) {
//       const response = await axios.get(
//         "https://v3.football.api-sports.io/fixtures",
//         {
//           params: {
//             team: team.team.id,
//             season,
//             league,
//           },
//           headers: {
//             "x-rapidapi-key": "373145c158a54c630c57f0af6bc798f4",
//           },
//         }
//       );

//       const fixtures = response.data.response;

//       for (const fixtureData of fixtures) {
//         const mappedFixtureData = mapFixtureData(fixtureData);
//         const fixtureDoc = new Fixture(mappedFixtureData);
//         await fixtureDoc.save();
//       }
//     }
//     console.log("Fixtures saved successfully.");
//   } catch (error) {
//     console.error("Error fetching and saving fixtures:", error.message);
//   }
// };

// module.exports = fetchDataAndSaveFixtures;
