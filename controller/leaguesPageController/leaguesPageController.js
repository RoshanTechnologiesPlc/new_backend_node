const TopScorers = require("../../schemas/top_scorer");
const TopAssistors = require("../../schemas/top_assists")
const TopRedCards = require("../../schemas/top_red_card")
const TopYellowCard = require("../../schemas/top_yellow_card")
const LeagueStatistics = require("../../schemas/league_statistics")
const TeamStatistics = require("../../schemas/team_statistics")
const StandingSchema = require("../../schemas/standings")
const playertop = require("../../schemas/epl_stats_schema")
const topteams = require("../../schemas/Epl_team_schema")

const availableSeasonsSchema = require("../../schemas/available_seasons")

async function getTopScorersbyLeagueId(req , res) {
    leagueId = req.query.leagueId
    season = req.query.season

    console.log(`the coming league id and season are ${leagueId}   --- ${season}`)
    try {
      const topScorers = await playertop.find({ 
       leagueid : leagueId , 
       season : season
       });
      return res.status(200).json(topScorers);
    } catch (error) {
      console.error('error retrieving topscores:', error);
      throw error;
    }}


  async function getTopAssistorsbyLeagueId(req , res) {
    leagueId = req.query.leagueId
    season = req.query.season
    try {
      const topAssistors = await topteams.find({ 
       leagueid : leagueId , 
       season : season
       });
      return res.status(200).json(topAssistors);
    } catch (error) {
      console.error('error retrieving topAssistors:', error);
      throw error;
    } }

    async function getTopRedcardbyLeagueId(req , res) {
      leagueId = req.query.leagueId
      season = req.query.season
      try {
        const topRedCards = await TopRedCards.find({ 
         leagueid : leagueId , 
         season : season
         });
         console.log(topRedCards)
        return res.status(200).json(topRedCards);
      } catch (error) {
        console.error('error retrieving topRedCards:', error);
        throw error;
      } }


      async function getTopYellowcardbyLeagueId(req , res) {
        leagueId = req.query.leagueId
        season = req.query.season
        try {
          const topYellowCards = await TopYellowCard.find({ 
           leagueid : leagueId , 
           season : season
           });
           console.log(topYellowCards)
          return res.status(200).json(topYellowCards);
        } catch (error) {
          console.error('error retrieving top yellow Cards:', error);
          throw error;
        } }





        async function getTopTeamStatistics(req , res){
          leagueId = req.query.leagueId
          season = req.query.season
          console.log(`team statistics request ...  ${leagueId} , ${season}` )
          try {
            const topScorers = await TeamStatistics.find(
              {
                leagueid : +leagueId , 
                season : +season
              } 
            ).sort({
              averageScored : -1
            }).populate("teamData").limit(20)

            const leastConceded = await TeamStatistics.find(
              {
                leagueid : leagueId , 
                season : season
              } 
            ).sort({
              averageConceded : 1
            }).populate("teamData").limit(20)

if (leastConceded.length == 0 ) {
  const topScorers = await TeamStatistics.find(
    {
      leagueid : +leagueId , 
      season : +season -1
    } 
  ).sort({
    averageScored : -1
  }).populate("teamData").limit(20)

  const leastConceded = await TeamStatistics.find(
    {
      leagueid : leagueId , 
      season :  +season -1
    } 
  ).sort({
    averageConceded : 1
  }).populate("teamData").limit(20)  

return  res.status(200).json({
  leastConceded  , 
  topScorers
})



}

            res.status(200).json({
              leastConceded  , 
              topScorers
            })
          } catch (error) {
            console.log(error)
            res.status(404).send("sorry , the server is not temporarily working")
          }
        }


 

        async function getTopTeamStatisticsForCompetition(req, res){
          leagueId = req.query.leagueId
          season = req.query.season
        
          try {
            
        
        
         
        
         
          
          
          } catch (e) {
            
          }
        }
        













