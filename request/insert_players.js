// const PlayerPreference = require("../models/player");

// const playerPreferences = [
//   {
//     name: "Mohamed Salah",
//     season: 2022,
//     league: 39,
//   },
//   {
//     name: "Cristiano Ronaldo",
//     season: 2022,
//     league: 307,
//   },
//   {
//     name: "Messi",
//     season: 2022,
//     league: 61,
//   },
//   {
//     name: "Neymar",
//     season: 2022,
//     league: 61,
//   },
//   {
//     name: "Mbappe",
//     season: 2022,
//     league: 61,
//   },

//   {
//     name: "Haaland",
//     season: 2022,
//     league: 39,
//   },

//   {
//     name: "Benzema",
//     season: 2022,
//     league: 307,
//   },

//   {
//     name: "Rashford",
//     season: 2022,
//     league: 39,
//   },

//   {
//     name: "Sadio Mane",
//     season: 2022,
//     league: 78,
//   },

//   {
//     name: "Bukayo Saka",
//     season: 2022,
//     league: 39,
//   },

//   {
//     name: "Martin Odegaard",
//     season: 2022,
//     league: 39,
//   },

//   {
//     name: "William Saliba",
//     season: 2022,
//     league: 39,
//   },

//   {
//     name: "Rodri",
//     season: 2022,
//     league: 39,
//   },
//   {
//     name: "Bruno Fernandes",
//     season: 2022,
//     league: 39,
//   },
//   {
//     name: "Virgil van Dijk",
//     season: 2022,
//     league: 39,
//   },
//   {
//     name: "Casemiro",
//     season: 2022,
//     league: 39,
//   },
//   {
//     name: "Luke Shaw",
//     season: 2022,
//     league: 39,
//   },

//   {
//     name: "Eden Hazard",
//     season: 2022,
//     league: 140,
//   },

//   {
//     name: "Gabriel Jesus",
//     season: 2022,
//     league: 39,
//   },

//   {
//     name: "Jack Grealish",
//     season: 2022,
//     league: 39,
//   },
// ];

// async function insertPlayerPreferences() {
//   console.log("called");
//   try {
//     for (const preference of playerPreferences) {
//       const playerPreference = new PlayerPreference(preference);
//       await playerPreference.save();
//     }
//     console.log("Player preferences inserted successfully!");
//   } catch (error) {
//     console.error("Failed to insert player preferences", error);
//   }
// }

// module.exports = insertPlayerPreferences;
