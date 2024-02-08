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


async function fetchEventAndEmit(fixtureId, io, homeTeamId, awayTeamId) {
    console.log("fetching event");

    const config = {
        method: 'GET',
        url: `${process.env.API_FOOTBALL_URL}/fixtures/events`,
        params: { fixture: `${fixtureId}` },
        headers: { 
            'x-rapidapi-key': process.env.API_FOOTBALL_kEY,
            "x-rapidapi-host": "v3.football.api-sports.io"
        }
    };

    const idsList = [homeTeamId, awayTeamId];

    try {
        const eventData = await fetchEventData(config);
        if (!eventData) {
            console.log('no event data');
            return;
        }

        console.log(`fixture id is .... ${fixtureId}`);
        const events = await fetchExistingEvents(fixtureId);
        const interestedUsers = await findInterestedUsers(idsList, fixtureId);

        await processAndNotifyUsers(eventData, events, interestedUsers, fixtureId, io);
        await updateEventData(fixtureId, eventData);
    } catch (error) {
        console.error("Error in main function: ", error);
    }
}

async function fetchEventData(config) {
    const response = await axios(config);
    let eventData = response.data.response;
    console.log(`event data is ...`);

    return eventData.length === 0 ? null : await setPlayers(eventData);
}

async function fetchExistingEvents(fixtureId) {
    return await EventData.findOne({ fixture: fixtureId });
}

async function findInterestedUsers(idsList, fixtureId) {
    return await User.find({
        $or: [
            { favouriteMatches: { $elemMatch: { $eq: fixtureId } } },
            { favouriteTeams: { $elemMatch: { $in: idsList } } }
        ]
    });
}

async function processAndNotifyUsers(eventData, events, interestedUsers, fixtureId, io) {
    if (!events || events.length === 0 || (events.response.length < eventData.length )) {
        try {
            await fetchFixtureByFixtureId(fixtureId);
            const notifications = await prepareNotifications(eventData, interestedUsers, fixtureId);
            
            await sendNotifications(notifications, io);
        } catch (error) {
            console.error("Error in notification process: ", error);
        }
    }
}

