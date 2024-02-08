const Squad = require("./../schemas/squad_schema").squad;
const playerNames = require("./../schemas/player_names");
// const playerId = YOUR_PLAYER_ID; // replace with the playerId you want to search for

async function getTeammates(req, res) {
    const playerId = +req.query.id;

    const squad = await Squad.find({ players: { $elemMatch: { playerId: playerId } } }).populate({
        path: 'players',
        model: 'PlayerName', // this is the name of the model you've exported
        populate: [{
            path: 'player',
            model: 'PlayerName'  // replace with the actual name you've used when exporting the model
        }]
    })
    if (squad) {
        const players = []
        for (let i = 0; i < squad.length; i++) {
            const squadPlayers = squad[i].players;
            const teammates = squadPlayers.filter(player => player.playerId != playerId)
            players.push(teammates)
        }
        res.status(200).json(players[0])
        console.log("returned!")


    } else {
        console.log(`player with id ${playerId} does not exist`)
        res.status(404).json({ message: `player with id ${playerId} does not exist` })
    }



    console.log(`player id is ${playerId}`)


}

async function getSquadsByPlayer(req, res) {
    const playerId = +req.query.id;
    console.log("Request is coming ...");

    // Find squads where the player is a member
    const squads = await Squad.find({ "players.playerId": playerId }).populate({
        path: 'players',
        model: 'PlayerName',
        populate: [{
            path: 'player',
            model: 'PlayerName'
        }]
    }).populate("team");

    if (squads && squads.length > 0) {
        console.log("Returned!");
        return res.status(200).json(squads);
    } else {
        console.log(`Player with id ${playerId} does not exist in any squad`);
        return res.status(404).json({ message: `Player with id ${playerId} does not exist in any squad` });
    }
}




async function getSquadByTeamId(req, res){
    teamId  = +req.query.id
        console.log(teamId)
    try {
        const result = await Squad.findOne(
            {
                teamId  : teamId
            }
        ).populate({
            path: 'players',
            model: 'PlayerName',
            populate: [{
                path: 'player',
                model: 'PlayerName'
            }]
        })

        if(res == null){
           return res.status(201).send("squad not found")
        }

        return res.status(200).json(result)
    } catch (e) {
        console.log(`error happened while trying to get squad ${e}`)
    }
}
module.exports = { getTeammates, getSquadsByPlayer , getSquadByTeamId }




