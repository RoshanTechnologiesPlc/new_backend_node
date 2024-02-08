const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const endpoint = 'https://api.cognitive.microsofttranslator.com';
const subscriptionKey = '456178047f9640d4b2b2ee1dfc1d10ac';
const apiVersion = '3.0';
const region = 'eastus';  

const transliterateText = async (text, fromScript, toScript) => {
  const url = `${endpoint}/transliterate?api-version=${apiVersion}&language=ar&fromScript=${fromScript}&toScript=${toScript}`;

  const headers = {
    'Ocp-Apim-Subscription-Key': subscriptionKey,
    'Ocp-Apim-Subscription-Region': region,
    'Content-Type': 'application/json' ,
    'X-ClientTraceId': uuidv4().toString()
  };

  const body =[ {
    'Text': text
  }];

  try {
    const response = await axios.post(url, body, { headers: headers });
    return response.data[0].text;
  } catch (error) {
    console.error('Error transliterating text:', error);
  }
};

transliterateText('hello', 'Latn', 'Arab')
  .then(transliteration => console.log(transliteration))
  .catch(error => console.error(error));
