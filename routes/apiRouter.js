const express = require("express");
const playerPreferenceRouter = require("./playerPreferenceRouter");
const productRouter = require("./productRoute");
const playerDataRouter = require("./playerDataRouter");
const teamRouter = require("./teamRoute");
const fixtureRouter = require("./fixtureRoute");
const router = express.Router();
const podcastRouter = require("./podcastRouter");
const playlistRouter = require("./playlistRouter");
const lineupRouter  = require("./lineupRoute")
const leaguesPageController = require("./leaguesPageRouter")
const matchDetailController = require("./match_detail")
const headToheadController = require("./head_to_head.router")
const highlightsRouter = require("./highlightRoute")
const playerProfileRouter = require("./playerProfileRouter")
const squadRouter = require("./squadRouter")
const socialMediaRouter = require("./social_media/social_media")
const teamController = require("./mirchawoche_team/team_router")
const teamProfileController = require("./mirchawoche_team/team_profile")
const otpController = require("./authentication/otpRoute")
const transferRoute = require("../controller/transfer/transferController")
const userRouter = require('./user_router')
router.use("/player-data", playerDataRouter);
// router.use("/teams", teamRouter);
router.use("/products", productRouter);
router.use("/fixtures", fixtureRouter);
router.use("/player-preferences", playerPreferenceRouter);
router.use("/podcasts", podcastRouter);
router.use("/playlist", playlistRouter);
router.use("/lineup", lineupRouter)
router.use("/leagues" , leaguesPageController)
router.use("/details" , matchDetailController)
router.use("/h2h" , headToheadController)
router.use("/highlights" , highlightsRouter) 
router.use("/players" , playerProfileRouter)
router.use("/squad" , squadRouter)
router.use("/teams" , teamController)
router.use('/teamProfile' , teamProfileController)
router.use('/authentication' ,  otpController)
router.use('/user' , userRouter)
router.use("/socialmedia", socialMediaRouter);
router.use("/transfer", transferRoute);
module.exports = router;
