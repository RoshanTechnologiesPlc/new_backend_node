const fetchFixturesByLeagueId = require("../../fetch/new_fetch");
const oneDay = 1000 * 60 * 60 * 24;
async function updateMatches() {
 
    // await  fetchTodaysEvents() 
    // await fetchTodaysMatchStatistics()
    const ourleagueIds = [
      39, 2, 363, 140, 61, 135, 78, 3, 307, 45, 48,
      41,
      42,
      40,
      6,
      // 4 , 
      960,
  
      45, 41, 40, 42, 32, 29, 34, 31, 30, 33, 5];
    // await fetchFixturesByLeagueId(48, 2023 , true);
    // for (let i = 30; i < 400; i++) {
    for (let i = 0; i < ourleagueIds.length; i++) {
      await fetchFixturesByLeagueId(ourleagueIds[i], 2023, true);
      await fetchFixturesByLeagueId(ourleagueIds[i], 2023, false);
  
    }
  }

  async function periodicUpdate() {
    await updateMatches()
    setInterval(updateMatches, oneDay )
}

module.exports = periodicUpdate