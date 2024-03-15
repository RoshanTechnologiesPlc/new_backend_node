const PlayerName = require('../../schemas/player_names');
const Players = require('../../schemas/fifa_model');

const transliteratePlayer = require('../player_transliteration');

async function modifyAndCreateNewList(responseList) {
    const modifyElement = async (element) => {
        try {
         
            const player = element.player;
            const playerId = player.id;
            let playerNameData = await Players.findOne({ playerId: playerId });

            let playerData = {
                amharicName: player.name,
                oromoName: player.name,
                somaliName: player.name,
                englishName: player.name,
                photo: player.photo,
                tigrignaName: player.name

            };

            if (!playerNameData) {
                const transliteratedPlayer = await transliteratePlayer(player.name);
                if (transliteratedPlayer) {
                    const { AmharicName, OromoName, SomaliName } = transliteratedPlayer;
                    Object.assign(playerData, {
                        amharicName: AmharicName,
                        oromoName: OromoName,
                        somaliName: SomaliName,
                        tigrignaName: AmharicName
                    });

                    const newPlayerName = new PlayerName({
                        id: playerId,
                        ...playerData,
                        translated: true
                    });
                    await newPlayerName.save();
                }
            } else {
                Object.assign(playerData, {
                    amharicName: playerNameData.playerName.amharicName,
                    oromoName: playerNameData.playerName.oromoName,
                    somaliName: playerNameData.playerName.somaliName,
                    englishName: playerNameData.playerName.englishName,
                    photo: playerNameData.playerName.photo,
                    tigrignaName: playerNameData.playerName.amharicName
                    
                });
            }
          
            return {
                playerName: player.name,
                ...playerData,
                playerId: playerId,
                teamName: element.statistics[0].team.name,
                teamLogo: element.statistics[0].team.logo,
                teamId: element.statistics[0].team.id,
                goals: element.statistics[0].goals.total,
                penality: element.statistics[0].penalty.scored,
                yellow:element.statistics[0].cards.yellow,
                assists:element.statistics[0].goals.assists,
                red:element.statistics[0].cards.red,

              

            };
        } catch (error) {
            console.error(`Error processing player ID ${playerId}:`, error);
            return null;
        }
    };

    const results = await Promise.all(responseList.map(modifyElement));
    return results;
}

module.exports = modifyAndCreateNewList;