async function getStandingDatabyLeagueId(req, res){
 


  leagueId = req.query.leagueId;
 

  try {
    leagueid = req.query.leagueId;
    console.log(leagueid);

   const availableSeason = await availableSeasonsSchema.findOne({leagueId : leagueid})
   console.log(" == = - - - - - - -")
   console.log(availableSeason)
   console.log(availableSeason["seasons"])
   season = availableSeason["seasons"][0].substring(0, 4);
   
    // standings = await League.findOne({ id: leagueid });
    // return res.status(200).json(standings);
standingData = await StandingSchema.aggregate([
  {
    $match: {
      leagueId:  +leagueid  , // Filter by the desired leagueId , 
      season : +season
    }
  },  
  {
    $unwind: "$standings" // Unwind the standings array to work with individual team statistics
  },
 
  {
    $sort: {
      "standings.rank": -1,
      // "standings.points": -1,           // Sort by points in descending order
      // "standings.goalDifference": -1,   // Sort by goal difference in descending order
      // "standings.goalsScored": -1      // Sort by goals scored in descending order
    }
  },
  {
    $group: {
      _id: "$_id", // Group by the original document's _id field
      standings: { $push: "$standings" } // Push the sorted standings back into an array
    }
  },
  {
    $project: {
      leagueId: 1, // Include other fields from your original schema
      season: 1,
      standings: 1 // Include the sorted standings
    }
  }
]);
homeStandingData = await StandingSchema.findOne({
  leagueId:  +leagueid , 

} , {
  standings : 1 , 
  season : 1
}).exec()
if (homeStandingData) {
  homeStandingData.standings.forEach((outerArray) => {
    outerArray.sort((a, b) => {
      // Sort by "homePoint" in descending order
      if (b.homePoint !== a.homePoint) { 
        return b.homePoint - a.homePoint;
      }
      // Sort by "homeGoalDifference" in descending order
      if (b.homeGoalDifference !== a.homeGoalDifference) {
        return b.homeGoalDifference - a.homeGoalDifference;
      }
      // Sort by "homeGoalsScored" in descending order
      return b.homeScored - a.homeScored;
    }); 
  });

  // Now the inner arrays are sorted within the "standings" field
 
} else {
  console.log("No data found for leagueId: " + leagueid);
}




awayStandingData = await StandingSchema.findOne({
  leagueId:  +leagueid
} , {
  standings : 1
}).exec()
if (awayStandingData) {
  awayStandingData.standings.forEach((outerArray) => {
    outerArray.sort((a, b) => {
      // Sort by "homePoint" in descending order
      if (b.awayPoint !== a.awayPoint) { 
        return b.awayPoint - a.awayPoint;
      }
      // Sort by "homeGoalDifference" in descending order
      if (b.awayGoalDifference !== a.awayGoalDifference) {
        return b.awayGoalDifference - a.awayGoalDifference;
      }
      // Sort by "homeGoalsScored" in descending order
      return b.awayScored - a.awayScored;
    }); 
  });

  // Now the inner arrays are sorted within the "standings" field
 
} else {
  console.log("No data found for leagueId: " + leagueid);
}  

return res.status(200).json({
  "overall" :  standingData[0]["standings"] ,
  "home" :  homeStandingData["standings"], 
  "away" :  awayStandingData["standings"], 
  "season" : homeStandingData["season"]
 
});
 
  } catch (e) {
    console.log(e);
    res.status(400).json({ ok: false });
  }
 }


