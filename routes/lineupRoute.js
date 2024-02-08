const express = require("express");
const router = express.Router();
const lineupController = require("../controller/lineupController");

router.get("/:id", lineupController.getLineups);



module.exports = router;
