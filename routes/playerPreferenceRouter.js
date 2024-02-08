const express = require("express");
const playerPreferenceController = require("../controller/playerPreferenceController");
const router = express.Router();

// Get all player preferences
router.get("/", playerPreferenceController.getAllPlayerPreferences);

// Get a specific player preference
router.get("/:id", playerPreferenceController.getPlayerPreference);

// Create a new player preference
router.post("/", playerPreferenceController.createPlayerPreference);

// Update a player preference
router.patch("/:id", playerPreferenceController.updatePlayerPreference);

// Delete a player preference
router.delete("/:id", playerPreferenceController.deletePlayerPreference);

module.exports = router;
