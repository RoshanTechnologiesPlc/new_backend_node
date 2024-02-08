const Match = require("../schemas/match_schema");

async function getFixtureById(req, res) {
 console.log(req.query.fixtureId)
  try {
    const fixtureId = +req.query.fixtureId;
    const fixture = await Match.findOne({ id: fixtureId })
      .populate('awayTeam')
      .populate('homeTeam')
      .exec();
  
     return   res.status(200).json(fixture);
     
      
    // return 
  } catch (error) {
    console.error('Error retrieving fixture by id:', error);
    return res.sendStatus(502);
    // throw error; 
  }

}
async function getMatchesByDate(req , res) {
    date = req.query.date
    leagueId = req.query.leagueId
 
   if(+leagueId == 0){
    console.log(`dateOnly is ${date}`)
    try {
      
      const matches = await Match.find({ dateOnly: date })
      .sort({ date: 1 })
      .populate('awayTeam')
      .populate('homeTeam')
      .exec();

      return res.status(200).json({matches});
    } catch (error) {
      console.error('Error retrieving matches by date:', error);
      throw error;
    }
   }else{
    try {  
     
      const matches = await Match.find({ 
        'league.id' : leagueId , 
        dateOnly: date  }).sort({date : 1}).populate('awayTeam')
        .populate('homeTeam').exec();
    
      return res.status(200).json({matches});
    } catch (error) {
      console.error('Error retrieving matches by date:', error);
      throw error;
    }
   }

    
  }
 async function getFixturesOfLeague(req, res){
    const leagueId = +req.params.leagueId;
    console.log(leagueId)
   try{
    
    const listOfMatches = await Match.aggregate([
      {
          $match: { "league.id": leagueId , 
        'league.season' : 2023
        }
      },
      {
          $lookup: {
              from: "teamdataschemas", // Adjusted collection name
              localField: "awayTeam",
              foreignField: "_id",
              as: "awayTeamData"
          }
      },
      {
          $lookup: {
              from: "teamdataschemas", // Adjusted collection name
              localField: "homeTeam",
              foreignField: "_id",
              as: "homeTeamData"
          }
      },
      {
          $unwind: "$awayTeamData"
      },
      {
          $unwind: "$homeTeamData"
      },
      {
          $group: {
              _id: "$dateOnly",
              fixtures: { $push: "$$ROOT" }
          }
      },
      {
          $project: { 
              dateOnly: "$_id",
              fixtures: 1,
              _id: 0
          }
      },
      {
          $sort: { dateOnly : 1 ,  date : 1}
          // $sort: { date : 1 }
      }
  ]);
  
  
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
  
      res.json({
          currentDate: formattedDate,
          fixtures: listOfMatches
      });
      return res.status(200).json({listOfMatches});
  
  
    
   }catch(e){
  
   }
    
  }
module.exports = {getMatchesByDate , getFixturesOfLeague , getFixtureById}