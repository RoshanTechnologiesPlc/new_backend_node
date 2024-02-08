const {fetchEventt} = require("./fetch/fetch_event")
const {fetchLineupForMatch} = require("./fetch/fetch_lineup")
const { fetchMatchStatistics} =require("./fetch/fetch_match_statistics")
const leagueIds  =[{"id":1048935},{"id":1048938},{"id":1048936},{"id":1048937},{"id":1048927},{"id":1048926},{"id":1048933},{"id":1048929},{"id":1048931},{"id":1048921},{"id":1048920},{"id":1048918},{"id":1048922},{"id":1048919}, 
{"id":1126357},{"id":1126353},{"id":1126363},{"id":1126364},{"id":1126355},{"id":1126366},{"id":1126352},{"id":1126360},{"id":1126354},{"id":1126367},{"id":1126362},{"id":1126356},{"id":1126359},{"id":1126365},{"id":1126361},{"id":1126358},{"id":1126339},{"id":1126350},{"id":1126344},{"id":1126345},{"id":1126346},{"id":1126347},{"id":1126348},{"id":1126349},{"id":1126351},{"id":1126343},{"id":1126342},{"id":1126341},{"id":1126340},{"id":1126336},{"id":1126337},{"id":1126338},{"id":1119757},{"id":1119759},{"id":1113480},{"id":1119753},{"id":1119755},{"id":1121134},{"id":1119761},{"id":1119628},{"id":1119751},{"id":1119763},{"id":1119756},{"id":1119752},{"id":1119760},{"id":1113479},{"id":1119627},{"id":1121133},{"id":1119762},{"id":1119754} , 

{"id":1074314},{"id":1074318},{"id":1074312},{"id":1074316},{"id":1074315},{"id":1074313},{"id":1074311},{"id":1074319},{"id":1074317},{"id":1074310},{"id":1074309},{"id":1074306},{"id":1074302},{"id":1074308},{"id":1074305},{"id":1074304},{"id":1074303},{"id":1074307},{"id":1074300},{"id":1074301},{"id":1074298},{"id":1074293},{"id":1074296},{"id":1074295},{"id":1074299},{"id":1074297},{"id":1074294},{"id":1074290},{"id":1074285},{"id":1074289},{"id":1074288},{"id":1074291},{"id":1074287},{"id":1074286},{"id":1074292},{"id":1074284},{"id":1074280},{"id":1074281},{"id":1074282},{"id":1074283},{"id":1074279},{"id":1074278},{"id":1074277},{"id":1074276},{"id":1074275},{"id":1074274},{"id":1074273},{"id":1074272},{"id":1074270},{"id":1074271}
]
async function fetchRecentMatchesEvent(){
    

for (let index = 0; index < 8; index++) {
    const id = leagueIds[index]["id"];
   await fetchEventt(id)  
await fetchLineupForMatch(id)  
await fetchMatchStatistics(id)
}



setTimeout(() => {}, 1000 * 60 * 2);

for (let index = 8; index < 16; index++) {
    const id = leagueIds[index]["id"];
//    await fetchEventt(id)  
// await fetchTheLineup(id)  
await fetchMatchStatistics(id) 
}



setTimeout(() => {}, 1000 * 60 * 2);

for (let index = 16; index < leagueIds.length; index++) {
    const id = leagueIds[index]["id"];
//    await fetchEventt(id)  
// await fetchTheLineup(id)  
await fetchMatchStatistics(id)

}

}


module.exports = {
    fetchRecentMatchesEvent
}