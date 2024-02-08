
const axios = require("axios");
require('dotenv').config()
// { path: require('find-config')('.env') }
const countryName = require("../schemas/countryNames")
const PlayerName = require("../schemas/player_names")
const playerStatistics = require("../schemas/player_statistics")
const PlayerProfile = require("../schemas/player_profile");
const playerProfileSchema = require("../schemas/player_profile");
const  LeagueName = require("../schemas/leagueNamesSchema") ; 
const teamDataSchema = require("../schemas/team_data")
const transliteratePlayers = require("./player_transliteration");
async function fetchPlayerProfiles(Id){
    // console.log(process.env)
    const receivedId = Id
    //console.log(`received id is ... ${Id}`)
    const config = {
        method: 'GET',
        url : `${process.env.API_FOOTBALL_URL}/players` , 
        params: {id : Id , season : 2023},
        headers: {
        'x-rapidapi-key': process.env.API_FOOTBALL_kEY,
        "x-rapidapi-host": "v3.football.api-sports.io"
        } };

        // try{
        const response = await axios(config);
        //console.log(response.status)
        if(response.status == 200){
            // console.log(response.data)
            const data = response.data.response[0];
            // console.log(data)
            const name = data.player.name;
            const country = data.player.birth.country;
            const age = data.player.age;
            const birthDate = data.player.birth.date;
            const birthPlace = data.player.birth.place;
            const nationality = data.player.nationality;
            const height = data.player.height;
            const weight = data.player.weight;
            const injured = data.player.injured;
            

            // const id = Id;
            
           
            
            let countryId = null;


            const countryNameData = await countryName.findOne({EnglishName : country});
            if(true){
                const countryObject = {
                    AmharicName : country, 
                    EnglishName : country, 
                    OromoName : country , 
                    SomaliName : country , 
                    
                }

                const countryData = await countryName.findOneAndUpdate({EnglishName : country} , countryObject ,  {new : true , upsert : true});
                countryId = countryData._id;
            }else{
                countryId = countryNameData._id;}
            
            const playerNameData = await PlayerName.findOne({englishName : name});
            let Id = null;
            // if(!playerNameData){
                if(true){
                    const translatedPlayer = await transliteratePlayers(name);
                    if(translatedPlayer){
                    const toBeInserted = {
                        amharicName : translatedPlayer["AmharicName"] ,
                        englishName : translatedPlayer["EnglishName"] ,
                        oromoName : translatedPlayer["OromoName"] ,
                        somaliName : translatedPlayer["SomaliName"] ,
                        photo : data.player.photo , 
                        translated : true
                    }

                    //console.log(toBeInserted)


                    const insertedPlayer = await PlayerName.findOneAndUpdate({id : data.player.id} , toBeInserted , {new : true , upsert : true});
                  //console.log(insertedPlayer)
                    playerId = insertedPlayer._id;
                    }else if (playerNameData == null){
                        const playerObject =  {amharicName : name,  englishName : name,  oromoName : name , somaliName : name , photo : data.player.photo }
                        const playerData = await PlayerName.findOneAndUpdate({englishName : name} , playerObject  , {new : true, upsert : true});
                        playerId = playerData._id;}
                    }else{
                        playerId = playerNameData._id;
                    }
             
            const playerStatList = await getPlayerStatistics(data.statistics , receivedId);

            const playerProfileObject = {
                player : playerId, 
                id : receivedId , 
                player : playerId , 
                birthCountry  : countryId , 
                age : age,
                birthDate : birthDate , 
                birthPlace : birthPlace , 
                nationality : countryId , 
                height : height , 
                weight : weight , 
                statistics : playerStatList , 
                injured : injured
            }

            await playerProfileSchema.findOneAndUpdate({id : receivedId} , playerProfileObject , {upsert : true})             
            
            }      
           // console.log(`operation is successful!`)  
        // }
        // catch(e){
        //     console.log(`error catched while fetching the data ${e}`)
        // }
    }





async function getPlayerStatistics(statList , id){
    //console.log(`received an id of ${id}`)
    let playerStatsList = []
    for(let i = 0 ; i < statList.length ; i++){
        const data = statList[i]
        const league = data.league
        const team = data.team
        let LeagueId = null
        let teamId = null

        const leagueData = await LeagueName.findOne({id : league.id})
        if(false){
            LeagueId = leagueData._id 
        }else{
            const insertedLeague = await LeagueName.findOneAndUpdate({id  : league.id} , {amharicName : league.name , 
            englishName : league.name, 
            somaliName : league.name  , 
            oromoName : league.name , 
            photo : league.logo
            } , {upsert : true , new : true})
            // console.log(insertedLeague)
           LeagueId = insertedLeague._id
        }


        const teamsData = await teamDataSchema.findOne({id : team.id})

        if(teamsData == null){
            teamObject = {
                AmharicName : team.name , 
                EnglishName : team.name, 
                SomaliName : team.name, 
                OromoName : team.name, 
                id : team.id , 
                logo  : team.logo
            }
            const insertedTeam =  await teamDataSchema.findOneAndUpdate({id : team.id} , teamObject , {upsert : true, new : true})
            teamId = insertedTeam._id
        }else{
            teamId = teamsData._id
        }
        const playerStat = {
            id : id ,
            league : LeagueId,
            team: teamId , 
            gameAppearances: data.games.appearences,
            gameLineups: data.games.lineups,
            gameMinutes: data.games.minutes,
            gameNumber: data.games.number,
            gamePosition: data.games.position,
            gameRating: data.games.rating,
            gameCaptain: data.games.captain,
            substitutedIn: data.substitutes.in,
            substitutedOut: data.substitutes.out,
            substitutedBench: data.substitutes.bench,
            totalShot: data.shots.total,
            onShot: data.shots.on,
            totalGoals: data.goals.total,
            goalsConceded: data.goals.conceded,
            assists: data.goals.assists,
            totalSaves: data.goals.saves,
            totalPasses: data.passes.total,
            keyPasses: data.passes.key,
            passesAccuracy: data.passes.accuracy,
            totalTackles: data.tackles.total,
            totalBlocks: data.tackles.blocks,
            totalInterceptions: data.tackles.interceptions,
            duelsTotal: data.duels.total,
            duelsWon: data.duels.won,
            dribbleAttempts: data.dribbles.attempts,
            dribbleSuccess: data.dribbles.success,
            dribblePast: data.dribbles.past,
            foulsDrawn: data.fouls.drawn,
            foulsCommitted: data.fouls.committed,
            yellowCards: data.cards.yellow,
            yellowRedCards: data.cards.yellowred,
            redCards: data.cards.red,
            penalityWon: data.penalty.won,
            penalityCommitted: data.penalty.commited,
            penalityScored: data.penalty.scored,
            penalityMissed: data.penalty.missed,
            penalitySaved: data.penalty.saved
        };

        try{
      const  playerStatData =    await playerStatistics.findOneAndUpdate({id  : id} , playerStat , {upsert : true , new : true})
        playerStatsList.push(playerStatData)


            }catch(E){console.log(`error happened while inserting players! ${E}`)}

        



    
    }
    return playerStatsList
}


module.exports = fetchPlayerProfiles;