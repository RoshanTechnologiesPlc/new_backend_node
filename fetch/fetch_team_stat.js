const axios = require('axios');
const League = require("../leagues");
const leagues = require('../leagues');
async function fetchStanding(teamId){
    const config = {
        method: 'GET',
        url : "https://api-football-v1.p.rapidapi.com/v3/teams/statistics" , 
        params: { league: 39 , season : "2023"  , team : teamId},
        headers: {
          
          'x-rapidapi-key': '516ffc4e5amshc6b0d3476bfcca6p1ea884jsnc1ddf49f673b'
        }
      };
 
       
      try {
        const response = await axios(config);
       
        console.log(response.status); 




       
          if (response.status  == 200) {
            const standingData = response.data["response"][0]["league"]["standings"];
            await League.findOneAndUpdate(
              { id: leagueId }, 
              { standings: standingData }, 
              { upsert: true } 
            );
            console.log("standing data entered successfully")
          }
        



      
    } catch (error) {
        console.error("Error fetching data:", error);
    }


   
   
         
      }
module.exports = fetchStanding 