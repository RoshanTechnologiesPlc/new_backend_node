const Matches = require("../schemas/match_schema")
const TeamData = require("../schemas/team_data")
async function getHeadToHeadMatches(req, res){
    try {
        console.log("incoming request")
        console.log(req.query)
    const teamsId = [
        +req.query.teamOne, 
        +req.query.teamTwo
    ]
  
    try {
       // Step 1: Find the ObjectIds for the teams
       const matches = await Matches.aggregate([
        {
            $lookup: {
                from: "teamdataschemas", // assuming this is the collection name for TeamDataSchema
                localField: "homeTeam",
                foreignField: "_id",
                as: "homeTeamData"
            }
        },
        {
            $lookup: {
                from: "teamdataschemas",
                localField: "awayTeam",
                foreignField: "_id",
                as: "awayTeamData"
            }
        },
        { $unwind: "$homeTeamData" },
        { $unwind: "$awayTeamData" },
        {
            $match: {
                $and: [
                    { "homeTeamData.id": { $in: teamsId } },
                    { "awayTeamData.id": { $in: teamsId } }
                ]
            }
        },
        { $sort: { date: -1 } }
    ]);
    
    
      // Remember to populate or manually join necessary fields if required.
      
console.log(matches[0])
      return  res.status(200).json(matches)

    } catch (error) {
     return res.status(500).json({"message" : "server is not working"});   
    }
    } catch (error) {
        // console.log(error)
    }
}

module.exports = {getHeadToHeadMatches}