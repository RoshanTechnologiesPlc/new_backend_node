// const Team = require("../models/team");

// const getAllTeams = async (req, res) => {
//   try {
//     const teams = await Team.find({});
//     res.status(200).json(teams);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to retrieve teams" });
//   }
// };

// module.exports = {
//   getAllTeams,
// };

const Team = require("../models/team");
const ALLTeam = require("../models/allTeam");
const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find({});
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve teams" });
  }
};

const getTeamById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    console.log("team");
    const team = await ALLTeam.findOne({ "team.id": id });
    // console.log(team);
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    // const teamId = team.team.id; // Access the "id" property of the "team" object
    // console.log(teamId);
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve team" });
  }
};

module.exports = {
  getAllTeams,
  getTeamById,
};
