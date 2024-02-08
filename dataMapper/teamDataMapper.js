function mapTeamData(teamData) {
  return {
    team: {
      id: teamData.team.id,
      name: teamData.team.name,
      code: teamData.team.code,
      country: teamData.team.country,
      founded: teamData.team.founded,
      national: teamData.team.national,
      logo: teamData.team.logo,
    },
    venue: {
      id: teamData.venue.id,
      name: teamData.venue.name,
      address: teamData.venue.address,
      city: teamData.venue.city,
      capacity: teamData.venue.capacity,
      surface: teamData.venue.surface,
      image: teamData.venue.image,
    },
  };
}

module.exports = {
  mapTeamData,
};
