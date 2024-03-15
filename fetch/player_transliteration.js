const axios = require('axios');

async function transliteratePlayers(playerName) {
    const OPENAI_API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
    const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // Ensure to replace with your actual API key

    try {
        const response = await axios.post(OPENAI_API_ENDPOINT, {
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: `for the name given, return the transliteration of the English name for Amharic Geʽez Script, Somali, and Qubee Afaan Oromoo , example: for "Alex John", return {
                    "EnglishName": "Alex John",
                    "AmharicName": "አሌክስ ጆን",
                    "OromoName": "Aleks Jon", 
                    "SomaliName": "Alex Jon"
                } don't add any explanations! don't say player.EnglishName! just return the object! don't add \\n too!!! player: ${playerName}`
            }],
            temperature: 0.1
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status == 200 && response.data.choices[0].message.content.trim() !== "") {
            let jsonObject = JSON.parse(response.data.choices[0].message.content);
            return jsonObject;
        } else {
            // In case of an unsuccessful API call or unexpected response, return the original playerName
            return {
                "EnglishName": playerName,
                "AmharicName": playerName,
                "OromoName": playerName,
                "SomaliName": playerName
            };
        }
    } catch (error) {
        console.error("Error transliterating text: " + error);

        // In case of an exception, return the original playerName
        return {
            "EnglishName": playerName,
            "AmharicName": playerName,
            "OromoName": playerName,
            "SomaliName": playerName
        };
    }
}

module.exports = transliteratePlayers;
