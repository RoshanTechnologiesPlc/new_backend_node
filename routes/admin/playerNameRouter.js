const {editPlayerName , getPlayerNames} = require('../../controller/playerNameController')
const express = require("express");
const router = express.Router();


router.post('/edit' , editPlayerName  )
router.get('/players' , getPlayerNames)
module.exports = router 