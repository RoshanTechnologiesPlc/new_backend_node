
const { fetchTeamStatistics } = require("../../fetch/mirchawoche_team/fetch_team_stat")
const oneDay = 1000 * 60 * 60 * 24;
async function updateTeamStat() {
    await fetchTeamStatistics()
    setInterval(fetchTeamStatistics, oneDay * 3)
}

module.exports = updateTeamStat