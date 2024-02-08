
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const express = require("express");
const userController = require("../controller/user/updatePreferences");
const vote = require("../controller/user/vote")
const verifyUserAccessToken = require("../middleware/verify_user_access_token");
const router = express.Router();
const userImageController = require("../controller/user/user_picture")
const getUserImage = require("../controller/user/get_user_image")

const forYouNews = require('../controller/news/for_you')
router.post("/updatePreference",   userController.updateUserInfo);
router.use(verifyUserAccessToken)

router.post('/voteMatch',  vote.vote)
router.get('/getVote' , vote.getVotes)
router.get('/customnews' , forYouNews )


router.post('/addToFavMatch' , userController.addToFavouriteMatches)

router.post('/addToFavPlayer' , userController.addToFavouritePlayers)

router.post('/addToFavTeam' , userController.addToFavouriteTeams)

router.post('/addToFavPodcast' , userController.addToFavouritePodcast)
router.post('/removeFavMatch' , userController.removeFromFavouriteMatches)
router.post('/removeFavTeam' , userController.removeFromFavouriteTeams)
router.post('/removeFavPlayer' , userController.removeFromFavouritePlayers)
router.post('/removeFavPodcast' , userController.removeFromFavouritePodcast)
router.post('/checkFollowingMatch' , userController.checkMatchFollowing)
router.post('/checkFollowingPlayer' , userController.checkPlayerFollowing)
router.post('/checkFollowingTeam' , userController.checkTeamFollowing)
router.post('/checkFollowingPodcast' , userController.checkPodcastFollowing)


// Custom storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const userId = req.user.id;
        const dir = `${userId}`;

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }

        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null,
             file.originalname
            ); // or construct a new filename if needed
    }
});

const upload = multer({ storage: storage });
router.post('/uploadImage', upload.single('image'), userImageController.uploadImages);
router.get('/getImage', getUserImage.getUserImage);

module.exports = router;
