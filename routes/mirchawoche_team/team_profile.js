const express = require("express");
const teamProfileController = require("../../controller/mirchaweche/team/getTeamStat");

const router = express.Router();

router.get("/statistics", teamProfileController.getTeamStatByTeamId);
router.get("/standings", teamProfileController.getTeamStandings);
router.get('/lastFiveMatches' , teamProfileController.getLastFiveMatches)
module.exports = router;