async function prepareNotifications(eventData, interestedUsers, fixtureId) {
    if (!eventData || eventData.length === 0) {
        throw new Error("No event data available");
    }

    const lastEvent = eventData[eventData.length - 1];
    if (!lastEvent || !lastEvent.player || !lastEvent.team || !lastEvent.time) {
        throw new Error("Incomplete event data");
    }

    const playerIdNumber = lastEvent.player.id;
    const teamId = lastEvent.team.id;
    const defaultName = lastEvent.player.name || "";

    const teamNames = await TeamData.findOne({ id: teamId }) || {};
    const playerNames = await getPlayerNames(playerIdNumber, defaultName);

    const amharicName = playerNames.amharicName || defaultName;
    const englishName = playerNames.englishName || defaultName;
    const oromoName = playerNames.oromoName || defaultName;
    const somaliName = playerNames.somaliName || defaultName;

    const elapsedTime = lastEvent.time.elapsed || "N/A";
    const extraTime = lastEvent.time.extra ? `+${lastEvent.time.extra}` : '';
    const eventType = lastEvent.type === "Card" ? lastEvent.detail   : lastEvent.type;


 
       
    let notificationPayloadData = {
        'event': lastEvent.team.name || "Unknown Event",
        'event-am': teamNames.AmharicName || "",
        'event-en': teamNames.EnglishName || "",
        'event-or': teamNames.OromoName || "",
        'event-so': teamNames.SomaliName || "",
        'event-ti': teamNames.AmharicName || "",
        'team': defaultName,
        'am': `${amharicName} ${elapsedTime}' ${extraTime}`,
        'en': `${englishName} ${elapsedTime}' ${extraTime}`,
        'or': `${oromoName} ${elapsedTime}' ${extraTime}`,
        'so': `${somaliName} ${elapsedTime}' ${extraTime}`,
        'ti': `${amharicName} ${elapsedTime}' ${extraTime}`,
        'image': playerIdNumber ? `https://media-4.api-sports.io/football/players/${playerIdNumber}.png` : "",
        'type': eventType || "",
        'fixtureId': fixtureId
    };

    if(eventType === 'subst' && lastEvent.assist && lastEvent.assist.id){
        const assistPlayerIdNumber = lastEvent.assist.id;   
        const defaultAssistName = lastEvent.assist.name || "";

       
        const assistPlayerNames = await getPlayerNames(assistPlayerIdNumber, defaultAssistName);
    
        const amharicAssistName = assistPlayerNames.amharicName  ;
        const englishAssistName = assistPlayerNames.englishName ;
        const oromoAssistName = assistPlayerNames.oromoName ;
        const somaliAssistName = assistPlayerNames.somaliName ;

        notificationPayloadData['en'] = `${englishName} 🔄 ${englishAssistName} [${elapsedTime}' ${extraTime}]`
        notificationPayloadData['am'] = `${amharicName} 🔄 ${amharicAssistName} [${elapsedTime}' ${extraTime}]`
        notificationPayloadData['or'] = `${oromoName} 🔄 ${oromoAssistName} [${elapsedTime}' ${extraTime}]`
        notificationPayloadData['so'] = `${somaliName} 🔄 ${somaliAssistName} [${elapsedTime}' ${extraTime}]`
        notificationPayloadData['ti'] = `${amharicName} 🔄 ${amharicAssistName} [${elapsedTime}' ${extraTime}]`
  }
  
  if(eventType.toLowerCase() === 'goal'){
    const fetchedMatch = await fetchFixtureByFixtureId(fixtureId);
    let amharicHomeTeamName = ''
    let amharicAwayTeamName = ''
    let englishHomeTeamName = ''
    let englishAwayTeamName = ''
    let oromoHomeTeamName=  ''
    let oromoAwayTeamName = ''
    let somaliHomeTeamName = ''
    let somaliAwayTeamName =  ''
    let tigrignaHomeTeamName  = ''
    let tigrignaAwayTeamName = ''
    let homeGoal = ''
    let awayGoal = ''
    if(fetchedMatch){
        amharicHomeTeamName = fetchedMatch.homeTeam.AmharicName
        amharicAwayTeamName = fetchedMatch.awayTeam.AmharicName
        englishHomeTeamName = fetchedMatch.homeTeam.EnglishName
        englishAwayTeamName = fetchedMatch.awayTeam.EnglishName
        oromoHomeTeamName = fetchedMatch.homeTeam.OromoName
        oromoAwayTeamName = fetchedMatch.awayTeam.OromoName
        somaliHomeTeamName = fetchedMatch.homeTeam.SomaliName
        somaliAwayTeamName = fetchedMatch.awayTeam.SomaliName
        tigrignaHomeTeamName = fetchedMatch.homeTeam.AmharicName
        tigrignaAwayTeamName = fetchedMatch.homeTeam.AmharicName
        homeGoal = fetchedMatch.goals.home
        awayGoal = fetchedMatch.goals.away
    }


    
    notificationPayloadData['event-am'] = `⚽️ ${amharicHomeTeamName} ${homeGoal}-${awayGoal} ${amharicAwayTeamName}`
    notificationPayloadData['event-or'] = `⚽️ ${oromoHomeTeamName} ${homeGoal}-${awayGoal} ${oromoAwayTeamName}`
    notificationPayloadData['event-so'] = `⚽️ ${somaliHomeTeamName} ${homeGoal}-${awayGoal} ${somaliAwayTeamName}`
    notificationPayloadData['event-ti'] = `⚽️ ${tigrignaHomeTeamName} ${homeGoal}-${awayGoal} ${tigrignaAwayTeamName}`
    
  }
  if(eventType.toLowerCase() === 'var'){
    const fetchedMatch = await fetchFixtureByFixtureId(fixtureId);
        let amharicHomeTeamName = ''
        let amharicAwayTeamName = ''
        let englishHomeTeamName = ''
        let englishAwayTeamName = ''
        let oromoHomeTeamName=  ''
        let oromoAwayTeamName = ''
        let somaliHomeTeamName = ''
        let somaliAwayTeamName =  ''
        let tigrignaHomeTeamName  = ''
        let tigrignaAwayTeamName = ''
        let homeGoal = ''
        let awayGoal = ''
        if(fetchedMatch){
            amharicHomeTeamName = fetchedMatch.homeTeam.AmharicName
            amharicAwayTeamName = fetchedMatch.awayTeam.AmharicName
            englishHomeTeamName = fetchedMatch.homeTeam.EnglishName
            englishAwayTeamName = fetchedMatch.awayTeam.EnglishName
            oromoHomeTeamName = fetchedMatch.homeTeam.OromoName
            oromoAwayTeamName = fetchedMatch.awayTeam.OromoName
            somaliHomeTeamName = fetchedMatch.homeTeam.SomaliName
            somaliAwayTeamName = fetchedMatch.awayTeam.SomaliName
            tigrignaHomeTeamName = fetchedMatch.homeTeam.AmharicName
            tigrignaAwayTeamName = fetchedMatch.homeTeam.AmharicName
            homeGoal = fetchedMatch.goals.home
            awayGoal = fetchedMatch.goals.away
        }


        // notificationPayloadData['event-am'] = `${amharicHomeTeamName}[${homeGoal}]-[${awayGoal}]${amharicAwayTeamName}`
        // notificationPayloadData['event-or'] = `${oromoHomeTeamName}[${homeGoal}]-[${awayGoal}]${oromoAwayTeamName}`
        // notificationPayloadData['event-so'] = `${somaliHomeTeamName}[${homeGoal}]-[${awayGoal}]${somaliAwayTeamName}`
        // notificationPayloadData['event-ti'] = `${tigrignaHomeTeamName}[${homeGoal}]-[${awayGoal}]${tigrignaAwayTeamName}`
        
        notificationPayloadData['event-am'] = `ቫር [${elapsedTime}' ${extraTime}] ${ notificationPayloadData['event-am']}`
        notificationPayloadData['event-or'] = `Vaari [${elapsedTime}' ${extraTime}] ${ notificationPayloadData['event-or']}`
        notificationPayloadData['event-so'] = `ቫር [${elapsedTime}' ${extraTime}] ${ notificationPayloadData['event-so']}`
        notificationPayloadData['event-ti'] = `ቫር [${elapsedTime}' ${extraTime}] ${ notificationPayloadData['event-ti']}`

    if(lastEvent.detail && lastEvent.detail.toLowerCase()  === 'goal cancelled'){
    
        try{
          
    
    
    
            // notificationPayloadData['en'] = `Goal Cancelled ${elapsedTime}' ${extraTime}`
            // notificationPayloadData['am'] = `ጎሉ ተሽሯል  - ${elapsedTime}' ${extraTime}`
            // notificationPayloadData['or'] = `Goliin haqame - ${elapsedTime}' ${extraTime}`
            // notificationPayloadData['so'] = `Goolkii waa la kansalay - ${elapsedTime}' ${extraTime}`
            // notificationPayloadData['ti'] = `ሸቶ ተሰሪዙ - ${elapsedTime}' ${extraTime}`


            notificationPayloadData['en'] = `Goal Cancelled`
            notificationPayloadData['am'] = `ጎሉ ተሽሯል`
            notificationPayloadData['or'] = `Goliin haqame`
            notificationPayloadData['so'] = `Goolkii waa la kansalay`
            notificationPayloadData['ti'] = `ሸቶ ተሰሪዙ`
        }catch(e){
          
        }
        
    }else  if(  lastEvent.detail && lastEvent.detail.toLowerCase()  === 'penalty confirmed'){
      
    
        notificationPayloadData['en'] = `Penality Confirmed`
        notificationPayloadData['am'] = `ፍፁም ቅጣት ምት ተረጋግጧል`
        notificationPayloadData['or'] = `adabbiin mirkanaa’eera`
        notificationPayloadData['so'] = `ganaaxa la xaqiijiyay`
        notificationPayloadData['ti'] = `ሸቶ ተሰሪዙ`
    
    
    }
  }
  
  
  
  
  
 

    const notifications = interestedUsers.map(user => {
        return {
            userId: user.id,
            payload: notificationPayloadData
        };
    });

    return notifications;
}


