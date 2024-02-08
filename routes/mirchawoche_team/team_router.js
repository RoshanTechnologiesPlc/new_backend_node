const express = require("express");
const teamController = require("../../controller/mirchaweche/team/favteamscontroller");
const verify_user_access_token = require("../../middleware/verify_user_access_token");
const router = express.Router();

router.get("/favteams", verify_user_access_token,  teamController.getFavouriteTeams);
module.exports = router;
