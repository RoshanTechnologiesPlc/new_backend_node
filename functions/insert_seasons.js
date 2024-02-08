const availableSeasonsSchema = require("../schemas/available_seasons")

async function insertSeasons(leagueId ,seasons){
 
    try {
        await availableSeasonsSchema.findOneAndUpdate({
            leagueId : leagueId
        } , 
        {
            seasons : seasons
        }  , 
        {
            upsert  :true
        }
        )
    console.log("seasons insertion completed successfully!");
    } catch (error) {
        console.log(`can't add the seasons ${error}`);
}}



module.exports = {
    insertSeasons
} 