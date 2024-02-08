const axios = require('axios');
const MatchStatisticsModel = require('../schemas/team_match_statistics');
const matchStatisticsSchema = require("../schemas/match_statistics")
const getTodaysMatches = require('./getTodaysFixtures');

require('dotenv').config()


async function fetchTodaysMatchStatistics(){
    const fixtures = await getTodaysMatches()
    console.log(`there are ${fixtures.length} fixtures today`)
    if(fixtures){
      for(fixture of fixtures){
      result =   await fetchMatchStatistics(fixture["id"])
      console.log(result)
      }
    }  
}

async function fetchMatchStatistics(fixtureId){
    const config = {
        method: 'GET',
        // url: 'https://v3.football.api-sports.io/standings',
        url : `${process.env.API_FOOTBALL_URL}/fixtures/statistics` , 
        params: {fixture  :fixtureId},
        headers: {
          
          'x-rapidapi-key': process.env.API_FOOTBALL_kEY,
        "x-rapidapi-host": "v3.football.api-sports.io"
        } };
 
       
      try {
        const response = await axios(config);
       
        // console.log(response.status); 




       
          if (response.status  == 200) {
            try {
                const teamOneStatData = response.data["response"][0];
                const teamTwoStatData = response.data["response"][1];
                const teamOneStat = extractMatchStat(teamOneStatData ,fixtureId)
                const teamTwoStat = extractMatchStat(teamTwoStatData , fixtureId)
                await MatchStatisticsModel.findOneAndUpdate({
                    teamId : teamOneStat["teamId"] ,
                    fixtureId : fixtureId
                } ,
                teamOneStat , 
                {
                    upsert : true
                }
                );
            
                await MatchStatisticsModel.findOneAndUpdate({
                    teamId : teamTwoStat["teamId"] ,
                    fixtureId : fixtureId
                } ,
                teamTwoStat , 
                {
                    upsert : true
                }
                );

                await matchStatisticsSchema.findOneAndUpdate({
                    fixtureId : fixtureId
                } , 
                {
                    teamOneStat : teamOneStat ,
                    teamTwoStat : teamTwoStat
                } , 
                {
                    upsert : true
                }
                )
                console.log(`successfully inserted the match statistics!`)

            } catch (error) {
                console.log(`can't fill the data ${error}`)
            }
           
          }   } catch (error) {
        console.error("Error fetching data:", error);
    }   }



    function extractMatchStat(data , fixtureId){
    
        // const teamStat = {
        //     id : data["team"]["id"], 
        //     fixtureId : fixtureId, 
        //     shotsOfGoal : 
        // }
        const matchStatistics = {
            teamId: data.team.id,
            fixtureId: fixtureId, 
            shotsOfGoal: null,
            shotsOnGoal : null,
            totalShots: null,
            blockedShots: null,
            shotsInsideBox: null,
            shotsOutsideBox: null,
            fouls: null,
            cornerKicks: null,
            offsides: null,
            ballPossession: null,
            yellowCards: null,
            redCards: null,
            goalKeeperSaves: null,
            totalPasses: null,
            passesAccurate: null,
            passesInPercent: null
          };

        data.statistics.forEach(statistic => {
            const type = statistic.type;
          
            switch (type) {
              case "Shots on Goal":
                matchStatistics.shotsOnGoal = statistic.value;
                break;
              case "Shots off Goal":
                matchStatistics.shotsOfGoal = statistic.value;
                break;
              case "Total Shots":
                matchStatistics.totalShots = statistic.value;
                break;
              case "Blocked Shots":
                matchStatistics.blockedShots = statistic.value;
                break;
              case "Shots insidebox":
                matchStatistics.shotsInsideBox = statistic.value;
                break;
              case "Shots outsidebox":
                matchStatistics.shotsOutsideBox = statistic.value;
                break;
              case "Fouls":
                matchStatistics.fouls = statistic.value;
                break;
              case "Corner Kicks":
                matchStatistics.cornerKicks = statistic.value;
                break;
              case "Offsides":
                matchStatistics.offsides = statistic.value;
                break;
              case "Ball Possession":
                matchStatistics.ballPossession = percentStringToInt(statistic.value);
                break;
              case "Yellow Cards":
                matchStatistics.yellowCards = statistic.value;
                break;
              case "Red Cards":
                matchStatistics.redCards = statistic.value;
                break;
              case "Goalkeeper Saves":
                matchStatistics.goalKeeperSaves= statistic.value;
                break;
              case "Total passes":
                matchStatistics.totalPasses = statistic.value;
                break;
              case "Passes accurate":
                matchStatistics.passesAccurate= statistic.value;
              case "Passes %":
                matchStatistics.passesInPercent = percentStringToInt(statistic.value)
                break;
              default:
                break;
            }})

        return matchStatistics;
    }


    function percentStringToInt(percentString) {
      if (percentString === null) {
        return null;
      }
    
      if (typeof percentString !== 'string') {
        percentString = percentString.toString();
      }
    
      const match = percentString.match(/(\d+)/);
    
      if (match) {
        return parseInt(match[0], 10);
      }
    
      return null;
    }
    
    // Examples:

    
module.exports = { fetchTodaysMatchStatistics ,fetchMatchStatistics } 