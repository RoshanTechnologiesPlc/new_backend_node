
const { default: axios } = require("axios");
const userSockets = require("../socket/userSocket")
const  EventData = require("../schemas/event_schema")
const Match = require("../schemas/match_schema");
const User = require("../schemas/user_model");
const fetchMatchStatistics  = require("./fetch_match_statistics")
const PlayerName = require("../schemas/player_names")
const TeamData = require("../schemas/team_data")
const getTodaysMatches = require("./getTodaysFixtures")
const fetchFixtureByFixtureId = require("./fetch_fixture")
require('dotenv').config()
 
async function fetchEvent(){
  const leagueIds = [39, 2, 140 , 307]

  const currentDate = new Date();


  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; 
  const day = currentDate.getDate();
  
  
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
  
  try {
    const matches = await Match.find({ 
      'league.id': { $in: leagueIds },
      dateOnly: formattedDate} , 
      {
        id : true , 
        _id : false
      }
      ).exec();
    // //console.log(matches)
    
for(let i = 0 ; i < matches.length ; i ++){
  
  await fetchEventt(matches["id"])

}
  } catch (error) {
    //console.error('Error retrieving matches by date:', error);
    throw error;
  }
  




}



async function fetchEventt(fixtureId ) {
    const config = {
      method: 'GET',
      url: `${process.env.API_FOOTBALL_URL}/fixtures/events`,
      params: { fixture: `${fixtureId}` },
      headers: {
        'x-rapidapi-key': process.env.API_FOOTBALL_kEY,
        "x-rapidapi-host": "v3.football.api-sports.io"
      }
    };

    const response = await axios(config)
  //console.log(response.data.response)
    try {
      let eventData = response.data.response;

      if (eventData.length === 0) {
          return;
      }

    const events =   await EventData.findOne({
        fixture : fixtureId
      })
    console.log(events  )

    eventData = await setPlayers(eventData)
 await   EventData.findOneAndUpdate({fixture : fixtureId} , {fixture : fixtureId , response : eventData} ,{upsert : true})
console.log('inserted the event data')

 console.log("inserted")
       if (!events && events.response.length == 0) {
        return {
          value : true, 
          event : eventData[eventData.length -1]["type"] ,
          team : eventData[eventData.length -1]["team"]["name"]
        }
        io.emit("Event" , eventData[eventData.length -1]["type"] )
      }else if(!events && events.response.length < eventData.length){
        return {
          value : true, 
          event : eventData[eventData.length -1]["type"] ,  
          team : eventData[eventData.length -1]["team"]["name"]
        }
      }
      else{
        return {
          value : true, 
          event : eventData[eventData.length -1]["type"] , 
          team : eventData[eventData.length -1]["team"]["name"]
        } 
      } 

     
    } catch (error) {
      console.error("Error fetching and inserting data: ", error);
    }
  }


  async function fetchEventAndEmit(fixtureId  , io , homeTeamId , awayTeamId) {
    console.log("fetching event")
    const config = {
      method: 'GET',
      url: `${process.env.API_FOOTBALL_URL}/fixtures/events`,
      params: { fixture: `${fixtureId}` },
      headers: { 
        'x-rapidapi-key': process.env.API_FOOTBALL_kEY,
        "x-rapidapi-host": "v3.football.api-sports.io"
      }
    };
    const idsList = [homeTeamId , awayTeamId]

    try {
      const response = await axios(config)
    
      let eventData = response.data.response;
      console.log(`event data is ...`)
      // console.log(eventData)    
      if (eventData.length === 0) {
        console.log('no event data')
          return;
      }
console.log(`fixture id is .... ${fixtureId}`)
    const events =   await EventData.findOne({
        fixture : fixtureId
      })
    // console.log(events  )
      console.log(idsList)
    eventData = await setPlayers(eventData)
    const interestedUsers = await User.find({
      $or: [
        { favouriteMatches: { $elemMatch: { $eq: fixtureId } } },
        { favouriteTeams: { $elemMatch: { $in: idsList } } }
      ]
    });

       if (!events || events.length == 0) {

      try{
        const playerIdNumber = +eventData[eventData.length - 1]["player"]["id"]
     const teamNames = await TeamData.findOne({id : eventData[eventData.length - 1]["team"]["id"]})
   


     const playerNames = await PlayerName.findOne({ id: playerIdNumber });
const defaultName = eventData[eventData.length - 1]["player"]["name"];

const amharicName = playerNames && playerNames.amharicName != null ? playerNames.amharicName : defaultName;
const englishName = playerNames && playerNames.englishName != null ? playerNames.englishName : defaultName;
const oromoName = playerNames && playerNames.oromoName != null ? playerNames.oromoName : defaultName;
const somaliName = playerNames && playerNames.somaliName != null ? playerNames.somaliName : defaultName;


  const elapsedTime = eventData[eventData.length - 1]["time"]["elapsed"]
  const eventTime = eventData[eventData.length - 1]["time"];
const extraTime = eventTime["elapsed"] != null && eventTime["extra"] != null
    ? `+${eventTime["extra"]}`
    : '';

  // console.log(interestedUsers)
        //   interestedUsers.forEach(user => {
        //   const userSocketId = userSockets.get(user.id); // Assuming 'id' is the user identifier in your user model
        //   if (userSocketId) {
        //     io.to(userSocketId).emit("ev",     {
        //       'event': eventData ? eventData[eventData.length - 1]["team"]["name"] : "",
        //       "event-am" : teamNames ? teamNames.AmharicName : "",
        //       "event-en" : teamNames ? teamNames.EnglishName : "",
        //       "event-or" : teamNames ? teamNames.OromoName : "",
        //       "event-so" : teamNames ? teamNames.SomaliName : "",
        //       'event-ti' : teamNames ? teamNames.AmharicName : "",
              

        //       'team': eventData ? `${eventData[eventData.length - 1]["player"]["name"]}` : "",
        //       'am' : `${amharicName} ${elapsedTime}' ${extraTime}` ,
        //       'en' : `${englishName} ${elapsedTime}' ${extraTime}`,
        //       'or' : `${oromoName} ${elapsedTime}' ${extraTime}`,
        //       'so' : `${somaliName} ${elapsedTime}' ${extraTime}`,
        //       'ti' : `${amharicName} ${elapsedTime}' ${extraTime}`,
        //       'image': eventData && eventData[eventData.length - 1]["player"]["id"] != null 
        //                ? `https://media-4.api-sports.io/football/players/${eventData[eventData.length - 1]['player']['id']}.png` 
        //                : eventData ? eventData[eventData.length - 1]["team"]["name"] : "",
        //       'type': eventData ? eventData[eventData.length - 1]["type"] : "" , 
        //       'fixtureId' : fixtureId
        //     }  );
        //   } 
        // });


        try {
        
            await fetchFixtureByFixtureId(fixtureId)
         
          const notificationPromises = interestedUsers.map(user => {
            return new Promise(async (resolve, reject) => {
              const userSocketId = userSockets.get(user.id);
              if (!userSocketId) {
                console.log(`No socket ID found for user ${user.id}`);
                resolve();
                return;
              }
        
              const notificationPayload = {
                'event': eventData ? eventData[eventData.length - 1]["team"]["name"] : "",
                "event-am": teamNames ? teamNames.AmharicName : "",
                "event-en": teamNames ? teamNames.EnglishName : "",
                "event-or": teamNames ? teamNames.OromoName : "",
                "event-so": teamNames ? teamNames.SomaliName : "",
                'event-ti': teamNames ? teamNames.AmharicName : "",
                'team': eventData ? `${eventData[eventData.length - 1]["player"]["name"]}` : "",
                'am': `${amharicName} ${elapsedTime}' ${extraTime}`,
                'en': `${englishName} ${elapsedTime}' ${extraTime}`,
                'or': `${oromoName} ${elapsedTime}' ${extraTime}`,
                'so': `${somaliName} ${elapsedTime}' ${extraTime}`,
                'ti': `${amharicName} ${elapsedTime}' ${extraTime}`,
                'image': eventData && eventData[eventData.length - 1]["player"]["id"] != null 
                         ? `https://media-4.api-sports.io/football/players/${eventData[eventData.length - 1]['player']['id']}.png` 
                         : eventData ? eventData[eventData.length - 1]["team"]["name"] : "",
                'type': eventData ? eventData[eventData.length - 1]["type"] : "",
                'fixtureId': fixtureId
              };
        
              io.to(userSocketId).emit("ev", notificationPayload);
              resolve(`Notification sent to user ${user.id}`);
            });
          });
        
          const results = await Promise.all(notificationPromises);
          console.log("All notifications sent. Results:", results);
        } catch (error) {
          console.error("Error in sending notifications:", error);
        }
        
console.log("sent notification")
  }catch(e){

    console.log(`error happeneed while sending notification ${e}` )
     } 
        
      }else  if(events.response.length < eventData.length && eventData[eventData.length - 1]["detail"] != 'Yellow Card' ){




   
          await fetchFixtureByFixtureId(fixtureId)
         
        const playerIdNumber = eventData[eventData.length - 1]["player"]["id"] 

        const elapsedTime = eventData[eventData.length - 1]["time"]["elapsed"]

        const teamNames = await TeamData.findOne({id : eventData[eventData.length - 1]["team"]["id"]})
        const playerNames = await PlayerName.findOne({ id: playerIdNumber });
        const defaultName = eventData[eventData.length - 1]["player"]["name"];
        
        const amharicName = playerNames && playerNames.amharicName != null ? playerNames.amharicName : defaultName;
        const englishName = playerNames && playerNames.englishName != null ? playerNames.englishName : defaultName;
        const oromoName = playerNames && playerNames.oromoName != null ? playerNames.oromoName : defaultName;
        const somaliName = playerNames && playerNames.somaliName != null ? playerNames.somaliName : defaultName;
        
        const eventTime = eventData[eventData.length - 1]["time"];
        const extraTime = eventTime["elapsed"] != null && eventTime["extra"] != null
            ? `+${eventTime["extra"]}`
            : '';
        
        const  obj  =     {
          'event-am': teamNames ? teamNames.AmharicName : "",
          'event-en': teamNames ? teamNames.EnglishName : "",
          'event-or': teamNames ? teamNames.OromoName : "",
          'event-so': teamNames ? teamNames.SomaliName : "",
          'event-ti': teamNames ? teamNames.AmharicName : "",
          'event': eventData ? eventData[eventData.length - 1]["team"]["name"] : "",


          'am' : `${elapsedTime}' ${extraTime} ${amharicName}` ,
          'en' : `${elapsedTime}' ${extraTime} ${englishName} `,
          'or' : `${elapsedTime}' ${extraTime} ${oromoName}`,
          'so' : `${elapsedTime}' ${extraTime} ${somaliName}`,
          'ti' : `${elapsedTime}' ${extraTime} ${amharicName}`,

          'team': eventData ? eventData[eventData.length - 1]["player"]["name"] : "",
          'image': eventData && eventData[eventData.length - 1]["player"]["id"] != null 
                   ? `https://media-4.api-sports.io/football/players/${eventData[eventData.length - 1]['player']['id']}.png` 
                   : eventData ? eventData[eventData.length - 1]["team"]["name"] : "",
          'type': eventData ? eventData[eventData.length - 1]["type"] : "" , 
          'fixtureId' : fixtureId
        }
        // interestedUsers.forEach(user => {
        //   const userSocketId = userSockets.get(user.id); // Assuming 'id' is the user identifier in your user model
        //   if (userSocketId) {
        //     io.to(userSocketId).emit("ev",  obj);
        //   }
        // });


        try {
          const notificationPromises = interestedUsers.map(user => {
            return new Promise((resolve, reject) => {
              const userSocketId = userSockets.get(user.id);
              if (userSocketId) {
                io.to(userSocketId).emit("ev", obj);
                resolve(`Notification sent to user ${user.id}`);
              } else {
                resolve(`No socket ID found for user ${user.id}`);
              }
            });
          });
        
          const results = await Promise.all(notificationPromises);
          console.log("All notifications sent. Results:", results);
        } catch (error) {
          console.error("Error in sending notifications:", error);
        }
        
     
      
      }
 

      await   EventData.findOneAndUpdate({fixture : fixtureId} , {fixture : fixtureId , response : eventData} ,{upsert : true})
     
    } catch (error) {
      console.error("Error fetching and inserting data: ", error);
    }
  }


 var unfetchedLeagues = []
