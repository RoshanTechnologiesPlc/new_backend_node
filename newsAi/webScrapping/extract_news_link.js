const axios = require('axios');
const xml2js = require('xml2js');
const extractContentFromURL = require('./90minutes')
const translateText = require('./translation')
const uuid = require('uuid');
const news = require('../../schemas/news_model')
const newsContentSchema = require("../../schemas/newsContentSchema")
const SomaliSynthesis = require('../../speech_synthesis/somali_oromo')
const AmharicSynthesis = require('../../speech_synthesis/amharic_tigrigna')
const analyseNews = require('./azure_analyse')
const url = "https://www.90min.com/posts.rss";
const addNewsFile = require('../../fetch/fetch_current_news')
const translateOromoText = require('./google_translate') 
const processAndStoreNews = require("./news_logic")
// const { contains } = require('cheerio/lib/static');
async function fetchRssDataFor90Minutes() {
 
  try {
    const response = await axios.get(url);
    const xmlText = response.data;
    const parser = new xml2js.Parser({ explicitArray: false });
    const result = await parser.parseStringPromise(xmlText);
    const items = result.rss.channel.item;
    console.log(`items length is ${items.length}`)
    const data = [];
    items.forEach(item => {
      const link = item.link;
      const imageLink = item['media:thumbnail']?.['$']?.url;
      const title = item.title;
      const description = item.description;
      var pubdate = item.pubDate;
      const date = new Date(pubdate);
      console.log(`pub date is ${pubdate}} and date is ${date} and date.getTime() is ${date.getTime()} and isNaN(date.getTime()) is ${isNaN(date.getTime())}`)
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        const now = new Date();  // Create a new Date object for the current time
        pubdate = now.toISOString(); 
       
      }else{
        pubdate =  date.toISOString(); 
        console.log(`pub date is updated from right here`)
      }
    
      // Convert the Date object to an ISO string
      
    
     
      data.push({ link, imageLink, description, title , pubdate });
    });
    // data.length
    for (let i = 0; i  <data.length; i++) {

        const element = data[i];
      const res =   await processAndStoreNews(element)
      console.log('res is ', res  , ` and i is ${i}`)

     }
  } catch (error) {
    console.error("Error fetching RSS data:", error);
    return [];
  } 
}





module.exports = fetchRssDataFor90Minutes; 