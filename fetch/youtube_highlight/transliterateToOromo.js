
const axios = require('axios');

async function transliterateToOromo(description) {
    console.log(" --- received this team")
    console.log(description);    

    const OPENAI_API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
    const OPENAI_API_KEY = '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'; // Replace with your actual API key

    try {
        const response = await axios.post(OPENAI_API_ENDPOINT,
         {
            "model": "gpt-4-0125-preview",
            "messages": [{"role": "user", "content": `
            the given description is about the highlight video of a football match ,
            analyse the two teams name from the description,  return the transliteration of the analysed team name for Afaan oromo and dont for get to include there result between them 
            don't add any explanations and don't translate the names too! don't say club.EnglishName! just return the translation! don't add \ n too!!!
            example: "Stalemate with the Seagulls | Brighton 0-0 Wolves | Highlights", return "Biraayitan 0-0 Woolvis"
            if the result isn't mentioned just return the team names like teamOneName - teamTwoName. 
                        description : ${description}         
            `}], 
            "temperature": 0.1
          },
            { 
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.status === 200) {
            const responseObject = response.data.choices[0].message.content;
            console.log(`exactly returned ${JSON.stringify(responseObject)}`);
            return responseObject; 
        } else {
            console.log("Response status is not 200");
            return false;
        }
    } catch (error) { 
        console.error("Error transliterating text: " + error);
        return false;
    }
}

module.exports = transliterateToOromo;