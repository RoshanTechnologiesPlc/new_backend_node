const axios = require('axios');
const topScorer = require("../schemas/top_assists");
const modifyAndCreateNewList  = require('./functions/top_players')
async function fetchTopAssists(leagueId  , season){
    const config = {
        method: 'GET',
        url :  `https://v3.football.api-sports.io/players/topassists` , 
        params: { league: leagueId , season : season},
    
          headers: { 
            'x-rapidapi-key': '1d8b97a2a806716a1f50c53d5ca840fd',
            "x-rapidapi-host": "v3.football.api-sports.io" }
      
      };
 
       
      try {
        const response = await axios(config);
      
          if (response.status  == 200) {
            const ScorersData = response.data["response"];
            const TopAssists  = await modifyAndCreateNewList(ScorersData)

            await topScorer.findOneAndUpdate(
              { leagueid: leagueId  , season : season}, 
             
              { scorers : TopAssists , season  :season }, 
              { upsert: true } 
            );
            console.log("scorers data entered successfully")
          }
        



      
    } catch (error) {
        console.error("Error fetching data:", error);
    }


   
   
         
      }



     
    
module.exports = fetchTopAssists


