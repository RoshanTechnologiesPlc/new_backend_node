const {getPodcast} = require('../../controller/podcastController')
const express = require("express");
const router = express.Router();

router.get('/getpodcastbyid/:id' , getPodcast)

module.exports = router 