
const oneSecond = 1000;
const oneMinute = 60 * oneSecond;
const oneHour = 60 * oneMinute;
const getTodaysMatches = require('../fetch/getTodaysFixtures')
const User = require('../schemas/user_model')
const userSockets = require('./../socket/userSocket')
const now = new Date();
const tenMinuteLater = new Date(now.getTime() + 1000 * 60 * 10); 
const oneMinuteLater = new Date(now.getTime() + 1000 * 60 * 1);




module.exports = async function(agenda) {
  // // console.log('setting up the agenda')
  // // Define the 'fetch squad' job
  agenda.define('fetch squad', async (job) => {
    const fixtureId = job.attrs.data.matchId;
    try {
        console.log('fetching squad for match' , fixtureId)
    } catch (e) {
      console.error(`Error in fetch_squad_id_${fixtureId}:`, e);
    }
  });
  
   


  // Define the 'check match status' job
  agenda.define('check match status', async (job) => {
    const fixtureId = job.attrs.data.matchId;
    let match = job.attrs.data.match;
    const checkInterval = setInterval(async () => {
    //   const match = await fetchFixtureByFixtureId(fixtureId);
    match = matches.find(match => match.id === fixtureId);
      if ( ["FT", "PST", "AET", "CANC", "ABD", "AWD", "WO"].includes(match?.status?.short)) {
        console.log(`stopped checking the match status for match ${fixtureId}`)
        clearInterval(checkInterval);
        await job.remove();
      } else if (match?.status?.short === "1H") {







        const interestedUsers = await User.find({
          favouriteMatches: { $elemMatch: { $eq: fixtureId } }
        });



        console.log(`match ${fixtureId} is started --- so sending notifications. ...`)




        interestedUsers.forEach(user => {
          const userSocketId = userSockets.get(user.id); // Assuming 'id' is the user identifier in your user model
          if (userSocketId) {
            io.to(userSocketId).emit("ev",     {
              'event': 'match started',
              'team': match?.homeTeam?.amharicName  ,
              'image': match?.homeTeam?.logo,
              'type': 'match started',
            }
            
    );
          }
        });





        console.log(`match ${fixtureId} is started --- so stopped checking for 1H. ...`)

                
        clearInterval(checkInterval);
        // Save match with 'matchStartTime'
        const now = new Date();
        kickOfTime = match?.kickOfTime;
        if (kickOfTime === null) {
         
          match.kickOfTime = now.toISOString();
        }
        // await matchSchema.findOneAndUpdate({ id: fixtureId }, match, { upsert: true, new: true });

        // Schedule halftime check
        const halftimeCheckTime = new Date(now.getTime() + 2* oneMinute);
        console.log(`match ${fixtureId} is in break time, so it will be checking it after 2 minutes, was 15 before`)
        agenda.schedule(halftimeCheckTime, `halftime_match_check`, { matchId: fixtureId });
      }
      else{
        agenda.schedule(oneMinuteLater, `halftime_match_check`, { matchId: fixtureId });
      }
    }, oneMinute);

    setTimeout(() => clearInterval(checkInterval), 20 * oneMinute);
  });

  // Define the 'halftime match check' job
  agenda.define('halftime_match_check', async (job) => {
    // Halftime check logic here


    const fixtureId = job.attrs.data.matchId;

    console.log(`checking halftime for match ${fixtureId}`)
    const checkInterval = setInterval(async () => {
      const match = halfTimeMatches.find(match => match.id === fixtureId);
      if (["FT", "PST", "AET", "CANC", "ABD", "AWD", "WO"].includes(match.status.short)) {

        await job.remove();
        clearInterval(checkInterval);
        console.log(`stopped checking halftime for match because it is over ---- ${fixtureId}`)
      }else if(match.status.short === 'HT'){
        clearInterval(checkInterval);
      
        console.log(`match ${fixtureId} is in halftime, so it will be checking it after 2 minutes : it was 15 before`)
        // Schedule halftime check
        const halftimeCheckTime = new Date(now.getTime() + 2 * oneMinute);
        agenda.schedule(halftimeCheckTime, `second_half_match_start_check`, { matchId: fixtureId });
      }
    }, oneMinute);

    setTimeout(() => clearInterval(checkInterval), 30 * oneMinute);
  });




  agenda.define('second_half_match_start_check', async (job) => {
    
    const fixtureId = job.attrs.data.matchId;
    const checkInterval = setInterval(async () => {
      const match = await fetchFixtureByFixtureId(fixtureId);
      if (!match && ["FT", "PST", "AET", "CANC", "ABD", "AWD", "WO"].includes(match.status.short)) {
        clearInterval(checkInterval);
        await job.remove();
      }else if(match.status.short === '2H'){
       
        // match =  await fetchFixtureByFixtureId(fixtureId);
       const now = new Date();
       kickOfTime = match?.secondHalfTime;
       if (kickOfTime === null) {
        
         match.secondHalfTime = now.toISOString();
       }
     
       await matchSchema.findOneAndUpdate({ id: fixtureId }, match, { upsert: true, new: true });
        
         const finalCheckTime = new Date(now.getTime() + 45 * oneMinute);
         agenda.schedule(finalCheckTime,'final match check', { matchId: fixtureId });
         clearInterval(checkInterval);
      }
    }, oneMinute);

    setTimeout(() => clearInterval(checkInterval), 30 * oneMinute);

  })


  // Define the 'final match check' job
  agenda.define('final match check', async (job) => {
    const fixtureId = job.attrs.data.matchId;
    console.log(`checking final match for match ${fixtureId}`)
    const checkInterval = setInterval(async () => {
      const match =  finalTimeMatches.find(match => match.id === fixtureId);
      if (!match && ["FT", "PST", "AET", "CANC", "ABD", "AWD", "WO"].includes(match?.status?.short)) {
        console.log(`stopped checking final match for match because it is over ---- ${fixtureId} should never check again!!!`)
        clearInterval(checkInterval);
        await job.remove();
      } 
    }, oneMinute);

    setTimeout(() => clearInterval(checkInterval), 60 * oneMinute);
  });

  // Define the 'fetch lineup' job
//   agenda.define('fetch line up', async (job) => {
//     const { matchId } = job.attrs.data;
//     // const fixtureId = job.attrs.data.matchId;
//     console.log(job.attrs.data)
//     console.log('fetching lineup for match' , matchId)
//     const match = await matchSchema.findOne({ id: matchId });
//   console.log(match)
//     const lineup = await Lineup.findOne({ fixture: matchId });
//     if(lineup?.response?.length === 2){
//     //do nothing
//     } else if (!["FT", "PST", "AET", "CANC", "ABD", "AWD", "WO"].includes(match.status.short)) {
//       await fetchLineupForMatch(matchId);
//      console.log('first condition --- rescheduled')
//       await job.schedule(new Date(Date.now() + 1000 * 60)).save(); // Reschedule for 5 seconds later
//     } else if (match.status.short === "NS") {
//       console.log('second condition')
//       await fetchLineupForMatch(matchId);
//     }
//     console.log(`no condition is met : ${lineup?.response?.length === 2} ${["FT", "PST", "AET", "CANC", "ABD", "AWD", "WO"].includes(match.status.short)}`)
  
//   });






// Generic job definition
agenda.define('fetch match event', async (job) => {
  const { matchId } = job.attrs.data;
  console.log(`Fetching event for match ID: ${matchId}`);

  try {
    let match = null;
    if (matchId === 0) {
      match = matches.find(match => match.id === matchId);
    }else if(matchId === 1){
        match = secondHalfMatches.find(match => match.id === matchId);
    }else if(matchId === 2){
        match = fullTimeMatches.find(match => match.id === matchId);
    }else{
        match = matches.find(match => match.id === matchId);
    }

    if (match.status.short === 'NS') {
      console.log(`Fetching fixture for match ID: ${matchId}`);
      console.log(`match ${matchId} is not started yet, so it will be checking it after 1 minute`)
      // await fetchFixtureByFixtureId(matchId);
      await job.schedule(new Date(Date.now() + 1000 * 60)).save();
    } else{
        await fetchMatchEvent(matchId , io);
        await job.remove();
    }

     if (!["FT", "PST", "AET", "CANC", "ABD", "AWD", "WO"].includes(match.status.short)) {
        console.log(`match ${matchId} is not finished yet, so it will be checking it after 1 minute`)
      await job.schedule(new Date(Date.now() + 1000 * 60)).save(); // Reschedule for 5 seconds later
    } else {
      await fetchFixtureByFixtureId(matchId);
    }


    const updateMatch = setInterval(async () => {
        console.log(`updating the match ${matchId} every 10 minutes`)
        match = fullTimeMatches.find(match => match.id === matchId);
      if (!match && ["FT", "PST", "AET", "CANC", "ABD", "AWD", "WO"].includes(match.status.short)) {
        clearInterval(updateMatch);
        await job.remove();
      }
    }, 1000 * 60 * 10);


   
  } catch (error) {
    console.error(`Error fetching event for match ID ${matchId}:`, error);
  }
});

}