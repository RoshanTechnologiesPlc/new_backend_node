const express = require("express");
const squadController = require("../controller/squadController");
const router = express.Router();

router.get("/teammates",  squadController.getTeammates);
// router.get("/:id", teamController.getTeamById);
router.get("/squads" , squadController.getSquadsByPlayer);
router.get('/teamSquads' , squadController.getSquadByTeamId)
module.exports = router;    