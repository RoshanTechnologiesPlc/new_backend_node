const axios = require('axios');
// const { response } = require('../../appp');
require('dotenv').config();
// const GOOGLE_API_KEY = 'AIzaSyAftYe6l5tJYFSoSlOptMDbpiUau-EfSEk';  // Replace with your actual API key

async function translateOromoText(text) {
    if (text == null || text == undefined || text == "") {
        return ""
    }
    const endpoint = `https://translation.googleapis.com/language/translate/v2`;
    const params = {
        q: text,
        source: 'en',
        target: 'om',  // Afan Oromo language code
        key: process.env.GOOGLE_API_KEY
    };

    try {
        const response = await axios.post(endpoint, {}, { params });
        
        const translatedText = response.data.data.translations[0].translatedText;
        return translatedText;
    } catch (error) {
        console.error(`Error translating text: ${error}`);
        // console.log(response)
        // throw error;
        return text
    }
}

// Test the function
// (async () => {
//     const textToTranslate = 'Hello, how are you?';
//     const translated = await translateText(textToTranslate);
//     console.log(`Original: ${textToTranslate}`);
//     console.log(`Translated: ${translated}`);
// })();

module.exports = translateOromoText;