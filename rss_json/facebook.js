const axios = require("axios");
const parseString = require("xml2js").parseString;
const cheerio = require("cheerio");
const {
  premierLeague,
  leomessi,
  arsenal,
  united,
  ronaldo,
  chelsea,manCity,manUnited,liverPool,bleacher,fabriozio,
} = require("./profilePictureLink");
const FaceBook = require("../schemas/facebook_model");
async function getFaceBookRssFeed(rssUrl) {
  try {
    const response = await axios.get(rssUrl);

    if (response.status === 200) {
      const xmlData = response.data;
      let items = [];

      parseString(xmlData, { explicitArray: false }, (err, result) => {
        if (err) {
          console.error("Error converting XML to JSON:", err);
        } else {
          // Extract relevant information
          items = result.rss.channel.item.map((node) => ({
            title: node.title,
            link: node.link,
            description: extractDescription(node.description),
            creater: node["dc:creator"],
            mediaContent: node["media:content"].$.url,
            pubDate: node.pubDate,
            profilePicture: extractProfileImagelink(node["dc:creator"]),
            // Add more fields as needed
          }));
        }
      });

   
      for (const item of items) {
        let faceBook = new FaceBook({
          title: item.title,
          link: item.link,
          description: item.description,
          pubDate: item.pubDate,
          creater: item.creater,
          mediaContent: item.mediaContent,
          profilePicture: item.profilePicture,
        });

        const data = await fetchDataByLink(item.link);
        if (data) {
          console.log(data);
        } else {
          faceBook
            .save()
            .then((response) => {
              console.log("FaceBook Rss Added Successfully");
            })
            .catch((error) => {
              console.log("An error Occured");
            });
        }
      }
      console.log(items);
      return items;
    } else {
      // Handle HTTP error
      console.log(`HTTP error ${response.status}`);
      return [];
    }
  } catch (e) {
    // Handle other errors
    console.error(`Error: ${e}`);
    return [];
  }
}
function extractDescription(description) {
  const $ = cheerio.load(description);

  // Extract the specific text
  const targetText = $("body")
    .contents()
    .filter(function () {
      return this.nodeType === 3; // Node type 3 represents text nodes
    })
    .text()
    .trim();
  return targetText;
}
function extractProfileImagelink(creater) {
  if (creater === "Premier League") {
    return premierLeague;
  } else if (creater === "Leo Messi") {
    return leomessi;
  } else if (creater === "Arsenal") {
    return arsenal;
  } else if (creater === "Manchester United") {
    return united;
  } else if (creater === "Cristiano Ronaldo") {
    return ronaldo;
  }  
  else {
    return "";
  }
}
async function fetchDataByLink(link) {
  try {
    // Fetch data by email
    const result = await FaceBook.findOne({ link });

    return result;
  } catch (error) {
    console.error("Error fetching data by email:", error);
  } finally {
  }
}
module.exports = getFaceBookRssFeed;