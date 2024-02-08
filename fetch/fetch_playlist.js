const axios = require("axios");
const { parseString } = require('xml2js');
const Playlist = require("../schemas/playlist_schema");
const Podcast = require("../schemas/podcast_schema")
const uuid = require("uuid")
async function makeGetRequest(url) {

  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error('Error making GET request:', error.message);
    throw error;
  } 
}

async function fetchPlaylist(){
        try { 
           const podcasts = await Podcast.find({})
            console.log(podcasts) 
            for(let i = 0 ; i <podcasts.length ; i ++){
                await addToPlaylist(
                    podcasts[i]['rssLink'] ,   
                    podcasts[i]['name'] ,   
                    podcasts[i]['id'] , 
                    podcasts[i]['avatar'] , 
                    podcasts[i]['station']     
                )
            }
        } catch (error) {
              console.log(error)
        }
}
 
const addToPlaylist = async (rssLinks, journalist , podcastId , avatar , station) => {
  console.log(rssLinks)
    for(let i = 0 ; i < rssLinks.length ; i ++){
      rssLink = rssLinks[i]
      try {
  
        const response = await makeGetRequest(rssLink);
        console.log(`status of the response is ${response.status}`);
    
        if (response.status === 200) {
          const parsedData = await parseXml(response.data);
           const enclosureInfoList = extractEnclosureInfo(parsedData);
    
            
        for(let i = 0 ; i < enclosureInfoList.length ; i ++){
            id = uuid.v4()
            song = enclosureInfoList[i]
            song['podcastId'] = podcastId
            song['id'] = id
            song['journalist'] = journalist
            song['avatar'] = avatar
            song['station'] = station
            // song['audioUrl'] = audioUrl
            console.log(avatar)
    
            try {
              await  Playlist.findOneAndUpdate(
                    {
                        audioUrl : song['audioUrl']
                    } , 
                    song , 
                    {upsert : true}
                )
    
                console.log("song has been succefully added to the playlist")
    
            } catch (error) {
                console.log(error)
                console.log("Sorry,  song is not added to the playlist!")
    
            }
        }
    
    
        
        } else {
          console.error('Error: Unable to fetch RSS feed');
        }
      } catch (error) {
        console.error('Error fetching playlist:', error.message);
      }
    }
};

function parseXml(xmlData) {
  return new Promise((resolve, reject) => {
    parseString(xmlData, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function extractEnclosureInfo(xmlResponse) {
  const enclosureInfoList = [];
  const itemElements = xmlResponse.rss.channel[0].item;

  for (const itemElement of itemElements) {
    const enclosureElement = itemElement.enclosure[0];
    const titleElement = itemElement.title[0];

    const linkText = enclosureElement.$.url;
    const titleText = titleElement.trim();

    if (titleText !== "" && linkText) {
      const enclosureInfo = {
        title: titleText,
        audioUrl: linkText,
      };
      enclosureInfoList.push(enclosureInfo);
    }
  }

  return enclosureInfoList;
}

module.exports = fetchPlaylist;
