const Team = require("../schemas/team_schema");
const Match = require("../schemas/match_schema");

async function fetchFixture(leagueId) {
  const config = {
    method: 'GET',
    url: 'https://v3.football.api-sports.io/fixtures',
    params: { league: `${leagueId}`, season: "2022" },
    headers: {
        
      'x-rapidapi-key': '373145c158a54c630c57f0af6bc798f4'
    }
  };

  try {
    const response = await axios(config);
    const fixtures = response.data.response;

    if (fixtures.length === 0) {
      console.log("No fixtures found for the specified team ID and season.");
      return;
    }

    const lastMatch = fixtures[0];
    const previousMatch = fixtures.length > 1 ? fixtures[1] : null;

    const teamData = {
      id: teamId,
      lastMatch: lastMatch.fixture.id,
      previousMatch: previousMatch ? previousMatch.fixture.id : null
    };

    const matchData = [];
    fixtures.forEach((fixture) => {
      const matchDocument = new Match({
        id: fixture.fixture.id,
        referee: fixture.fixture.referee,
        timezone: fixture.fixture.timezone,
        date: fixture.fixture.date,
        venue: fixture.fixture.venue,
        status: fixture.fixture.status,
        league: fixture.league,
        teams: fixture.teams,
        goals: fixture.goals,
        score: fixture.score
      });

      matchData.push(matchDocument);
    });

    const team = new Team(teamData);
    await team.save();

    await Match.insertMany(matchData);

    console.log("Data inserted successfully.");
  } catch (error) {
    console.error("Error fetching and inserting data:", error);
  }
}

module.exports = fetchFixture;