async function sendNotifications(notifications, io) {
   
    if (!Array.isArray(notifications)) {
        console.error("Invalid notifications data: Expected an array, received", typeof notifications);
        return;
    }
    const notificationPromises = notifications.map(async notification => {
        const userSocketId = userSockets.get(notification.userId);
        if (userSocketId) { 
            io.to(userSocketId).emit("ev", notification.payload);
            return `Notification sent to user ${notification.userId}`;
        } else {
            return `No socket ID found for user ${notification.userId}`;
        }
    });

    try {
        const results = await Promise.all(notificationPromises);
        console.log("All notifications sent. Results:", results);
    } catch (error) {
        console.error("Error in sending notifications:", error);
    }
}


async function updateEventData(fixtureId, eventData) {
    await EventData.findOneAndUpdate({ fixture: fixtureId }, { fixture: fixtureId, response: eventData }, { upsert: true });
}



async function getPlayerNames(playerId, defaultName) {
    if (!playerId) {
        return {
            amharicName: defaultName,
            englishName: defaultName,
            oromoName: defaultName,
            somaliName: defaultName,
        };
    }
    try {
        const playerNames = await PlayerName.findOne({ id: playerId }) || {};
        return {
            amharicName: playerNames.amharicName || defaultName,
            englishName: playerNames.englishName || defaultName,
            oromoName: playerNames.oromoName || defaultName,
            somaliName: playerNames.somaliName || defaultName,
        };
    } catch (error) {
        console.error("Error fetching player names:", error);
        return {
            amharicName: defaultName,
            englishName: defaultName,
            oromoName: defaultName,
            somaliName: defaultName,
        };
    }
}


async function setPlayers(playersList){

    for(let i = 0 ; i < playersList.length ; i ++){
   
       const player = playersList[i]["player"]
       const assist = playersList[i]["assist"]
   
       if(player['id'] != null){
       try{
        const playerData = await PlayerName.findOne({ id: player['id'] });
        if(playerData != null){
          playersList[i]["player"]["amharicName"] = playerData.amharicName
          playersList[i]["player"]["englishName"] = playerData.englishName
          playersList[i]["player"]["oromoName"] = playerData.oromoName
          playersList[i]["player"]["somaliName"] = playerData.somaliName
         
        }
       }catch(e){

       }
       }
   
       if(assist['id'] != null){
         const assistData = await PlayerName.findOne({ id: assist['id'] });
       try{
        if(assistData != null){
      
            playersList[i]["assist"]["amharicName"] =  assistData.amharicName
            playersList[i]["assist"]["englishName"] =  assistData.englishName
            playersList[i]["assist"]["oromoName"] = assistData.oromoName
            playersList[i]["assist"]["somaliName"] = assistData.somaliName
          }
       }catch(e){
        
       }
       }
     }
     return playersList
   }

module.exports = { fetchEventAndEmit}