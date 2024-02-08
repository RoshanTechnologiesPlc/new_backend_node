const fetchStandingNew = require("./fetch/fetch_league_statistics")

async function fetchLeagueWinners(){
let initialSeason = 2012

for(let  i  = 0  ; i < 2023-initialSeason ; i++){
   await fetchStandingNew(39 ,initialSeason+ i)
}

}


module.exports = fetchLeagueWinners