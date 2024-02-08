const PlayerPreference = require("../models/playerProfileSchema");

// Get all player preferences
async function getAllPlayerPreferences(req, res) {
  try {
    const playerPreferences = await PlayerPreference.find();
    res.status(200).json(playerPreferences);
  } catch (error) {
    console.error("Failed to fetch player preferences", error);
    res.status(500).json({ error: "Failed to fetch player preferences" });
  }
}

// Get a specific player preference
async function getPlayerPreference(req, res) {
  const playerId = req.params.id;
  try {
    const playerPreference = await PlayerPreference.findById(playerId);
    if (!playerPreference) {
      return res.status(404).json({ error: "Player preference not found" });
    }
    res.status(200).json(playerPreference);
  } catch (error) {
    console.error("Failed to fetch player preference", error);
    res.status(500).json({ error: "Failed to fetch player preference" });
  }
}

// Create a new player preference
async function createPlayerPreference(req, res) {
  console.log(req.body);
  const { name, season, league, image } = req.body;
  try {
    const playerPreference = new PlayerPreference({
      name,
      season,
      league,
      image,
    });
    const savedPreference = await playerPreference.save();
    res.status(201).json(savedPreference);
  } catch (error) {
    console.error("Failed to create player preference", error);
    res.status(500).json({ error: "Failed to create player preference" });
  }
}

// Update a player preference
async function updatePlayerPreference(req, res) {
  const playerId = req.params.id;
  const { name, season, league, image } = req.body;
  try {
    const updatedPreference = await PlayerPreference.findByIdAndUpdate(
      playerId,
      {
        name,
        season,
        league,
        image,
      },
      { new: true }
    );
    if (!updatedPreference) {
      return res.status(404).json({ error: "Player preference not found" });
    }
    res.status(200).json(updatedPreference);
  } catch (error) {
    console.error("Failed to update player preference", error);
    res.status(500).json({ error: "Failed to update player preference" });
  }
}

// Delete a player preference
async function deletePlayerPreference(req, res) {
  const playerId = req.params.id;
  try {
    const deletedPreference = await PlayerPreference.findByIdAndDelete(
      playerId
    );
    if (!deletedPreference) {
      return res.status(404).json({ error: "Player preference not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    console.error("Failed to delete player preference", error);
    res.status(500).json({ error: "Failed to delete player preference" });
  }
}

module.exports = {
  getAllPlayerPreferences,
  getPlayerPreference,
  createPlayerPreference,
  updatePlayerPreference,
  deletePlayerPreference,
};