async function lastLeagueEventsFetch(leagueId){
const today = new Date(); // Create a new Date object representing the current date and time
const year = today.getFullYear(); // Get the current year as a 4-digit number
const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Get the current month (0-11) and format it as a 2-digit string
const day = today.getDate().toString().padStart(2, '0'); // Get the current day of the month and format it as a 2-digit string

// Combine the components to create the date string in the format "YYYY-MM-DD"
const dateString = `${year}-${month}-${day}`;
  try{
    const fixtures =  await Match.find({"league.id" : leagueId, "league.season" : 2023 ,  "dateOnly": dateString} ,
    // new Date().toISOString()
    //  { $lt: new Date().toISOString()  }

   {"teams.home.name" : 1 , "teams.away.name"   : 1, _id : 0 , id : 1}).sort({dateOnly: -1}).limit(100)
     
     
    
    for(let i = 0 ; i < fixtures.length ; i ++){
      //console.log("updating .......")
      try{
        await fetchEventt(fixtures[i]["id"])
        await fetchMatchStatistics(fixtures[i]["id"])
      }catch(e){
        unfetchedLeagues.push(fixtures[i]["id"])
        //console.log(e)


      }}

      //console.log(unfetchedLeagues)
  }catch(e){
    //console.log(e)
  }

} 



