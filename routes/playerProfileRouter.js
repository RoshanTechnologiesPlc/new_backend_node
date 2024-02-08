const express = require("express");
const router = express.Router();
const playerProfileController = require("./../controller/playerProfileController");
const verify_user_access_token = require("./../middleware/verify_user_access_token");
router.get("/", playerProfileController.getPlayers);
router.get("/favPlayers" , verify_user_access_token ,   playerProfileController.getFavouritePlayers)
router.get('/teamPlayers' , playerProfileController.getPlayerWithTeam)
router.get('/search' , playerProfileController.searchPlayer)
router.get('/adminsearch' , playerProfileController.searchPlayerForAdmin)
module.exports = router;
