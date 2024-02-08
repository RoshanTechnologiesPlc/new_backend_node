function mapProfileData(playerData) {
  return {
    playerId: playerData.player.id,
    firstname: playerData.player.firstname,
    name: playerData.player.name,
    lastname: playerData.player.lastname,
    age: playerData.player.age,
    leagueid: playerData.statistics[0].league.id,
    season: playerData.statistics[0].league.season.toString(),
    birth: {
      date: playerData.player.birth.date,
      place: playerData.player.birth.place,
      country: playerData.player.birth.country,
    },
    team: playerData.statistics[0].team,
    nationality: playerData.player.nationality,
    height: playerData.player.height,
    weight: playerData.player.weight,
    injured: playerData.player.injured,
    photo: playerData.player.photo,
    league: {
      id: playerData.statistics[0].league.id,
      name: playerData.statistics[0].league.name,
      country: playerData.statistics[0].league.country,
      logo: playerData.statistics[0].league.logo,
      flag: playerData.statistics[0].league.flag,
      season: playerData.statistics[0].league.season,
    },
    appearences: playerData.statistics[0].games.appearences,
    goals: playerData.statistics[0].goals.total,
    assists: playerData.statistics[0].goals.assists,
    rating: playerData.statistics[0].games.rating,
    position: playerData.statistics[0].games.position,
  };
}

function mapStatsData(playerData) {
  return {
    minutes: playerData.statistics[0].games.minutes,
    captain: playerData.statistics[0].games.captain,
    goals: playerData.statistics[0].goals,
    tackles: playerData.statistics[0].tackles,
    shots: playerData.statistics[0].shots,
    dribbles: playerData.statistics[0].dribbles,
    fouls: playerData.statistics[0].fouls,
    cards: playerData.statistics[0].cards,
  };
}

module.exports = {
  mapProfileData,
  mapStatsData,
};
