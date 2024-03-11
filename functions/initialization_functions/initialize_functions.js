const updateTeamStat = require('./update_team_stat')
const updatePlayerStat = require('./update_player_stat')
const updateMatches = require('./update_matches')
const updateStandings = require('./update_standings')

async function updateData(){

    await updateTeamStat()
    await updatePlayerStat()
    await updateMatches()
    await updateStandings()


}

module.exports = updateData
