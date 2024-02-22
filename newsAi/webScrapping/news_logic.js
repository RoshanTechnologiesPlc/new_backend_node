const mongoose = require('mongoose');
const axios = require('axios');
const xml2js = require('xml2js');
require("dotenv").config();
const { Translate } = require('@google-cloud/translate').v2;
const translate = new Translate({ key: 'AIzaSyCau1WDN3ZsJglCClLQDLHM7gcNPyY4ZNE' });
const TestaNews = require('../../schemas/news_model')
const qs = require('qs');

const { BlobServiceClient } = require("@azure/storage-blob");
const fs = require("fs").promises;
const OPENAI_API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const smmryAPIKeys = ['41ABB0837D','FB22F39FC4', '9CB8C72AEC', '7EDCBE9628'];

var sdk = require("microsoft-cognitiveservices-speech-sdk");
const path = require("path");

const API_URL = 'https://api.smmry.com';

const am ='am';
const or ='om';
const tr ='ti';
const so ='so';

var loadedNewUrls = [];

// MongoDB connection string with the correct database name "abukinews"
const url = 'mongodb+srv://abubekersiraj:Mongodbpassword1234@test.zezynu2.mongodb.net/?retryWrites=true&w=majority';

// Schema for the testanews collection
const RSS_URL =  'https://www.90min.com/posts.rss'

mongoose.connect(url)
  .then(() => {
   // console.log('Connected to the MongoDB database.');
    fetchAndStoreSummary();
    setInterval(fetchAndStoreSummary, 600000); 
  })
  .catch(err => {
    console.error(`Error connecting to the database: ${err}`);
  });

// var loadedNewUrls = [];

async function parseAndLoadRSS() {
  const data = (await axios.get(RSS_URL)).data;
  const parser = new xml2js.Parser();
  const result = await parser.parseStringPromise(data);

  const forProcessRSS = result.rss.channel[0].item.filter((item) => {
    if (!loadedNewUrls.includes(item.link[0])) {
      // If the URL is not in loadedNewUrls, add it to prevent duplicates
      loadedNewUrls.push(item.link[0]);
      return true; // Include this article for processing
    }
    return false; // Skip this article, as it's a duplicate
  }).map(item => ({
    newsLink: item.link[0],
    title: item.title[0],
    author: item.author ? item.author[0] : null,
    description: item.description[0],
    publishedDate: item.pubDate[0],
    // More robust checking for media:thumbnail
    mainImage: item['media:thumbnail'] && item['media:thumbnail'][0] && item['media:thumbnail'][0]['$'] ? item['media:thumbnail'][0]['$'].url : null,
    figCaption: item['media:thumbnail'] && item['media:thumbnail'][0] && item['media:thumbnail'][0]['$'] ? item['media:thumbnail'][0]['$'].caption : null
}));

  return forProcessRSS;
}




