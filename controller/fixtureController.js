const Fixture = require("../models/fixture");

const getFixturesByTeamName = async (req, res) => {
  const teamName = req.query.teamName; // Get the team name from the query parameters

  try {
    const fixtures = await Fixture.find({
      $or: [
        { "teams.home.name": { $regex: teamName, $options: "i" } }, // Match home team name
        { "teams.away.name": { $regex: teamName, $options: "i" } }, // Match away team name
      ],
    });

    res.status(200).json(fixtures);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve fixtures" });
  }
};

module.exports = {
  getFixturesByTeamName,
};