async function getStandingBySeason( req , res){
 const leagueid = +req.query.leagueId
 const season = req.query.season
  try {
   
    // standings = await League.findOne({ id: leagueid });
    // return res.status(200).json(standings);
    

  console.log(`leaguid is  ${leagueid} and season is ${season}`)
standingData =await StandingSchema.aggregate([
  {
    $match: {
      leagueId:  leagueid , 
      // leagueId:  30, 
      season : +season // Filter by the desired leagueId
    }
  },
  {
    $unwind: "$standings" // Unwind the standings array to work with individual team statistics
  },
 
  {
    $sort: {
      "standings.rank": -1,
      // "standings.points": -1,           // Sort by points in descending order
      // "standings.goalDifference": -1,   // Sort by goal difference in descending order
      // "standings.goalsScored": -1      // Sort by goals scored in descending order
    }
  },
  {
    $group: {
      _id: "$_id", // Group by the original document's _id field
      standings: { $push: "$standings" } // Push the sorted standings back into an array
    }
  },
  {
    $project: {
      leagueId: 1, // Include other fields from your original schema
      season: 1,
      standings: 1 // Include the sorted standings
    }
  }
]);
homeStandingData = await StandingSchema.findOne({
  leagueId:  leagueid , 
  // leagueId:  30 , 
  season : season

} , {
  standings : 1 , 
  season : 1
}).exec()
if (homeStandingData) {
  homeStandingData.standings.forEach((outerArray) => {
    outerArray.sort((a, b) => {
      // Sort by "homePoint" in descending order
      if (b.homePoint !== a.homePoint) { 
        return b.homePoint - a.homePoint;
      }
      // Sort by "homeGoalDifference" in descending order
      if (b.homeGoalDifference !== a.homeGoalDifference) {
        return b.homeGoalDifference - a.homeGoalDifference;
      }
      // Sort by "homeGoalsScored" in descending order
      return b.homeScored - a.homeScored;
    }); 
  });

  // Now the inner arrays are sorted within the "standings" field
 
} else {
  console.log("No data found for leagueId: " + leagueid);
}




awayStandingData = await StandingSchema.findOne({
  leagueId:  leagueid , 
  // leagueId:  30, 
  season : season
} , {
  standings : 1 , 
 
}).exec()
if (awayStandingData) {
  awayStandingData.standings.forEach((outerArray) => {
    outerArray.sort((a, b) => {
      // Sort by "homePoint" in descending order
      if (b.awayPoint !== a.awayPoint) { 
        return b.awayPoint - a.awayPoint;
      }
      // Sort by "homeGoalDifference" in descending order
      if (b.awayGoalDifference !== a.awayGoalDifference) {
        return b.awayGoalDifference - a.awayGoalDifference;
      }
      // Sort by "homeGoalsScored" in descending order
      return b.awayScored - a.awayScored;
    }); 
  });

  // Now the inner arrays are sorted within the "standings" field
 
} else {
  console.log("No data found for leagueId: " + leagueid);
}  
 
// console.log({
//   "overall" :  standingData[0]["standings"][0] ,
//   // "home" :  homeStandingData["standings"], 
//   // "away" :  awayStandingData["standings"], 
//   // "season" : homeStandingData["season"]
  
// })
return res.status(200).json({
  "overall" :  standingData[0]["standings"] ,
  "home" :  homeStandingData["standings"], 
  "away" :  awayStandingData["standings"], 
  "season" : homeStandingData["season"]
 
});
 
  } catch (e) {
    console.log(e);
    res.status(400).json({ ok: false });
  }
}



async function getAvailableSeasons(req, res){
  leagueId = +req.query.leagueId
  console.log(leagueId)
  try {
    const seasons =  await availableSeasonsSchema.findOne({
      leagueId : leagueId
    })
    console.log(seasons["seasons"])
    res.status(200).json(seasons["seasons"])
    
  } catch (error) {
    console.log(error)
    res.status(500).json([])
  }
}
module.exports = {
  getTopScorersbyLeagueId , 
  getTopAssistorsbyLeagueId  ,
  getTopRedcardbyLeagueId ,
  getTopYellowcardbyLeagueId ,
  getTopTeamStatistics , 
  getStandingDatabyLeagueId , 
  getStandingBySeason , 
  getAvailableSeasons
}    
