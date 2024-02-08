const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const PodcastsController = require("../controller/podcastController");
const uniqid = require("uniqid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueIdentifier = Date.now();

    // Extract the file extension from the original filename
    const fileExtension = path.extname(file.originalname);

    // Construct the unique filename by prepending the identifier to the original filename
    const uniqueFilename = `${uniqid()}_${uniqueIdentifier}_${
      file.originalname
    }`;

    // Pass the unique filename to the callback function
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("avatar"), PodcastsController.addPodcast);
router.get("/", PodcastsController.getAllPodcasts);

module.exports = router;
