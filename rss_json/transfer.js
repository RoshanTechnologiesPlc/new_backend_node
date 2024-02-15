const axios = require("axios");
const transliteratePlayers = require("../fetch/player_transliteration");
const parseString = require("xml2js").parseString;
const util = require("util");
const Transfer = require("../schemas/transfer");
const parseStringPromise = util.promisify(parseString);
const mongoose = require ("mongoose");
const url = 'mongodb+srv://abubekersiraj:Mongodbpassword1234@test.zezynu2.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url).then(() => {
  console.log("Connected to the database");
  getTransferRssFeed() 
}
).catch((error) => {
  console.log("Error connecting to the database", error.message);
}
);






const rssUrl = "https://crssnt.com/preview?id=1h-XoXOlAeY-ZriweURBNqf7SnQfmejrI799RxvWlYpg&name=big";
//  const rssUrl =
  //  "https://crssnt.com/preview/https:/docs.google.com/spreadsheets/d/1HinQ1XEghgtuqlGz9GKa9Hw_DF8bSjQ-pv4MPuihZAg";

async function getTransferRssFeed() {
  try {
    const response = await axios.get(rssUrl);


    if (response.status === 200) {
      const xmlData = response.data;
      const result = await parseStringPromise(xmlData, { explicitArray: false });
      const items = result.rss.channel.item.map((node) => ({
        fromClubName: extractFromClub(node.title),
        toClubName: extractToClub(node.title),
        playerName: extractName(node.title),
        transferAmount: extractTransferAmount(node.title),
        playerProfile: constructPhotoUrl(extractName(node.title), 'player'),
        fromClubPhoto: constructPhotoUrl(extractFromClub(node.title), 'club'),
        toClubPhoto: constructPhotoUrl(extractToClub(node.title), 'club'),
      }));

      for (const item of items) {
        const response = await fetchDataByPlayerName(item.playerName);
       // console.log("players data :-", item.playerName);
      
        if (!response) {
          const result = {
            fromClubName: await transliteratePlayers(item.fromClubName),
            
            toClubName: await transliteratePlayers(item.toClubName),
            playerName: await transliteratePlayers(item.playerName),
            transferAmount: item.transferAmount,
            playerProfile: item.playerProfile,
            fromClubPhoto: item.fromClubPhoto,
            toClubPhoto: item.toClubPhoto,
          };
          await Transfer.create(result);
          console.log("Inserted new player data:", result);

        } else {
          //console.log("Player found:", response);
        }
      }
      
      module.exports = Transfer;
    } else {
      console.log(`HTTP error ${response.status}`);
      return [];
    }
  } catch (e) {
    console.error(`Error: ${e}`);
    return [];
  }
}

function extractName(name) {
  const match = name.match(/^([^\(]+)/);
  return match ? match[0].trim() : "";
}

function extractFromClub(fromClubName) {
  const regex = /\(([^)]+)\➡️/;
  const match = fromClubName.match(regex);
  return match && match[1];
}

function extractToClub(toClubName) {
  const regex = /➡️\s([^💲:]+)/;
  const match = toClubName.match(regex);
  return match && match[1];
}

function extractTransferAmount(transferAmount) {
  const regex = /: [^]+/;
  const match = transferAmount.match(regex);
  let extractedTransferInfo = match ? match[0].trim() : "Transfer info not found";
  // Translation and special cases handling here
  // ...
  return extractedTransferInfo;
}

function constructPhotoUrl(name, type) {
  if (name == null) {
    return "";
  }
  name = name.replace(/\.$/, "").replace(/\s+/g, "-");
  const normalizedString = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const lowercaseName = normalizedString.toLowerCase();

  if (type === 'player') {
    return `https://fifaratings.com/wp-content/uploads/${lowercaseName}.png`;
  } else if (type === 'club') {
    return `https://fifaratings.com/wp-content/uploads/${lowercaseName}.png`;
  }
  return "";
}

async function fetchDataByPlayerName(playerName) {
  try {
    return await Transfer.findOne({ "playerName.EnglishName": playerName });
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

module.exports = getTransferRssFeed;

