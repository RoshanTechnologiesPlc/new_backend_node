const mongoose = require('mongoose');
const TeamStats = require('../../schemas/team_profile/team_stat_schema');  // Make sure to provide the correct path
const LeagueName = require("../../schemas/leagueNamesSchema")
const axios = require('axios');
const dotenv = require('dotenv');
const Standing = require('../../schemas/standings');
const transliterateLeagues = require('../league_transliteration')
dotenv.config();


async function fetchTeamStatistics(season, teamId, leagueId) {
    const config = {
        method: 'GET',
        // url: 'https://v3.football.api-sports.io/standings',
        url: `${process.env.API_FOOTBALL_URL}/teams/statistics`,
        params: { league: leagueId, season: season, team: teamId },
        headers: {

            'x-rapidapi-key': '1d8b97a2a806716a1f50c53d5ca840fd',
            "x-rapidapi-host": "v3.football.api-sports.io"
        }
    };

    const response = await axios(config);

    if (response.status == 200) {
        await saveTeamStatsToDatabase(response.data , teamId , season  );
    }
}




const saveTeamStatsToDatabase = async (apiResponse, teamId,   season) => {


    try {


        // Extract the relevant data from the response
        const data = apiResponse.response;
        console.log("data=",data)
        const leagueId = data.league.id
        const leagueName = data.league.name
        const leagueLogo = data.league.logo
        let leagueObjId = null

        const leagueData = await LeagueName.findOne({
            id: leagueId,
            translated: true
        })
        if (leagueData == null) {

            const translatedObject = await transliterateLeagues(leagueName)
            if (translatedObject) {
                const teamObj = {
                    id: leagueId,
                    amharicName: translatedObject.AmharicName,
                    oromoName: translatedObject.OromoName,
                    somaliName: translatedObject.SomaliName,
                    englishName: leagueName,
                    translated: true,
                    photo: leagueLogo
                }
                const insertedLeague = await LeagueName.findOneAndUpdate(
                    { id: leagueId },
                    teamObj,
                    { upsert: true, new: true }
                )
    
                leagueObjId = insertedLeague._id

            }else{
                const insertedLeague = await LeagueName.findOneAndUpdate(
                    { id: leagueId },
                     {
                        id: leagueId,
                        amharicName: leagueName,
                        oromoName: leagueName,
                        somaliName: leagueName,
                        englishName: leagueName,
                        translated: false,
                        photo: leagueLogo
                     },
                    { upsert: true, new: true }

                )

    
                leagueObjId = insertedLeague._id

            }
          
        }else{
            leagueObjId = leagueData._id
        }
        const teamStats = {
            id : data.team.id,
            name : data.team.name,
            leagueId : leagueId,
            season  : season , 
            league : leagueObjId,
            form: data.form,
            fixtures: data.fixtures,
            goals: data.goals,
            biggest: data.biggest,
            clean_sheet: data.clean_sheet,
            failed_to_score: data.failed_to_score,
            penalty: data.penalty,
            lineups: data.lineups,
            cards: data.cards
        }


        await TeamStats.findOneAndUpdate(
            { id: data.team.id , season : season  , league : leagueObjId },
            teamStats,
            { upsert: true, new: true }
        )
        // Save the document to the database
        // await teamStats.save();
        console.log('Data saved successfully!');
    } catch (error) {
        console.error('Error saving data to database:', error);
    }
};

// Connect to the MongoDB database
module.exports = { fetchTeamStatistics};