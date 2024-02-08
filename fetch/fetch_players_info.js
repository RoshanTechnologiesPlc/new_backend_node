const axios = require('axios');
const mongoose = require('mongoose');
const PlayerWithTeam = require('../schemas/playerWithTeam');
const transliterateToAmharic = require("../fetch/team_transliteration");
const transliteratePlayers = require("../fetch/player_transliteration");
const playersInfo = require("../constants/playerInfo")
const PlayerName = require("../schemas/player_names")
const teamNameSchema = require("../schemas/team_data")
async function fetchPlayersInformation(){
        try{
            // playersInfo.length
            // console.log(playersInfo.length)
            for(let i = 9  ; i< playersInfo.length ; i ++){
                console.log(`value of i is ${i}`)
                playerInfo = playersInfo[i]
                playerId  = playerInfo["playerId"]
                playerName = playerInfo["playerName"]
                playerPhoto = `https://media.api-sports.io/football/players/${playerId}.png`
                teamName = playerInfo['teamName']
                teamId = playerInfo["teamId"]
                let playerObjId = null;
                
        
                console.log(`fetching the data for the player ${playerName}`)
        
                const checkPlayer = await PlayerName.findOne({id  : playerId , translated : true})
                if(checkPlayer == null){
                    const transliteratedPlayer = await transliteratePlayers(playerName)
                    if(transliteratedPlayer){
                        amharicName = transliteratedPlayer["AmharicName"]
                        oromoName = transliteratedPlayer["OromoName"]
                        somaliName = transliteratedPlayer["SomaliName"]
                        englishName = transliteratedPlayer["EnglishName"]
                        const insertedPlayer = await PlayerName.findOneAndUpdate({
                            id : playerId
                        } , {
                            id : playerId , 
                            amharicName : amharicName , 
                            oromoName : oromoName , 
                            somaliName : somaliName , 
                            englishName : playerName , 
                            photo : playerPhoto , 
                            translated  : true
                        } , {
                            upsert : true , 
                            new : true
                        })
                        playerObjId = insertedPlayer["_id"]
                    }else{
                        const insertedPlayer = await PlayerName.findOneAndUpdate({
                            id : playerId
                        } , {
                            id : playerId , 
                            amharicName : playerName , 
                            oromoName : playerName , 
                            somaliName : playerName , 
                            englishName : playerName , 
                            photo : playerPhoto , 
                            translated  : false
                        } , {
                            upsert : true , 
                            new : true
                        })
                        playerObjId = insertedPlayer["_id"]
                    }
                }else{
                    playerObjId = checkPlayer["_id"]
                }
        
        
                console.log(`fetching the data for the team ${teamName}`)
        
        
                const checkTeam = await teamNameSchema.findOne({id : teamId , translated : true})
                let teamObjId = null;
                if(checkTeam == null){
                    const transliteratedTeam = await transliterateToAmharic(teamName)
                    if(transliteratedTeam){
                        const amharicName = transliteratedTeam["AmharicName"]
                        const oromoName = transliteratedTeam["OromoName"]
                        const somaliName = transliteratedTeam["SomaliName"]
                        const englishName = transliteratedTeam["EnglishName"]
                        const insertedTeam = await teamNameSchema.findOneAndUpdate({
                            id : teamId
                        } , {
                            id : teamId , 
                            amharicName : amharicName , 
                            oromoName : oromoName , 
                            somaliName : somaliName , 
                            englishName : englishName , 
                            translated  : true
                        } , {
                            upsert : true , 
                            new : true
                        })
                        teamObjId = insertedTeam["_id"]
                    }else{
                        const insertedTeam = await teamNameSchema.findOneAndUpdate({
                            id : teamId
                        } , {
                            id : teamId , 
                            amharicName : teamName , 
                            oromoName : teamName , 
                            somaliName : teamName , 
                            englishName : teamName , 
                            translated  : false
                        } , {
                            upsert : true , 
                            new : true
                        })
                        teamObjId = insertedTeam["_id"]
                    }
        
            }else{
                teamObjId = checkTeam["_id"]
            }
        
               
            console.log(`fetching the data for the player with team with ${teamObjId}`)
        
            // const playerWithTeam = new PlayerWithTeam({
            //     playerId : playerId , 
            //     teamId : teamId , 
            //     player : playerObjId , 
            //     team : teamObjId
            // })
            // await playerWithTeam.save()

            const playerWithTeam = await PlayerWithTeam.findOneAndUpdate({
                playerId : playerId , 
         
            } , {
                playerId : playerId , 
                teamId : teamId , 
                player : playerObjId , 
                team : teamObjId
            } , {
                upsert : true , 
                new : true
            })


            console.log(playerWithTeam)
            console.log(`successfully inserted the player with team!`)
        
        }
     
        }catch(e){
            console.log(e)
        }
}
  

module.exports = fetchPlayersInformation
