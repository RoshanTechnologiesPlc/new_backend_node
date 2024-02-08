const axios = require('axios');
// const League = require("../leagues");
const teamStatistics = require("../schemas/team_statistics")
const LeagueStatistics = require("../schemas/league_statistics")
const StandingSchema = require("../schemas/standings")
const TeamDataSchema = require("../schemas/team_data")
const transliterateToAmharic = require("../fetch/team_transliteration")

require('dotenv').config()

async function fetchStandingNew(leagueId, season){

  console.log(`leagueID ${leagueId} , season ${season}`)
    const config = {
        method: 'GET',
         url: 'https://v3.football.api-sports.io/standings',
        //url : `${process.env.API_FOOTBALL_URL}/standings` , 
        params: { league: leagueId , season : season},
        headers: { 
          'x-rapidapi-key': 'e67d254b5f3aea256bdce5a4a1b43224',
          "x-rapidapi-host": "v3.football.api-sports.io"
        }
      };
      
      // const config = {
      //   method: 'GET',
      //   url: `${process.env.API_FOOTBALL_URL}/fixtures/events`,
      //   params: { fixture: `${fixtureId}` },
       
      // };
 
       
      try {
        const response = await axios(config);
       
        console.log(response.status); 




       
          if (response.status  == 200) {
            console.log(response.data);
            try {
              
            const standingData = response.data["response"][0]["league"]["standings"];
            // await League.findOneAndUpdate(
            //   { id: leagueId }, 
            //   { standings: standingData }, 
            //   { upsert: true } 
            // );
            // console.log("standing data entered successfully")

            const StandingList = []
            for(let i = 0 ; i < standingData.length ; i ++){
            const teamStatsList =    await  fetchLeagueStatistics(standingData[i] , leagueId, season)
            StandingList.push(teamStatsList)
            // await new Promise(resolve => setTimeout(resolve, 40000));
          }
          if (StandingList.length > 0) {
            try {
              await StandingSchema.findOneAndUpdate({
                leagueId : leagueId , 
                season : season
              } , {
                standings : StandingList
              }, {
                upsert : true
              })


              console.log("the newly formed schema for standing is updated!")
            } catch (error) {
              console.log(`failed to add standing data to the new schema ${error}`)
            }
          }

         
       
            } catch (error) {
              console.log(`can't update the standing data ${error}`)       
            }
           }
        



      
    } catch (error) {
        console.error("Error fetching data:", error);
    }


   
   
         
      }

      async function fetchLeagueStatistics(groupStandingList , leagueId , season) {
  const  teamStatsList = []

        for (let i = 0; i < groupStandingList.length; i++) {
          standingData = groupStandingList[i]
 
          var teamInfo = await TeamDataSchema.findOne(
            { id: standingData.team.id, translated: true },
            null,
            { maxTimeMS: 90000 } // Adjust the buffering time as needed
          );
  var teamObject = null
 if(teamInfo == null){ 

  teamInfo = {
     id: standingData.team.id,
  englishName: standingData.team.name, 
  logo: standingData.team.logo,
  }
   teamObject = await transliterateToAmharic(teamInfo)
  }
   
   else{
      teamObject = teamInfo
   }
   console.log(teamObject)
  if (teamObject == false) {
    teamObject = {
      id: standingData.team.id,
      logo : standingData.team.logo ,
      AmharicName : standingData.team.name,
      EnglishName  : standingData.team.name , 
      OromoName : standingData.team.name ,
      translated : false , 
      SomaliName : standingData.team.name,

    }
  } else {
    teamObject.id = standingData.team.id
    teamObject.logo = standingData.team.logo
    teamObject.translated = true
   
  }
  
  teamInfo = await TeamDataSchema.findOneAndUpdate(
    { id: standingData.team.id },
    teamObject,
    { upsert: true, new: true, maxTimeMS: 90000 }
  );
  
   console.log(teamInfo)
 // }  
 const teamStat = {
  leagueid: leagueId,
  // teamId: standingData.team.id,
  // teamName: standingData.team.name,
  // logo: standingData.team.logo,
  teamData : teamInfo, 
  season: season, 
  played : standingData.all.played ,
  rank: standingData.rank,
  form : standingData.form, 
  win: standingData.all.win,
  draw: standingData.all.draw,
  loss: standingData.all.lose,
  point: standingData.points,
  scored: standingData.all.goals.for,
  conceded: standingData.all.goals.against,
  goalDifference  : standingData.goalsDiff, 
  averageScored:  calculateAverage(standingData.all.goals.for ,  standingData.all.played),
  averageConceded: calculateAverage(standingData.all.goals.against ,  standingData.all.played),
  homePlayed: standingData.home.played,
  homeWon: standingData.home.win,
  homeScored : standingData.home.goals.for , 
  homeConceded : standingData.home.goals.against , 
  homeLoose: standingData.home.lose,
  homeDraw: standingData.home.draw,
  homePoint: calculateHomePoint(standingData.home.win ,standingData.home.draw ),
  homeGoalDifference : standingData.home.goals.for - standingData.home.goals.against ,
  awayPlayed: standingData.away.played,
  awayWon: standingData.away.win, 
  awayConceded : standingData.away.goals.against ,
  awayScored : standingData.away.goals.for, 
  awayLoose: standingData.away.lose,
  awayDraw: standingData.away.draw,
  awayPoint: standingData.points - calculateHomePoint(standingData.home.win ,standingData.home.lose ),
    awayGoalDifference : standingData.away.goals.for - standingData.away.goals.against ,
  };



  // console.log(teamStat)
  // teamStatModel = new teamStatistics(teamStat)
  // teamStatModel.save()
  teamStatModel =  await teamStatistics.findOneAndUpdate({
      'teamData.id' : standingData.team.id , 
      season : season, 
      leagueid : leagueId
  } , 
  teamStat ,  
  {
      upsert : true,
      new: true
  }
  )
  teamStatsList.push(teamStatModel)
  // console.log(teamStatsList)
  }
  // console.log(teamStatModel)

  try {
    await LeagueStatistics.findOneAndUpdate({
          leagueId : leagueId , 
          season : season
      } , 
      {
          leagueId  :leagueId, 
          season : season , 
          teamStatistics :  teamStatsList 
      } ,  
      {
          upsert : true
      }
      
      )
      console.log(`data insertion sucessfully completed! for league ${leagueId} and season ${season}`)
  } catch (error) {
      console.log(`error occured while upserting leagueStatistics ${error}`)
  }
    


  return teamStatsList

}
      

  
      function calculateAverage(firstNum, secondNum){
        if(secondNum == 0 ){
            return 0
        }
        return firstNum / secondNum
      }

      function calculateHomePoint(homeWon, homeDraw){
        console.log(`home point is  ... ${homeWon * 3 + homeDraw * 1}`)
            return homeWon * 3 + homeDraw * 1;
      }


     

module.exports = fetchStandingNew