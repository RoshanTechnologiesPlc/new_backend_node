const express = require("express");
const leaguesPageController = require("../controller/leaguesPageController/leaguesPageController");
const getLeagueNews = require('../controller/leaguesPageController/news')
const champions = require("../controller/leaguesPageController/champions");
const router = express.Router();
router.get("/topscorers", leaguesPageController.getTopScorersbyLeagueId);
router.get("/topassistors" , leaguesPageController.getTopAssistorsbyLeagueId);
router.get("/topyellowcards" , leaguesPageController.getTopYellowcardbyLeagueId)
router.get("/topredcards" , leaguesPageController.getTopRedcardbyLeagueId)
router.get("/topteams" , leaguesPageController.getTopTeamStatistics)
router.get("/standings" , leaguesPageController.getStandingDatabyLeagueId)
router.get("/standingsbyseason" , leaguesPageController.getStandingBySeason)
router.get("/seasons" , leaguesPageController.getAvailableSeasons)
router.get('/champions' , champions)
router.get('/news' , getLeagueNews)
module.exports = router;

