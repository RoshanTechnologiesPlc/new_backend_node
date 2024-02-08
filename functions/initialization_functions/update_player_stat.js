const {
    fetchTopYellowCardScorers , 
    fetchTopRedCardScorers
} = require('../../fetch/fetch_top_card_scorer')
const fetchTopScorers = require("../../fetch/fetch_topscorer")

const fetchTopAssists = require("../../fetch/fetch_top_assists")

const oneDay = 1000 * 60 * 60 * 24;
const leagueIds = [
    39  , 2 , 363 , 140, 61 , 135, 78 ,  3 , 307 , 45 ,  48   , 
  41,
  42,
  40 , 
  6, 
  // 4 , 
  960,
  
  45,   41  ,40,42  ,  32   , 29, 34   , 31  ,  30 , 33 , 5];
async function updateTopScorers(){
    for (const leagueId of leagueIds) {
        await fetchTopScorers(leagueId , 2023)
        await fetchTopAssists(leagueId , 2023)
        await fetchTopYellowCardScorers(leagueId , 2023)
        await fetchTopRedCardScorers(leagueId , 2023)

       // console.log("top scorers updated")
    }
}

async function periodicUpdate(){
    await updateTopScorers()
    setInterval(updateTopScorers , oneDay * 3)
}

module.exports = periodicUpdate