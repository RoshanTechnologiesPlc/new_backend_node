const axios = require('axios');
const Match = require('../schemas/match_schema');
const TeamDataSchema = require("../schemas/team_data")
const transliterateToAmharic = require("../fetch/team_transliteration")
require('dotenv').config()
async function fetchFixturesByLeagueId(leagueId , season , upcoming) {
 var config  = {}
 if(upcoming === true){
  config = {
    method: 'GET',
    url: `${process.env.API_FOOTBALL_URL}/fixtures`,
    params: { league: `${leagueId}`, season: season, next: 99},
    headers: {
      'x-rapidapi-key': process.env.API_FOOTBALL_kEY,
      "x-rapidapi-host": "v3.football.api-sports.io"
    },
  };
 }else{
  config = {
    method: 'GET',
    url: `${process.env.API_FOOTBALL_URL}/fixtures`,
    params: { league: `${leagueId}`, season: season, last : 99},
    headers: {
      'x-rapidapi-key': process.env.API_FOOTBALL_kEY,
      "x-rapidapi-host": "v3.football.api-sports.io"
    },
  };
 }

  try {
    const response = await axios(config);

    if (response.status === 200) {
      // console.log(response.data);
      const fixtures = response.data.response;

      
        // fixtures.map(async (data) => 
        for(let i  = 0 ; i < fixtures.length ; i ++){
          data = fixtures[i]
          const { id ,referee , timezone , date , venue , status} = data.fixture;
          var {league, teams , goals, score } = data
          // teams["home"]["name"] = convertToAmharic(teams["home"]["name"])
          // teams["away"]["name"] = convertToAmharic(teams["away"]["name"])
          homeTeam = teams["home"]
          var teamInfo =  await TeamDataSchema.findOne({
            id : homeTeam.id
          })


          //console.log(`team info is ${teamInfo} ,  homeTeam ${homeTeam}`)
          if(teamInfo == null){ 
            
            teamInfo = {
              id : homeTeam.id ,  
              englishName : homeTeam.name,  
              logo : homeTeam.logo
            }

             teamObject = await transliterateToAmharic(teamInfo)
             teamObject.logo = homeTeam.logo
             teamObject.id =homeTeam.id 
            
             teamInfo = await TeamDataSchema.findOneAndUpdate({
              id :homeTeam.id
             } ,teamObject , {
              upsert : true , 
              new : true
             } )
             
          }  

          awayTeam = teams["away"]
          var awayTeamInfo =  await TeamDataSchema.findOne({
            id : awayTeam.id
          })
          if(awayTeamInfo == null){ 
            
            awayTeamInfo = {
              id : awayTeam.id , 
              englishName : awayTeam.name,  
              logo : awayTeam.logo
            }

             teamObject = await transliterateToAmharic(awayTeamInfo)
             teamObject.logo =  awayTeam.logo
             teamObject.id =awayTeam.id 
            
             awayTeamInfo = await TeamDataSchema.findOneAndUpdate({
              id : awayTeam.id
             } ,teamObject , {
              upsert : true , 
              new : true
             } )
             
          }  
         

          // teams = {
          //   home : teamInfo._id , 
          //   away : awayTeamInfo._id
          // }
          homeTeam = teamInfo._id
          awayTeam = awayTeamInfo._id
          
          const dateOnly = date.slice(0 , 10)
       
          const matchData = {
            id,
            referee,
            timezone,
            date,
            venue,
            status,
            league,
            homeTeam , 
            awayTeam ,
            goals,
            score,
            dateOnly, 
          };
         // console.log(matchData)
          await Match.findOneAndUpdate({ id: matchData.id }, matchData, { upsert: true });
          //console.log("successfully updated the match")
           }
        // )
    
    }
  } catch (e) {
    console.log(e);
  }
}
module.exports = fetchFixturesByLeagueId;
 