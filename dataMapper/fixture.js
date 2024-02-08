function mapFixtureData(fixtureData) {
  const { fixture, league, teams, goals, score } = fixtureData;

  return {
    fixture: {
      id: fixture.id,
      referee: fixture.referee,
      timezone: fixture.timezone,
      date: fixture.date,
      timestamp: fixture.timestamp,
      periods: {
        first: fixture.periods.first,
        second: fixture.periods.second,
      },
      venue: {
        id: fixture.venue.id,
        name: fixture.venue.name,
        city: fixture.venue.city,
      },
      status: {
        long: fixture.status.long,
        short: fixture.status.short,
        elapsed: fixture.status.elapsed,
      },
    },
    league: {
      id: league.id,
      name: league.name,
      country: league.country,
      logo: league.logo,
      flag: league.flag,
      season: league.season,
      round: league.round,
    },
    teams: {
      home: {
        id: teams.home.id,
        name: teams.home.name,
        logo: teams.home.logo,
        winner: teams.home.winner,
      },
      away: {
        id: teams.away.id,
        name: teams.away.name,
        logo: teams.away.logo,
        winner: teams.away.winner,
      },
    },
    goals: {
      home: goals.home,
      away: goals.away,
    },
    score: {
      halftime: {
        home: score.halftime.home,
        away: score.halftime.away,
      },
      fulltime: {
        home: score.fulltime.home,
        away: score.fulltime.away,
      },
      extratime: {
        home: score.extratime.home,
        away: score.extratime.away,
      },
      penalty: {
        home: score.penalty.home,
        away: score.penalty.away,
      },
    },
  };
}

module.exports = { mapFixtureData };
