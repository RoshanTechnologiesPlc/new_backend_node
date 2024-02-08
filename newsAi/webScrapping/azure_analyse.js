const { OpenAIClient , AzureKeyCredential } = require("@azure/openai");
const { JSDOM } = require('jsdom');
async function summarizeArticle(article , long){
  if (article == null || article == undefined || /^\s*$/.test(article)== true) {
    return ""
  }
  const endpoint = "https://testachatgpt.openai.azure.com/";
  const client = new OpenAIClient(endpoint, new AzureKeyCredential("61e4026271cc479382e418e909a9f658"));

  const textToSummarize = `
  
  ${article}
 `; 

  const summarizationPrompt = long == true ? 
  [`
  here below is news article i get from rss, i want you to summurize it in not less than 300 words, try to paraphrase your summarizations using words that are easier to be translated.
  don't add any explanations from the prompt words as am taking your response directly.  only return what you are told, don't add any explanations since the content is going to be stored on the database.
  .... if no text is provided just return an empty string

    ${textToSummarize}
   
  `] : 
  [`
  here below is news article i get from rss, i want you to summurize it , try to paraphrase your summarizations using words that are easier to be translated.
  don't add any explanations from the prompt words as am taking your response directly.  only return what you are told, don't add any explanations since the content is going to be stored on the database.
  ....  if no text is provided just return an empty string

    ${textToSummarize}
   
  `];

      const messages = [{"role": "user", "content": ` ${summarizationPrompt}         
                `}]

 
 
  const deploymentName =  "testaGPT35"; 

  try {
    console.log(`Calling getCompletions... `)
    const { choices } = await client.getChatCompletions(deploymentName, messages); 
    // console.log(JSON.stringify(choices))
      const completion = choices[0].message.content;
      // console.log(`analysed content is ${completion}}`);
      
      
      return completion
  } catch (error) {
    console.log(`error when calling getCompletions: ${error}`)
    return false;
  }
}


module.exports = summarizeArticle

