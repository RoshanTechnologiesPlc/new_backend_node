const PlayerName = require('../../schemas/player_names')
const transliteratePlayer = require('../player_transliteration')

async function modifyAndCreateNewList(responseList) {
    const modifyElement = async (element) => {
        try {
            const playerId = element["player"]["id"];
            let playerNameData = await PlayerName.findOne({ id: playerId , translated : true});

            const playerData = {};
            if (!playerNameData) {
                const transliteratedPlayer = await transliteratePlayer(element["player"]["name"]);
                if (transliteratedPlayer) {
                    const { AmharicName, OromoName, SomaliName } = transliteratedPlayer;
                    const englishName = element["player"]["name"];
                    const photo = element["player"]["photo"];
                    const translated = true;

                    playerData.id = playerId;
                    playerData.amharicName = AmharicName;
                    playerData.oromoName = OromoName;
                    playerData.somaliName = SomaliName;
                    playerData.englishName = englishName;
                    playerData.photo = photo;
                    playerData.tigrignaName = AmharicName;

                    const newPlayerName = new PlayerName({ id: playerId, amharicName: AmharicName, oromoName: OromoName, somaliName: SomaliName, englishName, photo, translated });
                    await newPlayerName.save();
                } else {
                    playerData.amharicName = englishName;
                    playerData.oromoName = englishName;
                    playerData.somaliName = englishName;
                    playerData.englishName = englishName;
                    playerData.photo = photo;
                    playerData.tigrignaName = englishName;
                }
            } else {
                playerData.amharicName = playerNameData.amharicName;
                playerData.oromoName = playerNameData.oromoName;
                playerData.somaliName = playerNameData.somaliName;
                playerData.englishName = playerNameData.englishName;
                playerData.photo = playerNameData.photo;
                playerData.tigrignaName = playerNameData.amharicName;
            }

            return {
                "playerName": element["player"]["name"],
                "amharicName": playerData.amharicName,
                "oromoName": playerData.oromoName,
                "somaliName": playerData.somaliName,
                "englishName": playerData.englishName,
                "playerId": playerId,
               
                "teamName": element["statistics"][0]["team"]["name"],
                "teamLogo": element["statistics"][0]["team"]["logo"],
                "teamId": element["statistics"][0]["team"]["id"],
                "goals": element["statistics"][0]["goals"]["total"],
                "penality": element["statistics"][0]["penalty"]["scored"]
            };
        } catch (error) {
            console.error(`Error processing player ID ${element["player"]["id"]}:`, error);
            return null; // Skip this player if an error occurs
        }
    };

    const promises = responseList.map(element => modifyElement(element));
    const results = await Promise.all(promises);
    return results.filter(result => result !== null); // Filter out null results
}


module.exports = modifyAndCreateNewList;