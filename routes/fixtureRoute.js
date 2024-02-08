const express = require("express");
const {getMatchesByDate , getFixturesOfLeague , getFixtureById} = require("../controller/fixuresController")
const router = express.Router();


router.get("/date" , getMatchesByDate);
router.get("/fixture" , getFixtureById);
router.get('/leaguefixtures/:leagueId' , getFixturesOfLeague)
module.exports = router;
