const express = require("express");
const router = express.Router();
const matchDetailController = require("../controller/matchdetail.Controller");

router.get("/:id", matchDetailController.getMatchDetails);



module.exports = router;
