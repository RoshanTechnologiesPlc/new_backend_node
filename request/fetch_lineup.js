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
     
      url : "https://api-football-v1.p.rapidapi.com/v3/fixtures/lineups" , 
      params: { fixture: `${fixtureId}` },
      headers: {
          
        'x-rapidapi-key': '516ffc4e5amshc6b0d3476bfcca6p1ea884jsnc1ddf49f673b'
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
  