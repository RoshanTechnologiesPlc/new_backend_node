const express = require("express");
const headToheadController = require("../controller/headtoheadController")
const router = express.Router();

router.get("/", headToheadController.getHeadToHeadMatches);
module.exports = router;