async function fetchAndStoreSummary() {
  try {
    const toProcessRssFeeds = await parseAndLoadRSS();
    console.log(`Found ${toProcessRssFeeds.length} documents to process.`);

    for (const rssItem of toProcessRssFeeds) {
  
    //console.log(`Processing document URL ${rssItem.newsLink}`);
    const rsslink = rssItem.newsLink;

    const doesNewsExist = await TestaNews.find({ newsLink: rsslink });
    if (doesNewsExist.length > 0) {
      
      //console.log("News already exist");

    }

    else if (doesNewsExist == false){

     
      //const paraphrasedDescription = await paraphraseText(rssItem.description);
      // const summarisedDescription_am =await translateText(paraphrasedDescription,am);
      // const summarizedDescription_or =await translateText(paraphrasedDescription,or);
      // const summarizedDescriptron_tr =await translateText(paraphrasedDescription,ti);
      // const summarizedDescription_so =await translateText(paraphrasedDescription,so);
     
     // const paraphrasedCaption = await paraphraseText(rssItem.figCaption);
      const summarisedCaption_am = await translateText(rssItem.figCaption, am);
      const summarisedCaption_or = await translateText(rssItem.figCaption, or); 
      const summarisedCaption_tr = await translateText(rssItem.figCaption, tr);
      const summarisedCaption_so = await translateText(rssItem.figCaption, so);
      
      const summarized = await fetchSummary(rssItem.newsLink);
      const summarized_am = await translateText(summarized,am);
      const summarised_or =await translateText(summarized,or);
      const summarized_tr =await translateText(summarized,tr);
      const summarized_so =await translateText(summarized,so);

console.log("summarized=",summarized);
      const paraphrasedTitle = await paraphraseText(rssItem.title);
      const summarizedTitle_am=await translateText(paraphrasedTitle,am);
      const summarizedTitle_or=await translateText(paraphrasedTitle,or);
      const summarizedTitle_tr=await translateText(paraphrasedTitle,tr);
      const  summarizedTitle_so=await translateText(paraphrasedTitle,so);


      const author_am = await transliterateText(rssItem.author,"Amharic (Geez Script)");
      const author_or =rssItem.author
      const author_tr = author_am
      const author_so = rssItem.author

 

      const document = await TestaNews.create({
        ...rssItem,
        is_processed: false,
        summarizedTitle: paraphrasedTitle,
        summarizedDescription: rssItem.description,
        summarized: summarized,

        author_am: author_am,
        author_or: author_or,
        author_tr: author_tr,
        author_so: author_so,

        
        figCaption_am: summarisedCaption_am, 
 
        
        summarized_am:summarized_am,
        summarizedTitle_am: summarizedTitle_am,
        summarizedDescription_am: rssItem.description,

        figCaption_or: summarisedCaption_or,
        

        summarizedTitle_or:summarizedTitle_or,
        summarized_or:summarised_or,
        summarizedDescription_or:rssItem.description,

        figCaption_tr: summarisedCaption_tr, 
       
        summarizedTitle_tr:summarizedTitle_tr,
        summarized_tr:summarized_tr,
        summarizedDescription_tr:rssItem.description,

        figCaption_so: summarisedCaption_so,

        summarizedTitle_so:summarizedTitle_so,
        summarized_so:summarized_so,
        summarizedDescription_so: rssItem.description,
      });

      console.log(`Document ID ${document._id} Created with paraphrased title, description, and link summary.`);
      
      await delay(2000);
      processNewsItems();

    }
  } 
 }
  
  catch (error) {
    console.error(`Error in fetchAndStoreSummary: ${error}`);
  }
  
}


