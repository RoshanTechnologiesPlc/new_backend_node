
const axios = require("axios"); 
const transliteratePlayers = require("../fetch/player_transliteration");  
const Transfer = require("../schemas/transfer"); 
const mongoose = require ("mongoose"); 
const url = 'mongodb+srv://abubekersiraj:Mongodbpassword1234@test.zezynu2.mongodb.net/?retryWrites=true&w=majority'; 
const cheerio = require('cheerio'); 
const axiosRetry = require('axios-retry');



mongoose.connect(url).then(() => { 
 console.log("Connected to the database"); 
 savePlayersDataToMongo();
} 
).catch((error) => { 
  console.log("Error connecting to the database", error.message); 
} 
); 
const formatText = (text) => text ? text.replace(/[\n\r\t]+/g, ' ').trim() : ''; 
const formatCurrency = (value) => { 
    let result = value.replace(/[€\?,-]/g, '').trim(); 
    if (result.endsWith('m')) { 
        // Convert the string to a float, remove the 'm', and then append 'M€' 
        // The parseFloat will remove unnecessary trailing zeros 
        return `${parseFloat(result.replace('m', ''))}M€`; 
    } else if (result.endsWith('Th')) { 
        // Convert thousands to a fraction of a million for consistency 
        // This keeps the conversion accurate and appends 'M€' 
        return `${parseFloat(result.replace('Th', '')) / 1000}M€`; 
    } 
    return parseFloat(result) || "0M€"; // Ensure even zero values are represented consistently 
}; 
async function isPlayerNameExists(englishNamePlayer) {
  const playerExists = await Transfer.findOne({"playerName.EnglishName": englishNamePlayer});
  return !!playerExists; // Returns true if the player exists, false otherwise
}
 
const getPlayerData = async (elem, $) => { 
    // Assume 'elem' is an element in the page corresponding to a player 
    const cells = $(elem).find('td');
    const englishNamePlayer = formatText($(cells[1]).find('img').attr('title'));

    if (await isPlayerNameExists(englishNamePlayer)) {
      console.log(`Skipping ${englishNamePlayer}, already exists.`);
      return null; // Return null to indicate that no new data should be processed for this player
    }

    const englishNameFromClub = formatText($(cells[9]).find('img').attr('title')  || 'Without club'); 
    const englishNameToClub = formatText($(cells[13]).find('img').attr('title') || 'Without club'); 
    
    // Perform transliteration for playerName 
    const playerNametransliterate = await transliteratePlayers(englishNamePlayer); 

     
    const fromClubNametransliterate = await transliteratePlayers(englishNameFromClub); 

 
    // Perform transliteration for toClubName 
    const toClubNametransliterate = await transliteratePlayers(englishNameToClub); 

   
     
    const playerData = { 
    
        fromClubName: { 
            EnglishName: englishNameFromClub, 
            AmharicName: fromClubNametransliterate.AmharicName, 
            OromoName: fromClubNametransliterate.OromoName, 
            SomaliName: fromClubNametransliterate.SomaliName, 
        }, 
        toClubName: { 
            EnglishName: englishNameToClub, 
            AmharicName: toClubNametransliterate.AmharicName, 
            OromoName: toClubNametransliterate.OromoName, 
            SomaliName: toClubNametransliterate.SomaliName, 
        }, 
        playerProfile: ($(cells[1]).find('img').attr('data-src') || "https://www.pngfind.com/pngs/m/622-6227463_man-head-people-avatar-svg-png-icon-free.png"), 
        fromClubPhoto: ($(cells[9]).find('img').attr('src') || "No Photo").replace('/tiny/', '/big/'), 
        toClubPhoto: ($(cells[13]).find('img').attr('src') || "No Photo").replace('/tiny/', '/big/'), 
        playerName: { 
            EnglishName: englishNamePlayer, 
            AmharicName: playerNametransliterate.AmharicName, 
            OromoName: playerNametransliterate.OromoName, 
            SomaliName: playerNametransliterate.SomaliName, 
        }, 
        transferAmount: formatCurrency($(cells[16]).text()), 
    }; 
    return playerData; 
}; 

const getPlayersData = async (pages) => { 
    let playersData = []; 
    for (let page = 1; page <= pages; page++) {

const pageUrl = 'https://www.transfermarkt.com/transfers/saisontransfers/statistik/top/plus/1/galerie/0?saison_id=2023&transferfenster=alle&land_id=&ausrichtung=&spielerposition_id=&altersklasse=&leihe= '
const headers = { 
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" 
        }; 
        const response = await axios.get(pageUrl, { headers }); 
        const $ = cheerio.load(response.data); 
        const pagePromises = []; 
 
        $('.responsive-table .grid-view .items tbody tr').each((_, elem) => { 
            pagePromises.push(getPlayerData(elem, $)); 
        }); 
 
        // Wait for all getPlayerData promises of this page to resolve 
        const results = await Promise.all(pagePromises); 
        playersData = playersData.concat(results.filter(player => player.playerName.EnglishName)); // Collect and filter data from this page 
    } 
    return playersData; // Contains all players' data from all pages 
}; 
 
const savePlayersDataToMongo = async () => { 
    try { 
      const playersData = await getPlayersData(1); // Fetch the player data
      let lastIndex = await Transfer.find().sort({index: -1}).limit(1).then(docs => docs[0] ? docs[0].index : 0); // Find the last index used
      for (let playerData of playersData) {
        lastIndex++; // Increment the index for each new document
        playerData.index = lastIndex; // Assign the incremented index to the new document
        await Transfer.create(playerData); 
        console.log('inserted this players data ')
      }
    } catch (error) { 
        console.error('Failed to save player data to MongoDB:', error); 
    } 
}; 

