const axios = require('axios');
const cheerio = require('cheerio');
const analyseNews = require("./azure_analyse")
const translateText = require("./translation")          
async function extractContentFromURL(url) {
    console.log(`received url ${url}`)
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        $('header, .header, footer, .footer , style    ').remove();
      
        $('source , .source , .base_1emrqjj').each((i, el) => {
            $(el).remove();
        });
        $('img').each((i, el) => {
            $(el).remove();
        });

     console.log('article content is   . . . . here')
        // const articleContent = $('article').text().trim()
        const articleContent =  $('article').text()
        
        // .replace(/https?:\/\/[^\s]+/g, '')
      console.log(articleContent)
        //     console.log('sending text to be translated')
        const analysedContent = await analyseNews(articleContent)
        if (analysedContent == false) {
            return false
        }else{
            // res = await translateText("en", analysedContent,['am' , 'ti' , 'so'  ])
            const contentList  = []
            for (let i = 0; i< analysedContent.length; i++) {
            //   const element = array[i];
            const contentElement = analysedContent[i].content
            const imageLink  = analysedContent[i].imageLink
            const translatedContent=  await translateText("en",contentElement,['am' , 'ti' , 'so'  ])
            const listObj  = {
                imageLink  : imageLink, 
                translatedContents : translatedContent    
            }
            contentList.push(listObj)
               
            }
        //   await analyseNews(articleContent)
        console.log(`returned ${res.amharic.slice(0 , 20)}} ... `)
        return {
            res : res,
            content : contentList
        }
        }
    } catch (error) {
        console.error("Error fetching or parsing the URL:", error.message);
        return null;
    }
}


module.exports = extractContentFromURL;