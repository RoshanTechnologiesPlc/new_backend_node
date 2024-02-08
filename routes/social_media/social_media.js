const express = require("express");
const index = require("../../controller/social_media/FaceBookController").index;
const instagram = require('../../controller/social_media/InstagramController')
const router = express.Router();

router.get("/facebook",index);
router.get("/instagram",instagram)
module.exports = router;