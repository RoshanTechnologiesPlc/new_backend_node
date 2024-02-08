const StandingSchema = require("../../schemas/standings")


async function getChampionsForLeague(req, res){
    try{
        leagueId = req.query.leagueId
        results = await StandingSchema.find({
            leagueId : leagueId
        }).sort({
            season : -1
        })

        res.status(200).json(results)
    }catch(e){
        res.status(502).json({
            message : "Internal server error"
        })
    }
}


module.exports  = getChampionsForLeague;