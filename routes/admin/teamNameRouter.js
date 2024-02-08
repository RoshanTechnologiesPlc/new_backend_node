const {getTeamNames , editTeamNames , searchTeamName} = require('../../controller/teamNameController')
const express = require("express");
const router = express.Router();

router.get('/teamnames' , getTeamNames)
router.post('/edit' , editTeamNames  )
router.get('/search' , searchTeamName)
module.exports = router 