const mongoose = require('mongoose')
const getTodaysMatches = require('../fetch/getTodaysFixtures')
const scheduleMatches = async (agenda) => {

  // await agenda.cancel({ name: 'fetch lineup', 'data.matchId': { $exists: true } });
  // await agenda.cancel({ name: 'fetch match event', 'data.matchId': { $exists: true } });




  let matches = await getTodaysMatches();
  const now = new Date();
  const tenMinuteLater = new Date(now.getTime() + 1000 * 60 * 10);
  const oneMinuteLater = new Date(now.getTime() + 1000 * 60 * 0.2);


  // matches = [addedMatch]
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i]
   const matchId = match.id;
    const matchDate = new Date(match.date);
    let lineupTime = new Date(matchDate.getTime() - 60 * 60 * 1000);
    let squadTime = new Date(matchDate.getTime() - 5 * 60 * 60 * 1000);
    const currentTime = new Date();
    const timeDifference = matchDate.getTime() - currentTime.getTime();
    const checkMatchStatusTime = new Date(matchDate.getTime() - 60 * 1000); // 1 minute before match
    if (timeDifference < 60 * 60 * 1000) {
      lineupTime = new Date(currentTime.getTime() + 3000);  // Set it to a second from now
    }
    if (timeDifference < 8 * 60 * 60 * 1000) {
      squadTime = new Date(currentTime.getTime() + 3000);  // Set it to a second from now
    }
    console.log(`scheduled match event job ${matchId} at ${matchDate}`)
    console.log(`${match.homeTeam}`)
   
    if (timeDifference > 0) {
      const minutes = Math.floor(timeDifference / 60000); // 1 minute = 60000 milliseconds
      const seconds = Math.floor((timeDifference % 60000) / 1000); // Remainder in seconds

     // console.log(`Scheduling match event job for match ID: ${matchId} at ${matchDate} (starts in ${minutes} minutes and ${seconds} seconds)`);
    } else {
     // console.log(`Scheduling match event job for match ID: ${matchId} at ${matchDate} (start time already passed)`);
    }
    homeTeamId = match.homeTeam.id
    awayTeamId = match.awayTeam.id
    await agenda.schedule(squadTime, 'fetch squad', { matchId });



    await agenda.schedule(matchDate, 'check match status', { matchId, match });
    await agenda.schedule(lineupTime, 'fetch line up', { matchId });
    await agenda.schedule(matchDate, 'fetch match statistics', { matchId });
    await agenda.schedule(matchDate, 'fetch match event', { matchId, match, homeTeamId, awayTeamId });
  const fifteenMinutesBefore = new Date(matchDate.getTime() - 15 * 60000);
    await agenda.schedule(fifteenMinutesBefore.toISOString(), 'fifteen minutes left', { fixtureId: matchId, match: match })
}
};

module.exports = scheduleMatches;