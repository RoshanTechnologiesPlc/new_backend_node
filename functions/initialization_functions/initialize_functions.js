const updateHighlights = require('./fetch_highlights')
const updateTeamStat = require('./update_team_stat')
const updatePlayerStat = require('./update_player_stat')
const updateMatches = require('./update_matches')
const updateStandings = require('./update_standings')
const updateNews = require('./update_news')
async function updateData(){
    return console.log("update data noop")
    await updateHighlights()
    await updateTeamStat()
    await updatePlayerStat()
    await updateMatches()
    await updateStandings()
    await updateNews()
}

module.exports = updateData