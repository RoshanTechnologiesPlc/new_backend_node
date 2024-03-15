const axios = require('axios');
const topYellowCard = require("../schemas/top_yellow_card");
const topRedCard = require("../schemas/top_red_card")
const API_KEY  = '516ffc4e5amshc6b0d3476bfcca6p1ea884jsnc1ddf49f673b'
const modifyAndCreateNewList  = require('./functions/top_players')




async function fetchTopYellowCardScorers(leagueId  , season){
    const config = {
        method: 'GET',
        url : `https://v3.football.api-sports.io/players/topyellowcards` , 
        params: { league: leagueId , season : season},
        headers: { 
          'x-rapidapi-key': '1d8b97a2a806716a1f50c53d5ca840fd',
          "x-rapidapi-host": "v3.football.api-sports.io" }
      };   
      try {
        const response = await axios(config);
          if (response.status  == 200) {
            const ScorersData = response.data["response"];
            const topScorers  = await modifyAndCreateNewList(ScorersData)

            await topYellowCard.findOneAndUpdate(
              { leagueid: leagueId  , season : season}, 
             
              { scorers : topScorers , season  :season }, 
              { upsert: true } 
            );
            console.log("yellow card scorers data entered successfully")
          } } catch (error) {
        console.error("Error fetching data:", error);
    }  }


async function fetchTopRedCardScorers(leagueId  , season){
        const config = {
            method: 'GET',
            url : `https://v3.football.api-sports.io/players/topredcards` , 
            params: { league: leagueId , season : season},
            headers: { 
              'x-rapidapi-key': '1d8b97a2a806716a1f50c53d5ca840fd',
          "x-rapidapi-host": "v3.football.api-sports.io"
          }
        };   
          try {
            const response = await axios(config);
              if (response.status  == 200) {
                const ScorersData = response.data["response"];
                const topScorers  = await modifyAndCreateNewList(ScorersData)
    
                await topRedCard.findOneAndUpdate(
                  { leagueid: leagueId  , season : season}, 
                 
                  { scorers : topScorers , season  :season }, 
                  { upsert: true } 
                );
                console.log("red card scorers data entered successfully")
              } } catch (error) {
            console.error("Error fetching data:", error);
        }  }

   
module.exports = {
    fetchTopYellowCardScorers , 
    fetchTopRedCardScorers
}


