const axios = require('axios');
async function transliterateLeagues(leagueName) {
  console.log(" --- recieved this league" )
  
 
const OPENAI_API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    try {
        const response = await axios.post(OPENAI_API_ENDPOINT,
         {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": `for the league name given , return the transliteration of the  englishName for amharic   , somali and afan oromo, example : 
             for  {"EnglishName" : "England Premier league" } , return {
            "EnglishName": "England Premier league",
            "AmharicName": "የእንግሊዝ ፕሪምየር ሊግ",
            "OromoName": "Primiyar liggi ingilizii", 
            "SomaliName" : "England Premier League" } 
            don't add any explanations! don't say league.EnglishName! just return the object! don't add \ n too!!!
            league : ${leagueName}          
            `}], 
            "temperature": 0.1
          },
        { 
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
         if (response.status == 200) {
        
          let jsonObject = eval('(' + response.data.choices[0].message.content + ')');
          console.log(`exactly returned ${JSON.stringify(jsonObject)}`)
          return jsonObject; 
         } else {
       
          return false
         }
    } catch (error) { 
        console.error("Error transliterating text: "  + error);
        console.log(response)
        return false
    }
}



module.exports = transliterateLeagues



