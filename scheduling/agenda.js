
const  fetchLineupForMatch = require('../fetch/fetch_lineup').fetchLineupForMatch
const fetchMatchEvent = require('../fetch/fetch_event').fetchEventAndEmit
// const io = require("../app")
const matchSchema = require('../schemas/match_schema')
const fetchFixtureByFixtureId = require('../fetch/fetch_fixture')
const Lineup = require('../schemas/lineup_schema')
const fetchTeamsSquad = require('../fetch/fetch_team_squad')
const oneSecond = 1000;
const oneMinute = 60 * oneSecond;
const oneHour = 60 * oneMinute;
const getTodaysMatches = require('../fetch/getTodaysFixtures')
const User = require('../schemas/user_model')
const userSockets = require('./../socket/userSocket')
const  {fetchMatchStatistics}= require("../fetch/fetch_match_statistics")

const { fetchTeamStatistics } = require("../fetch/mirchawoche_team/fetch_team_stat")
const fetchLastFiveMatches = require('../fetch/mirchawoche_team/fetchLastFiveMatches')
module.exports = async function(agenda, io) {


  agenda.define('fetch match statistics', async (job) => {
    const { matchId } = job.attrs.data;
    console.log('Fetching match statistics for match', matchId);
  
    try {
      const match = await matchSchema.findOne({ id: matchId });
  
      // Check if the match has ended
      if (["FT", "PST", "AET", "CANC", "ABD", "AWD", "TBD", "WO", "PEN"].includes(match.status.short)) {
        console.log(`Match ${matchId} has ended or is not scheduled`);
        await job.remove(); // Remove the job if the match has ended
        return;
      }
  
      if(match.status.short === 'NS'){
        console.log(`Match ${matchId} has not started yet`);
        await job.schedule(new Date(Date.now() + 1000 * 60 * 20   )).save(); //edit the code here
        return;
      }else{
          // Fetch match statistics if the match is still ongoing
      await fetchMatchStatistics(matchId);
  
      // Reschedule the job to run again in 20 minutes if the match is still ongoing
      await job.schedule(new Date(Date.now() + 20 * 60 * 1000)).save();
      //console.log('Match statistics fetched, job rescheduled for 20 minutes later');
      }
    } catch (error) {
     // console.error(`Error fetching match statistics for match ${matchId}:`, error);
      // Handle the error as needed
    }
  });
  



  agenda.define('fetch squad', async (job) => {
    const fixtureId = job.attrs.data.matchId;
    try {
      const matchData = await matchSchema.findOne({ id: fixtureId }).populate('homeTeam').populate('awayTeam');
      await fetchTeamsSquad(matchData.homeTeam.id);
      await fetchTeamsSquad(matchData.awayTeam.id);
    } catch (e) {
      console.error(`Error in fetch_squad_id_${fixtureId}:`, e);
    }
  });
  
   


  // Define the 'check match status' job
  agenda.define('check match status', async (job) => {

    



    const fixtureId = job.attrs.data.matchId;
    // let match = job.attrs.data.match;
    const receivedMatch = await matchSchema.findOne({ id: fixtureId }).populate("homeTeam").populate('awayTeam');
   



    const checkInterval = setInterval(async () => {
      let match = await fetchFixtureByFixtureId(fixtureId);
      if(!match){
        match = await matchSchema.findOne({ id: fixtureId });
      }
      //console.log(`match status is ${match.status.short}`)

      if ( ["FT", "PST", "AET", "CANC", "ABD", "AWD", "WO" , "TBD"].includes(match?.status?.short)) {
        console.log('cancelled')
        clearInterval(checkInterval);
        await job.remove();
      } else if (match?.status?.short === "1H") {
    try{
      const idsList = [receivedMatch.homeTeam.id, receivedMatch.awayTeam.id];
      // const interestedUsers = await User.find({
      //   $or: [
      //     { favouriteMatches: { $elemMatch: { $eq: fixtureId } } },
      //     { favouriteTeams: { $elemMatch: { $in: idsList } } }
      //   ]
      // });
      const interestedUsers = await User.aggregate([
        { 
          $match: {
            $or: [
              { favouriteMatches: { $elemMatch: { $eq: fixtureId } } },
              { favouriteTeams: { $elemMatch: { $in: idsList } } }
            ]
          }
        },
        {
          $group: {
            _id: "$_id",
            user: { $first: "$$ROOT" }
          }
        },
        {
          $replaceRoot: { newRoot: "$user" }
        }
      ]);
      


      const eventObj =   {
        'event': 'ms',
        'event-am': "ጨዋታው ተጀምሯል",
        'event-ti': "ጸወታ ተጀሚሩ",
        'event-so': "Ciyaarta ayaa bilaabatay",
        'event-or': "Taphi eegale",
        'event-en': "Match started" , 

        'event-am'  : 'ጨዋታው ተጀምሯል' , 
        'event-si' : 'Ciyaarta ayaa bilaabatay' ,
        'event-or'  : 'Taphi eegale' , 
        'event-tr' : 'ጸወታ ተጀሚሩ' ,


        'team': `${receivedMatch.homeTeam.EnglishName} - ${receivedMatch.awayTeam.EnglishName}`  ,
        'am' : `${receivedMatch.homeTeam.AmharicName} - ${receivedMatch.awayTeam.AmharicName}`  ,
        'tr' : `${receivedMatch.homeTeam.AmharicName} - ${receivedMatch.awayTeam.AmharicName}`  ,
        'si' : `${receivedMatch.homeTeam.SomaliName} - ${receivedMatch.awayTeam.SomaliName}`  ,
        'or' : `${receivedMatch.homeTeam.OromoName} - ${receivedMatch.awayTeam.OromoName}`  ,

        'image': "",
        'type': 'ms',
        'fixtureId' : fixtureId
      }


      const notificationPromises = interestedUsers.map(user => {
        return new Promise((resolve, reject) => {
          const userSocketId = userSockets.get(user.id);
          if (userSocketId) {
            io.to(userSocketId).emit("ev", eventObj);
            resolve(`Notification sent to user ${user.id}`);
          } else {
            resolve(`No socket ID found for user ${user.id}`);
          }
        });
      });
    
      const results = await Promise.all(notificationPromises);


    }catch(e){
      console.log(`Error in check_match_status_id_${fixtureId}:`, e);
    }






        
        clearInterval(checkInterval);
        // Save match with 'matchStartTime'
        const now = new Date();
        kickOfTime = match?.kickOfTime;
        if (kickOfTime === null) {
         
          match.kickOfTime = now.toISOString();
        }
        await matchSchema.findOneAndUpdate({ id: fixtureId }, match, { upsert: true, new: true });

        // Schedule halftime check
        const halftimeCheckTime = new Date(now.getTime() + 45 * oneMinute );
        agenda.schedule(halftimeCheckTime, `halftime_match_check`, { matchId: fixtureId  , match : match , receivedMatch : receivedMatch});
      }else if(match?.status?.short === "HT" || match?.status?.short === "BT"){  
        // make the current time in string format
        const now = new Date();
        current_time = now.toISOString();

         agenda.schedule(current_time, `second_half_match_start_check`, { matchId: fixtureId  , receivedMatch : receivedMatch});
     
      }else if(match?.status?.short === "2H" ){
        // make the current time in string format
        const now = new Date();
        current_time = now.toISOString();
        const existingSecondHalfTime = match?.secondHalfTime;
        if (existingSecondHalfTime === null) {
          try{
            match.secondHalfTime = current_time;
            
            await matchSchema.findOneAndUpdate({ id: fixtureId }, match, { upsert: true, new: true })
        }catch(e){
          console.log(`Error in check_match_status_id_${fixtureId}:`, e);
        }
        }
        agenda.schedule(current_time, `final match check`, { matchId: fixtureId  , receivedMatch : receivedMatch});
      }
    }, oneSecond * 10);
 
    setTimeout(() => clearInterval(checkInterval), 20 * oneMinute);
  }); 

  // Define the 'halftime match check' job
  agenda.define('halftime_match_check', async (job) => {
    // Halftime check logic here


    const fixtureId = job.attrs.data.matchId;
    const receivedMatch = await matchSchema.findOne({ id: fixtureId }).populate("homeTeam").populate('awayTeam');
    const checkInterval = setInterval(async () =>{
      console.log(`Checking halftime status for match ID ${fixtureId}`);
      let match = await fetchFixtureByFixtureId(fixtureId); 
      if(!match){
        match = await matchSchema.findOne({ id: fixtureId });
      }
      // match.status.short = "HT";

   
      if (["FT", "PST", "AET", "CANC", "ABD", "AWD", "WO" , "TBD"].includes(match?.status?.short)) {
        console.log('match is cancelled')
        await job.remove();
        clearInterval(checkInterval);
      }else if(match.status.short === 'HT'){
        console.log('scheduling the next task')
        clearInterval(checkInterval);
      
        const now = new Date();
        const idsList = [receivedMatch.homeTeam.id, receivedMatch.awayTeam.id];
     
        const interestedUsers = await User.aggregate([
          { 
            $match: {
              $or: [
                { favouriteMatches: { $elemMatch: { $eq: fixtureId } } },
                { favouriteTeams: { $elemMatch: { $in: idsList } } }
              ]
            }
          },
          {
            $group: {
              _id: "$_id",
              user: { $first: "$$ROOT" }
            }
          },
          {
            $replaceRoot: { newRoot: "$user" }
          }
        ]);
        
        const eventObject  = {
          'event': 'bt',
          'event-am': "እረፍት ሰዓት",
          'event-ti': "ናይ ዕረፍቲ ግዜ",
          'event-so': "Wakhtiga nasashada",
          'event-or': "Yeroo boqonnaa",
          'event-en': "Break time" ,
          'team': receivedMatch.homeTeam.EnglishName + ' - ' + receivedMatch.awayTeam.EnglishName,
          'am' : receivedMatch.homeTeam.AmharicName + ' - ' + receivedMatch.awayTeam.AmharicName,
          'tr' : receivedMatch.homeTeam.AmharicName + ' - ' + receivedMatch.awayTeam.AmharicName,
          'si' : receivedMatch.homeTeam.SomaliName + ' - ' + receivedMatch.awayTeam.SomaliName,
          'or' : receivedMatch.homeTeam.OromoName + ' - ' + receivedMatch.awayTeam.OromoName,
          'image': "",
          'type':'bt', 
          'fixtureId' : fixtureId
        }

        const notificationPromises = interestedUsers.map(user => {
          return new Promise((resolve, reject) => {
            const userSocketId = userSockets.get(user.id);
            if (userSocketId) {
              io.to(userSocketId).emit("ev", eventObject);
              resolve(`Notification sent to user ${user.id}`);
            } else {
              resolve(`No socket ID found for user ${user.id}`);
            }
          });
        });
      
       await Promise.all(notificationPromises);
      
        // Schedule halftime check
        const halftimeCheckTime = new Date(now.getTime() + 15 * oneMinute );
        //remove update match
        agenda.schedule(halftimeCheckTime, `second_half_match_start_check`, { matchId: fixtureId  , receivedMatch : receivedMatch});
      }
    }, oneMinute);

    setTimeout(() => clearInterval(checkInterval), 30 * oneMinute);
  });




  agenda.define('second_half_match_start_check', async (job) => {
    
    const fixtureId = job.attrs.data.matchId;
    const receivedMatch = await matchSchema.findOne({ id: fixtureId }).populate("homeTeam").populate('awayTeam');
    const checkInterval = setInterval(async () => {
   
      let match = await fetchFixtureByFixtureId(fixtureId);
      if(!match){
        match = await matchSchema.findOne({ id: fixtureId });
      }
      console.log(`Checking second half status for match ID -- ${fixtureId}`);
    
      if(match === null){
        console.log('match is null')
        await job.remove();
        clearInterval(checkInterval);
      }
      
      if (["FT", "PST", "AET", "CANC", "ABD", "AWD", "WO" , "TBD"].includes(match.status.short)) {
        console.log('match is cleared in second half')
        clearInterval(checkInterval);
        await job.remove();
      }else if(match.status.short === '2H'){
       
        // match =  await fetchFixtureByFixtureId(fixtureId);
       const now = new Date();
       kickOfTime = match.secondHalfTime;
       if (kickOfTime === null) {
        
         match.secondHalfTime = now.toISOString();
       }
     
       await matchSchema.findOneAndUpdate({ id: fixtureId }, match, { upsert: true, new: true });
        
         const finalCheckTime = new Date(now.getTime() + 45 * oneMinute );
         console.log('scheduling the final check')



         const idsList = [receivedMatch.homeTeam.id, receivedMatch.awayTeam.id];
        //  const interestedUsers = await User.find({
        //    $or: [
        //      { favouriteMatches: { $elemMatch: { $eq: fixtureId } } },
        //      { favouriteTeams: { $elemMatch: { $in: idsList } } }
        //    ]
        //  });

        const homeTeamGoal = match.goals.home != null ? match.goals.home : "";
        const awayTeamGoal = match.goals.away != null ? match.goals.away : "";
        const interestedUsers = await User.aggregate([
          { 
            $match: {
              $or: [
                { favouriteMatches: { $elemMatch: { $eq: fixtureId } } },
                { favouriteTeams: { $elemMatch: { $in: idsList } } }
              ]
            }
          },
          {
            $group: {
              _id: "$_id",
              user: { $first: "$$ROOT" }
            }
          },
          {
            $replaceRoot: { newRoot: "$user" }
          }
        ]);
        
 
 
         interestedUsers.forEach(user => {
           const userSocketId = userSockets.get(user.id); // Assuming 'id' is the user identifier in your user model
           if (userSocketId) {
             io.to(userSocketId).emit("ev",     {
               'event': '2h',
               'event-am': "ሁለተኛ አጋማሽ ተጀመረ",
                'event-ti': "ካልኣይ እብረ ተጀሚሩ",
                'event-so': "Qeybtii labaad ayaa bilaabatay",
                'event-or': "Walakkaan lammaffaa jalqabe",
                'event-en': "Second half begun",
               'team': receivedMatch.homeTeam.EnglishName + ` ${homeTeamGoal} - ${awayTeamGoal} ` + receivedMatch.awayTeam.EnglishName,
               'am' : receivedMatch.homeTeam.AmharicName + ` ${homeTeamGoal} - ${awayTeamGoal} ` + receivedMatch.awayTeam.AmharicName,
               'tr' : receivedMatch.homeTeam.AmharicName + ` ${homeTeamGoal} - ${awayTeamGoal} ` + receivedMatch.awayTeam.AmharicName,
               'si' : receivedMatch.homeTeam.SomaliName + ` ${homeTeamGoal} - ${awayTeamGoal} ` + receivedMatch.awayTeam.SomaliName,
               'or' : receivedMatch.homeTeam.OromoName + ` ${homeTeamGoal} - ${awayTeamGoal} ` + receivedMatch.awayTeam.OromoName,
               'image': "",
               'type':'2h', 
               'fixtureId' : fixtureId
             }
             
     )}});   
       
         agenda.schedule(finalCheckTime,'final match check', { matchId: fixtureId , receivedMatch : receivedMatch });

         clearInterval(checkInterval);
      }
    }, oneMinute  );

    setTimeout(() => clearInterval(checkInterval), 45 * oneMinute);

  })


  // Define the 'final match check' job
  agenda.define('final match check', async (job) => {
    const fixtureId = job.attrs.data.matchId;
    console.log(`Checking final status for match ID ${fixtureId}`);
  
    const checkInterval = setInterval(async () => {
    try{
      const receivedMatch = await matchSchema.findOne({ id: fixtureId }).populate("homeTeam").populate('awayTeam');
     
  
      if(receivedMatch === null){
        console.log('match is null')
        // await job.remove();
        // clearInterval(checkInterval);
      }
     else if (receivedMatch?.status?.short === "FT") {
      
      await job.remove();
      clearInterval(checkInterval);
      const idsList = [receivedMatch.homeTeam.id, receivedMatch.awayTeam.id];

      const homeTeamGoal = receivedMatch.goals.home != null ? receivedMatch.goals.home : "";
      const awayTeamGoal = receivedMatch.goals.away != null ? receivedMatch.goals.away : "";
      // const interestedUsers = await User.find({
      //   $or: [
      //     { favouriteMatches: { $elemMatch: { $eq: fixtureId } } },
      //     { favouriteTeams: { $elemMatch: { $in: idsList } } }
      //   ]
      // });
      const interestedUsers = await User.aggregate([
        { 
          $match: {
            $or: [
              { favouriteMatches: { $elemMatch: { $eq: fixtureId } } },
              { favouriteTeams: { $elemMatch: { $in: idsList } } }
            ]
          }
        },
        {
          $group: {
            _id: "$_id",
            user: { $first: "$$ROOT" }
          }
        },
        {
          $replaceRoot: { newRoot: "$user" }
        }
      ]);
      
      
      await fetchMatchEvent(fixtureId , io ,receivedMatch.homeTeam.id , receivedMatch.awayTeam.id);
      await fetchMatchStatistics(fixtureId);
      const eventObject  =   {
        'event': 'ft',
        'event-am': "ጨዋታው ተጠናቋል",
        'event-ti': "ጸወታ ተዛዚሙ",
        'event-so': "Ciyaartu way dhamaatay",
        'event-or': "Taphi xumurame",
        'event-en': "Match ended",
        'team': receivedMatch.homeTeam.EnglishName +` ${homeTeamGoal} - ${awayTeamGoal} ` + receivedMatch.awayTeam.EnglishName,
        'am' : receivedMatch.homeTeam.AmharicName + ` ${homeTeamGoal} - ${awayTeamGoal} ` + receivedMatch.awayTeam.AmharicName,
        'tr' : receivedMatch.homeTeam.AmharicName + ` ${homeTeamGoal} - ${awayTeamGoal} ` + receivedMatch.awayTeam.AmharicName,
        'si' : receivedMatch.homeTeam.SomaliName + ` ${homeTeamGoal} - ${awayTeamGoal} ` + receivedMatch.awayTeam.SomaliName,
        'or' : receivedMatch.homeTeam.OromoName + ` ${homeTeamGoal} - ${awayTeamGoal} ` + receivedMatch.awayTeam.OromoName,
        'image': "",
        'type':'ft', 
        'fixtureId' : fixtureId
      }
      const notificationPromises = interestedUsers.map(user => {
        return new Promise((resolve, reject) => {
          const userSocketId = userSockets.get(user.id);
          if (userSocketId) {
            io.to(userSocketId).emit("ev", eventObject);
            resolve(`Notification sent to user ${user.id}`);
          } else {
            resolve(`No socket ID found for user ${user.id}`);
          }
        });
      });
    
       await Promise.all(notificationPromises);


      return ;
    
     }

     else if ( ["FT", "PST", "AET", "CANC", "ABD", "AWD", "TBD" ,  "WO" ,"TBD" , "PEN"].includes(receivedMatch?.status?.short)) {
        console.log(`final match check has removed the job for match ${fixtureId} `)

        await fetchMatchStatistics(fixtureId);

        await fetchTeamStatistics(2023,  receivedMatch?.homeTeam?.id , receivedMatch?.league?.id);
        await fetchTeamStatistics(2023  , receivedMatch?.awayTeam?.id ,  receivedMatch?.league?.id);
        await fetchLastFiveMatches(receivedMatch?.homeTeam?.id);
        await fetchLastFiveMatches(receivedMatch?.awayTeam?.id);
        await job.remove();
        clearInterval(checkInterval);
        return ;
      }else{
        //console.log(`final match check is fetching the fixture for match ${fixtureId}`)
        await fetchFixtureByFixtureId(fixtureId);
      } 
    }catch(e){
      console.log(`Error in final_match_check_id_${fixtureId}:`, e);
    }
    }, oneMinute );

    setTimeout(() => clearInterval(checkInterval),3 * 60 * oneMinute);
  });

  // Define the 'fetch lineup' job
  agenda.define('fetch line up', async (job) => {
    const { matchId } = job.attrs.data;
    // const fixtureId = job.attrs.data.matchId;
    console.log(job.attrs.data)
    console.log('fetching lineup for match' , matchId)
    const match = await matchSchema.findOne({ id: matchId });

  
    // remove the code above this
 
    const lineup = await Lineup.findOne({ fixture: matchId });
    const receivedMatch = await matchSchema.findOne({ id: matchId }).populate("homeTeam").populate('awayTeam');
    const homeTeamId = receivedMatch.homeTeam.id;
    const awayTeamId = receivedMatch.awayTeam.id;
    
    if(lineup?.response?.length === 2 || ["FT", "PST", "AET", "CANC", "ABD", "AWD", "TBD" ,  "WO" , "PEN"].includes(match.status.short)){
    //do nothing
    console.log(`line up for ${matchId} is already fetched or match is finished}`)
   await job.remove();
    } else if (!["FT", "PST", "AET", "CANC", "ABD", "AWD", "TBD" ,  "WO" , "PEN"].includes(match.status.short)) {

      await fetchLineupForMatch(matchId , io  , homeTeamId , awayTeamId);
     console.log('first condition --- rescheduled')
      await job.schedule(new Date(Date.now() + 3 * 1000 * 60)).save(); // Reschedule for 3 minutes later
    } else if (match.status.short === "NS") {

      console.log('second condition')
      await fetchLineupForMatch(matchId , io  , homeTeamId , awayTeamId);
    }
    //console.log(`no condition is met : ${lineup?.response?.length === 2} ${["FT", "PST", "AET", "CANC", "ABD", "AWD", "WO", "PEN"].includes(match.status.short)}`)
  
  });






// Generic job definition
agenda.define('fetch match event', async (job) => { 
  const { matchId  } = job.attrs.data;
  console.log(`Fetching event for match ID: ${matchId}`);
  const attrMatch = await matchSchema.findOne({id : matchId}).populate("homeTeam").populate('awayTeam')
  // const homeTeamId = job.attrs.data.homeTeamId;
  // const awayTeamId = job.attrs.data.awayTeamId;
  const homeTeamId = attrMatch.homeTeam.id;
  const awayTeamId = attrMatch.awayTeam.id;
  // await fetchMatchEvent(matchId , io , homeTeamId , awayTeamId);
  try {
    let match = await matchSchema.findOne({ id: matchId });
    if(match === null){
     match = job.attrs.data.match;
    }
    if ( ["FT", "PST", "AET", "CANC", "ABD", "AWD", "TBD" ,  "WO" , "PEN" , "TBD"].includes(match?.status?.short)) {
      //console.log('removed the fetching event job') 
      await job.remove();
    }else  if (match.status.short === 'NS') {
      console.log('rescheduled the fetching event job')
      await job.schedule(new Date(Date.now() + 1000 * 60 )).save(); //edit the code here
    }
    else  if (!["FT", "PST", "AET",  "CANC", "ABD", "AWD", "TBD" ,  "WO" , "PEN"].includes(match.status.short)) {
      await fetchMatchEvent(matchId , io , homeTeamId , awayTeamId);
      await job.schedule(new Date(Date.now() +  1000 * 60)).save(); //edit here too
    }   } catch (error) {
    console.error(`Error fetching event for match ID ${matchId}:`, error);
  }
});



agenda.define('fifteen minutes left', async (job) => {
  const { fixtureId  } = job.attrs.data;
  const receivedMatch = await matchSchema.findOne({ id: fixtureId }).populate("homeTeam").populate('awayTeam');
  //console.log(`fifteen minutes left for match ID: ${fixtureId}`);
  try{
   
    if(receivedMatch === null){
      await job.remove(); 
    }
    







    const idsList = [receivedMatch.homeTeam.id, receivedMatch.awayTeam.id];
    // const interestedUsers = await User.find({
    //   $or: [
    //     { favouriteMatches: { $elemMatch: { $eq: fixtureId } } },
    //     { favouriteTeams: { $elemMatch: { $in: idsList } } }
    //   ]
    // });

    const interestedUsers = await User.aggregate([
      { 
        $match: {
          $or: [
            { favouriteMatches: { $elemMatch: { $eq: fixtureId } } },
            { favouriteTeams: { $elemMatch: { $in: idsList } } }
          ]
        }
      },
      {
        $group: {
          _id: "$_id",
          user: { $first: "$$ROOT" }
        }
      },
      {
        $replaceRoot: { newRoot: "$user" }
      }
    ]);
    
    console.log(`removing job`)
   
    await job.remove();
console.log(`sending notification`)  
    const eventObject =  {
      'event': 'fifteen minutes left',
      'event-am': "🕛 15 ደቂቃ ቀረው",
      'event-ti': "🕛 15 ደቓይቕ ተሪፍዎ ኣሎ።",
      'event-so': "🕛 15 daqiiqo ayaa hadhay",
      'event-or': "🕛 Daqiiqaa 15tu hafe",   
      'event-en': "🕛 15 minutes left" ,
      'team': receivedMatch.homeTeam.EnglishName + ' - ' + receivedMatch.awayTeam.EnglishName,
      'am' : receivedMatch.homeTeam.AmharicName + ' - ' + receivedMatch.awayTeam.AmharicName,
      'tr' : receivedMatch.homeTeam.AmharicName + ' - ' + receivedMatch.awayTeam.AmharicName,
      'si' : receivedMatch.homeTeam.SomaliName + ' - ' + receivedMatch.awayTeam.SomaliName,
      'or' : receivedMatch.homeTeam.OromoName + ' - ' + receivedMatch.awayTeam.OromoName,
      'image': "",  
      'type':'fifteen', 
      'fixtureId' : fixtureId
    }
    const notificationPromises = interestedUsers.map(user => {
      return new Promise((resolve, reject) => {
        const userSocketId = userSockets.get(user.id);
        if (userSocketId) {
          io.to(userSocketId).emit("ev", eventObject);
          resolve(`Notification sent to user ${user.id}`);
        } else {
          resolve(`No socket ID found for user ${user.id}`);
        }
      });
    });
  
    const results = await Promise.all(notificationPromises);
  
console.log(`sent!`)
  }catch(e){
    console.log(`error caught when trying to show 15 minutes left for match ${fixtureId} ${e}`)
  }
  
});

}