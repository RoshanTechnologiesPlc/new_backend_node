const teamStat = require("../../../schemas/team_profile/team_stat_schema")
const Standing = require("../../../schemas/standings")
const leagueName = require("../../../schemas/leagueNamesSchema")
const Match = require("../../../schemas/match_schema")
const lastFiveMatches = require("../../../schemas/team_profile/lastFiveMatches")
async function getTeamStatByTeamId(req, res){
    try{
        const teamId = +req.query.id
        season = +req.query.season
        console.log(`team id is ${teamId} and season is ${season}`)
        result = await teamStat.find({
            id : teamId , 
            season : season
        }).populate('league');
    console.log(`successfully retrieved team statistics and returned`)
      if(result == null){
        return res.status(404).json({"message" : "team not found"})
      }else{
        return res.status(200).json(result)
      }
    }catch(e){
        console.log(`error happened while retrieving team statistics ${e}`)
      return   res.status(502).json({"message" : "error"});
    }
}



async function getTeamStandings(req , res) {
    const { teamId, season } = req.query;

    try {
        const allSeasonStandings = await Standing.find({ season: parseInt(season) });

        if (!allSeasonStandings || allSeasonStandings.length === 0) {
            return res.status(404).send('Standings for the season not found');
        }

        const results = [];

        for (let seasonStanding of allSeasonStandings) {
            // Iterate through each group in the standings
            for (let group of seasonStanding.standings) {
                const sortedGroupTeams = group.sort((a, b) => a.rank - b.rank);
                const teamIndex = sortedGroupTeams.findIndex(team => team.teamData.id === parseInt(teamId));

                if (teamIndex !== -1) {
                    let startIdx, endIdx;

                    if (teamIndex === 0) {
                        startIdx = 0;
                        endIdx = Math.min(4, sortedGroupTeams.length);
                    } else if (teamIndex === sortedGroupTeams.length - 1) {
                        startIdx = Math.max(0, sortedGroupTeams.length - 4);
                        endIdx = sortedGroupTeams.length;
                    } else if (teamIndex === 1) {
                        startIdx = 0;
                        endIdx = Math.min(4, sortedGroupTeams.length);
                    } else {
                        startIdx = teamIndex - 1;
                        endIdx = Math.min(teamIndex + 3, sortedGroupTeams.length);
                    }

                    const relevantTeams = sortedGroupTeams.slice(startIdx, endIdx);
                    const leagueInfo = await leagueName.findOne({ id: seasonStanding.leagueId });

                    results.push({
                        league: seasonStanding.leagueId,
                        amharicLeagueName: leagueInfo.amharicName,
                        oromoLeagueName: leagueInfo.oromoName,
                        somaliLeagueName: leagueInfo.somaliName,
                        englishLeagueName: leagueInfo.englishName,
                        logo: leagueInfo.photo,
                        standings: relevantTeams
                    });

                    // Break out of the inner loop once the team is found in a group
                    break;
                }
            }
        }

        if (results.length === 0) {
            return res.status(404).send('Team not found in any standings for the specified season');
        }

        return res.json(results);

    } catch (error) {
        console.error(error);
        return res.status(500).send('Server error');
    }
}


async function getLastFiveMatches(req, res) {
    console.log(`Getting last five matches for team with id ${req.query.id}`);
    try {
        const teamId = +req.query.id;
        const result = await lastFiveMatches.findOne({ teamId: teamId }) // use findOne instead of find since you expect a single document
            .populate({
                path: 'matches',
                model: 'Match', // Assuming that the match model is registered as 'Match'
                populate: [
                    { path: 'homeTeam', model: 'TeamDataSchema' }, // Assuming the team model is registered as 'TeamData'
                    { path: 'awayTeam', model: 'TeamDataSchema' }
                ]
            })
            .exec();

        console.log(`Successfully retrieved team statistics and returned`);

        if (!result) {
            return res.status(404).json({ "message": "team not found" });
        } else {
            return res.status(200).json(result);
        } 
    } catch (e) {
        console.log(`Error happened while retrieving team statistics ${e}`);
        return res.status(502).json({ "message": "error" });
    }
}

module.exports  = {
    getTeamStatByTeamId , 
    getTeamStandings  , 
    getLastFiveMatches
}