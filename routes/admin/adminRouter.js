const express = require('express');
const router = express.Router();
const newsRouter = require('./newsRouter');
const teamNameRouter = require('./teamNameRouter')
const playerNameRouter = require('./playerNameRouter')
const podcastRouter = require("./podcast")
router.use('/news', newsRouter);

router.use('/teamNames'  , teamNameRouter )
router.use('/playerNames' , playerNameRouter)
router.use("/podcast" , podcastRouter)
module.exports = router;