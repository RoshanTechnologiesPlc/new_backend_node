const axios = require('axios');
async function analyseNews(article) {
//   console.log(" --- recieved this article")
// console.log(article)    

const OPENAI_API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    try {
        const response = await axios.post(OPENAI_API_ENDPOINT,
            
          
        {
            "model": "gpt-3.5-turbo-1106",
            "messages": [{"role": "user", "content": `
            for the article below, return summarised article in not less than 100 words, you should return it as follows : 
                {
                    title : 'paraphrased format of the title of the article', 
                    description : SHORTENED DESCRIPTION OF THE ARTICLE, 
                    content : FULL SUMMARIZED ARTICLE HERE
                }

            don't add any explanations!  just return the object! don't add \ n too!!!
            article : ${article}          
            `}]
            , 
            "temperature": 0.1
          },
        { 
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
         if (response.status == 200) {
          console.log(`returned the following ${response.data.choices[0].message.content}`)
          console.log(JSON.stringify(response.data.choices[0].message.content))
          let jsonObject = eval('(' + response.data.choices[0].message.content + ')');
          return jsonObject; 
         } else {
          return false
         }
    } catch (error) { 
        console.error("Error transliterating text:", error);
        return false
    }
}

// Example usage:
// transliterateToAmharic("Hello, how are you?").then(() => {
//     console.log("Transliteration complete.");
// });

// analyseNews("he has been in touch with tennis superstar Carlos Alcaraz. The Spanish grand slam champion is a famous Real Madrid fan but Pedri told Men's Health: ")


module.exports = analyseNews