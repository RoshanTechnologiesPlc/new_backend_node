const express = require("express");
const router = express.Router();
const playerDataController = require("../controller/playerDataController");

router.get("/", playerDataController.getPlayerData);
router.get("/best", playerDataController.getBestPlayers);

module.exports = router;
