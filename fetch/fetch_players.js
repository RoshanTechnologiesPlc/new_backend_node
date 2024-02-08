const axios = require('axios');
async function fetchPlayers(playerId){
    const config = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/players',
        params: { id: `${playerId}` , season : "2023"},
        headers: {
          
          'x-rapidapi-key': '3a6132d5f144f0812116eab47f5a5dd7'
        }
      };
 
       
    apiresponse = await axios(config)
      .then(function (response) {
        return response.data })
//  const playerData = apiresponse["response"][0]["player"]["standings"];

    
    // await player.findOneAndUpdate(
    //   { id: playerId }, 
    //   { standings: playerData }, 
    //   { upsert: true } 
    // );
    console.log(apiresponse)
   
      
         
      }

// fetchStanding(280)