async function paraphraseText(text) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "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";//process.env.OPENAI_API_KEY; 
    try {
        const response = await axios.post(OPENAI_API_ENDPOINT,
            {
                "model": "gpt-3.5-turbo-1106", // Replace with your desired model
                "messages": [
                    {
                        "role": "user",
                        "content": `Please provide a shorter summurized of the following text in a best minimum word count, keeping the essential information: ${text}`

                    }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.data.choices && response.data.choices.length > 0) {
            return response.data.choices[0].message.content.trim();
        } else {
            return text; // Return original text if no paraphrase is provided
        }
    } catch (error) {
        console.error(`Error in paraphraseText: ${error}`);
        return text; // Return original text in case of an error
    }
}

// async function fetchSummary(url) {
//   try {
//     const summarizeUrl = async (url, options = {}) => {
//       const fullOptions = {
//         SM_API_KEY: smmryAPIKey,
//         SM_URL: url,
//         SM_LENGTH: 5,
//         ...options
//       };

//       const response = await axios.get(`${API_URL}?${qs.stringify(fullOptions)}`);
//       return response.data; // Return the response data directly
//     };

//     const summarizedData = await summarizeUrl(url);
//     return summarizedData.sm_api_content; // Return the summarized content
//   } catch (error) {
//     console.error(`Error in fetchSummary: ${error}`);
//     return ''; // Return empty string in case of an error
//   }
// }
async function fetchSummary(url) {
  for (let apiKey of smmryAPIKeys) {
    try {
      const fullOptions = {
        SM_API_KEY: apiKey,
        SM_URL: url,
        SM_LENGTH: 5,
        SM_WITH_BREAK: true
      };

      const response = await axios.get(`${API_URL}?${qs.stringify(fullOptions)}`);

      if (response.data && response.data.sm_api_content) {
        const correctedContent = response.data.sm_api_content.replace(/\[BREAK\]/g, '\n\n').trim();
        return correctedContent; // Return the corrected summarized content
      } else {
        console.error(`Empty or missing response data from the API for URL: ${url}`);
        // Don't return; try the next key
      }
    } catch (error) {
      console.error(`Error with API Key ${apiKey}: ${error}`);
      // Don't return; try the next key
    }
  }
  return ''; // Return empty string if all keys fail
}



function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function translateText(text, targetLanguage) {
  try {
    let [translations] = await translate.translate(text, targetLanguage);
    return Array.isArray(translations) ? translations[0] : translations;
  } catch (error) {
    console.error(`Error in translateText: ${error}`);
    return '';
  }
}


async function transliterateText(text,toScript) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "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";//process.env.OPENAI_API_KEY; 
    try {
        const response = await axios.post(OPENAI_API_ENDPOINT,
            {
                "model": "gpt-3.5-turbo-1106", // Replace with your desired model
                "messages": [
                    {
                        "role": "user",
                        "content": `Please transliterate the text to ${toScript} script: ${text}`

                    }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.data.choices && response.data.choices.length > 0) {
            return response.data.choices[0].message.content.trim();
        } else {
            return text; // Return original text if no paraphrase is provided
        }
    } catch (error) {
        console.error(`Error in paraphraseText: ${error}`);
        return text; // Return original text in case of an error
    }
}


//fetchAndStoreSummary();
// module.exports = ()=>console.log("new logic noop");

async function getNewsFromDb() {
  const newsItems = await TestaNews.find({ is_processed: 'false' });
  return newsItems;
}
async function azureTtsSynthesis(text, lang, outputFile) {
    const speechConfig = sdk.SpeechConfig.fromSubscription('244c9d3843e244fba5a785f5b86ec340', 'eastus');
    speechConfig.speechSynthesisVoiceName = {
        "am": "am-ET-AmehaNeural",
        "or": "so-SO-MuuseNeural", // Placeholder: Replace with actual voice name if available
        "tr": "am-ET-AmehaNeural", // Placeholder
        "so": "so-SO-MuuseNeural" // Placeholder
    }[lang]; 

    const audioConfig = sdk.AudioConfig.fromAudioFileOutput(outputFile);
    const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

    return new Promise((resolve, reject) => {
        synthesizer.speakTextAsync(text, result => {
            synthesizer.close();
            if (result) {
                resolve(outputFile);
            } else {
                reject(new Error("Speech synthesis was canceled."));
            }
        }, error => {
            synthesizer.close();
            reject(error);
        });
    });
}

async function processNewsItems() {
    const newsItems = await getNewsFromDb();
    
    for (const item of newsItems) {
        const newsId = item.id.toString(); // Assuming MongoDB ObjectId for newsId
        let processed = false; // Flag to check if any language was processed

        const languages = ['am', 'or', 'tr', 'so'];
        
        for (const lang of languages) {
            const fieldName = `summarized_${lang}`;
            const transcript = item[fieldName];
            
            if (transcript) {
                const outputFile = path.join(__dirname, `${newsId}_${lang}.mp3`);
              
                try {
                   const voice= await azureTtsSynthesis(transcript, lang, outputFile);
                   






                    console.log(`Successfully processed ${fieldName} for news item with ID ${newsId}`);
                   processed = true;
                    uploadToAzure(outputFile);

                } catch (error) {
                    console.log(`Failed to process ${fieldName} for news item with ID ${newsId}: ${error}`);
                }
            }
        }

        if (processed) {
            await markNewsItemAsProcessed(newsId);
        }
    }
}
async function markNewsItemAsProcessed(newsId) {
  try {
      await TestaNews.updateOne({ id: newsId}, { $set: { is_processed: 'true' } });
      console.log(`News item ${newsId} marked as processed.`);
  } catch (error) {
      console.error('Error updating the news item:', error);
  }
}

async function uploadToAzure(filePath) {
    require('dotenv').config()
  const connectionString ="DefaultEndpointsProtocol=https;AccountName=testanewsstorage;AccountKey=Kg0RBVr0vlwnNQ6wkgy7oRSlx96w2TImnfuz0FbWjfkMcVdZHYDK6FDFQMISrSwCea0se1ICSVpv+AStq4Pu9g==;EndpointSuffix=core.windows.net"; 
  const containerName = "transcriptions"

  const blobName = filePath.split(/[/\\]/).pop();


  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    const fileBuffer = await fs.readFile(filePath);
    const uploadResponse = await blockBlobClient.upload(fileBuffer, fileBuffer.length);
    

    if (uploadResponse._response.status === 201) {
      console.log("Successfully uploaded to Azure:", filePath);

      // Delete the local file
      await fs.unlink(filePath);
      console.log("Successfully deleted local file:", filePath);

      return true;
    } else {
      console.log("Error uploading file:", uploadResponse._response.status, uploadResponse._response.bodyAsText);
      return false;
    }
  } catch (error) {
    console.log("Error uploading file:", error);
    return false;
  }
}