async function fetchTodaysEvents(){
  const fixtures = await getTodaysMatches()

  if(fixtures){
    for(fixture of fixtures){
      result =   await fetchEventt(fixture["id"])
    //console.log(result)
    }
  }
}
  

async function setPlayers(playersList){

 for(let i = 0 ; i < playersList.length ; i ++){

    const player = playersList[i]["player"]
    const assist = playersList[i]["assist"]

    if(player['id'] != null){
      const playerData = await PlayerName.findOne({ id: player['id'] });
      if(playerData != null){
        playersList[i]["player"]["amharicName"] = playerData.amharicName
        playersList[i]["player"]["englishName"] = playerData.englishName
        playersList[i]["player"]["oromoName"] = playerData.oromoName
        playersList[i]["player"]["somaliName"] = playerData.somaliName
       
      }
    }

    if(assist['id'] != null){
      const assistData = await PlayerName.findOne({ id: assist['id'] });
      if(assistData != null){
   
        playersList[i]["assist"]["amharicName"] =  assistData.amharicName
        playersList[i]["assist"]["englishName"] =  assistData.englishName
        playersList[i]["assist"]["oromoName"] = assistData.oromoName
        playersList[i]["assist"]["somaliName"] = assistData.somaliName
      }else{

      }
    }
  }
  return playersList
}
  module.exports = {fetchEvent , fetchEventt , lastLeagueEventsFetch,  fetchTodaysEvents , fetchEventAndEmit};