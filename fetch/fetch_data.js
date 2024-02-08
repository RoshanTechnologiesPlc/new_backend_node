const Match = require('../schemas/match_schema'); // Adjust the path accordingly

async function getListofMatches(leagueId) {
  try {
    // Find all matches with the given league ID and project only the home team name and match ID
    const matches = await Match.find({ 'league.id': leagueId }, { 'teams.home.name': 1, id: 1 });

    // Extract the necessary data and return it as a list of objects
    const matchesList = matches.map(match => ({
      homeTeamName: match.teams.home.name,
      matchId: match.id,
    }));

    return matchesList;
  } catch (error) {
    console.error('Error fetching matches:', error.message);
    return [];
  }
}

module.exports = getListofMatches;