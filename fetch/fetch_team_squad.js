const axios = require('axios');

const dotenv = require('dotenv');
const teamName = require('../schemas/team_data');
const playerNames = require('../schemas/player_names');
const transliterateToAmharic = require("../fetch/team_transliteration");
const transliteratePlayers = require("../fetch/player_transliteration");
const {squad ,player} = require("../schemas/squad_schema") 
dotenv.config();
const fetchPlayerProfile = require('./fetch_player_profile')
async function fetchTeamsSquad(teamId) {
    console.log(`fetching the data for the team ${teamId}`)
    const config = {
        method: 'GET',
        
        url: `${process.env.API_FOOTBALL_URL}/players/squads`,
        params: { team: teamId },
        headers: {
            'x-rapidapi-key': process.env.API_FOOTBALL_kEY,
            "x-rapidapi-host": "v3.football.api-sports.io"
        }
    } 
   try {
        const response = await axios(config);
        if (response.status == 200) {
            const data = response.data.response[0];

            const teamId = data.team.id;

            const teamData = await teamName.findOne({ id: teamId, translated: true });
            let amharicTeamName = data.team.name;
            let englishTeamName = data.team.name;
            let oromoTeamName = data.team.name;
            let somaliTeamName = data.team.name;
            let team = {
                AmharicName: amharicTeamName,
                EnglishName: englishTeamName,
                OromoName: oromoTeamName,
                SomaliName: somaliTeamName,
                translated: false
            }
            let teamObjId = null;
            if (teamData == null) {
                    
                translatedResult = await transliterateToAmharic(team);

                if (translatedResult) {
                    team.AmharicName = translatedResult.AmharicName;
                    team.OromoName = translatedResult.OromoName;
                    team.SomaliName = translatedResult.SomaliName;
                    team.translated = true;
                    team.logo = `https://media.api-sports.io/football/teams/${teamId}.png`
                    amharicTeamName = team.AmharicName;
                    englishTeamName = team.EnglishName;
                    oromoTeamName = team.OromoName;
                    somaliTeamName = team.SomaliName;

                  const res =  await teamName.findOneAndUpdate({ id: teamId }, team, { new: true, upsert: true });
                  teamObjId = res._id
                } else {
                    team.translated = false;
                   const res=  await teamName.findOneAndUpdate({ id: teamId }, team, { new: true, upsert: true });
                   teamObjId = res._id
                }
            } else {
                amharicTeamName = teamData.AmharicName;
                englishTeamName = teamData.EnglishName;
                oromoTeamName = teamData.OromoName;
                somaliTeamName = teamData.SomaliName;
                teamObjId = teamData._id
            }
            
            const playersListOfTeam = await extractPlayers(data.players);
            const squadObject = {
                team: teamObjId,
                teamId : teamId,
                amharicTeamName: amharicTeamName,
                englishTeamName: englishTeamName,
                oromoTeamName: oromoTeamName,
                somaliTeamName: somaliTeamName,
                teamLogo: `https://media.api-sports.io/football/teams/${teamId}.png`,
                players: playersListOfTeam
            }
        
            try {
                await squad.findOneAndUpdate({
                    teamId: teamId
                } , 
                squadObject , 
                {
                    upsert : true
                }
                )

                console.log(`successfully inserted the squad `)
            } catch (error) {
                console.log(`error happened while inserting the squad for the team! ${error}`)
            }


        }
    } catch (error) {
            console.log(`error happened while fetching the squad data ${error}`)
    }
}



async function extractPlayers(playersList) {
    let playersDataList = []
    for (let i = 0; i < playersList.length; i++) {
       let teamPlayer = playersList[i];
     //  console.log(`team player is ${teamPlayer.number}`)
        
        try {
            const name = teamPlayer.name
            const id = teamPlayer.id
            const age = teamPlayer.age
            const number = teamPlayer.number
            const position = teamPlayer.position
            const photo = teamPlayer.photo
            let insertedPlayerId = null;
            let amharicName  = name;
            let englishName =name;
            let oromoName = name;
            let somaliName = name;
            let playerData = await playerNames.findOne({ id: id });
            
            if (playerData === null) {
               const  playerNameObject = await transliteratePlayers(name);
                if (playerNameObject) {
                    const playerName = playerNameObject.EnglishName;
                    const playerAmharicName = playerNameObject.AmharicName;
                    const playerSomaliName = playerNameObject.SomaliName;
                    const playerOromoName = playerNameObject.OromoName;
                    const playerObject = {
                        id: id,
                        name: playerName,
                        amharicName: playerAmharicName,
                        somaliName: playerSomaliName,
                        oromoName: playerOromoName,
                        englishName : playerName,
                        photo: photo,
                        translated: true
                    }
                    const insertedPlayer = await playerNames.findOneAndUpdate({ id: id }, playerObject, { upsert: true, new: true });
                    insertedPlayerId = insertedPlayer._id;
                } else {
                    const playerObject = {
                        id: id,
                        name: name,
                        amharicName: amharicName,
                        somaliName: somaliName,
                        oromoName: oromoName,
                        englishName : englishName,
                        photo: photo,
                        translated: false
                    }
                    const insertedPlayer = await playerNames.findOneAndUpdate({ id: id }, playerObject, { upsert: true, new: true });
                    insertedPlayerId = insertedPlayer._id;
                }
            }else{
                amharicName = playerData.amharicName;
                englishName = playerData.englishName;
                oromoName = playerData.oromoName;
                somaliName = playerData.somaliName;
                insertedPlayerId = playerData._id;
            }

            const insertPlayerObject = {
                playerId: id,
                player: insertedPlayerId,
                number: number,
                position: position,
                age: age   }

            const insertedPlayer = await player.findOneAndUpdate({ playerId: id }, insertPlayerObject, { upsert: true, new: true });
            playersDataList.push(insertedPlayer);

            await fetchPlayerProfile(id);
        } catch (error) {
            console.log(`error happened while inserting one player to the squad ---- ${error}`)
        }
    }

    return playersDataList;
}



module.exports = fetchTeamsSquad;  