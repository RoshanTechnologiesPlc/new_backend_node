const axios = require('axios');
async function transliterateToAmharic(Team) {
  console.log(" --- recieved this team")
//console.log(Team)    
 
const OPENAI_API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    try {
        const response = await axios.post(OPENAI_API_ENDPOINT,
         {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": `for the club given , return the transliteration of the  englishName for amharic   , somali and afan oromo, example : 
             for  {"EnglishName" : "Arsenal" } , return {
            "EnglishName": "Arsenal",
            "AmharicName": "አርሴናል",
            "OromoName": "Aarsanaal", 
            "SomaliName" : "Arsanaal" } 
            don't add any explanations! don't say club.EnglishName! just return the object! don't add \ n too!!!
            club : ${Team.englishName != null ? Team.englishName : Team.EnglishName}          
            `}], 
            "temperature": 0.1
          },
        { 
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        // console.log(response)
         if (response.status == 200) {
          // console.log(`returned the following ${response.data.choices[0].message.content}`)
          // console.log(JSON.stringify(response.data.choices[0].message))
          // console.log(response)
          let jsonObject = eval('(' + response.data.choices[0].message.content + ')');
          console.log(`exactly returned ${JSON.stringify(jsonObject)}`)
          return jsonObject; 
         } else {
          // console.log(response)
          return false
         }
    } catch (error) { 
        console.error("Error transliterating text: "  + error);
        console.log(response)
        return false
    }
}

// Example usage:
// transliterateToAmharic("Hello, how are you?").then(() => {
//     console.log("Transliteration complete.");
// });

module.exports = transliterateToAmharic




// const { OpenAIClient , AzureKeyCredential } = require("@azure/openai");
// const { JSDOM } = require('jsdom');
// async function transliterateToAmharic(Team) {
//   console.log(" --- recieved this team")
//   console.log(Team)
//   const endpoint = "https://testachatgpt.openai.azure.com/";
//   const client = new OpenAIClient(endpoint, new AzureKeyCredential("61e4026271cc479382e418e909a9f658"));
// // console.log(article)


//     // extractContentAndImages(article)
//     const messages = [{"role": "user", "content": `for the club given , return the transliteration of the  englishName for amharic   , somali and afan oromo, example : 
//               for  {"EnglishName" : "Arsenal" } , return {
//                 "EnglishName": "Arsenal",
//                 "AmharicName": "አርሴናል",
//                 "OromoName": "Aarsanaal",
//                 "SomaliName" : "Arsanaal"
               
//               } 
//                 don't add any explanations! don't say club.EnglishName! just return the object! don't add \ n too!!!
//                 club : ${Team.englishName}          
//                 `}]

 
//   // console.log(`Input: ${summarizationPrompt}`);
 
//   const deploymentName =  "testaGPT35"; 
  
//   try {
//     console.log(`Calling getCompletions... `)
//     const res = await client.getChatCompletions(deploymentName, messages); 
//     console.log(res)
//     const choices = res.choices;

//     const completion = choices[0].message.content;
//       console.log(`${completion} -- - - -  - -  - - - `);
//       console.log(choices)
      
//       console.log(`the above is chatGPT response ${completion.length}`)
//       console.log(JSON.parse(completion))
//       //   // const completed  = parseToObjectArray(extractListFromString(completion))
//     //   // console.log(`------ the below is extracted from the above response `) 
//     //   // const extracted = extractContentsAndImages(completion)
//     //   // console.log(extracted)
//     //   // console.log(`the above is extracted `)
//     //   // return extracted
//     //   return completion
//     return JSON.parse(completion)
//   } catch (error) {
//     console.log(`error when calling getCompletions: ${error}`)
//     throw error
//     // return false
//   }
// }


// module.exports = transliterateToAmharic

