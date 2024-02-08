const matchStatisticsSchema = require("../schemas/match_statistics")
async function getMatchDetails(req , res){
 fixtureId = +req.params.id; 
 console.log(" = -  -  - -  - 88")
    try {
        const statistics =  await matchStatisticsSchema.findOne({
            fixtureId : fixtureId
         })
         console.log(statistics)
         res.status(200).json(statistics) 
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getMatchDetails}