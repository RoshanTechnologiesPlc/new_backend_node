const express = require("express");
const router = express.Router();
const PlaylistController = require("../controller/playlistController");
router.post("/", PlaylistController.addPlaylist);
router.get("/collection" , PlaylistController.findCollection)
router.get("/p" , PlaylistController.getAllPlaylists)
module.exports = router;
   