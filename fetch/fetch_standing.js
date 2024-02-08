const axios = require('axios');
const League = require("../leagues");
const leagues = require('../leagues');

async function fetchStanding(leagueId){
    const config = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/standings',
        // url : "https://api-football-v1.p.rapidapi.com/v3/standings" , 
        params: { league: leagueId , season : "2023"},
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': 'e67d254b5f3aea256bdce5a4a1b43224'
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