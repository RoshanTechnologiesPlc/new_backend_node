const { default: axios } = require("axios");

Lineup = require("../schemas/lineup_schema")


const leagueIds = [ 
  868306 , 
  868313 , 
  868393,
  868303, 
  868296, 
  868298 , 
  868301 , 
  868299 , 
  868308,
  868297 , 

]




async function fetchLineup(fixid){
  for(i = 0 ; i < leagueIds.length ;i++){
    await fetchTheLineup(leagueIds[i]);
  }
}

async function fetchTheLineup(fixtureId) {
    const config = {
      method: 'GET',
     
      url : "https://v3.football.api-sports.io/fixtures/lineups" , 
      params: { fixture: `${fixtureId}` },
      headers: {
          
        'x-rapidapi-key': '1d8b97a2a806716a1f50c53d5ca840fd'
      }
    };

    const response = await axios(config)
  
    try {
     console.log(response)
      const lineupData = response.data.response;
      // const updatedLineupData = lineupData.map((data) => ({ ...data, fixture: fixtureId }));
      
      if (lineupData.length === 0) {
        console.log("No fixtures found for the specified team ID and season.");
        return;
      }
  
  
    await Lineup.findOneAndUpdate({fixture : fixtureId} , {fixture : fixtureId , response : lineupData} ,{upsert : true})
      console.log("inserted!")
  
      console.log("Data inserted successfully.");
    } catch (error) {
      console.error("Error fetching and inserting data:", error);
    }
  }
  
  module.exports ={ fetchLineup , fetchTheLineup};
  