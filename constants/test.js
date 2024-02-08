const axios = require("axios")


async function fetchDataAndPost() {
  try {
    const response = await axios.get('https://testabackend.azurewebsites.net/about/');
    console.log(response.headers)
    const csrfCookie = response.headers['set-cookie'].find(cookie => cookie.startsWith('csrftoken='));
    const csrfToken = csrfCookie.split(';')[0].split('=')[1];

    // Now make the POST request
    const postResponse = await axios.post('https://testabackend.azurewebsites.net/speech/', {
      // Your POST data here
         
      language: "am" , newsId  : "mmm" , text : ""
    }, {
      headers: {
        'X-CSRFToken': csrfToken
      }
    });

    console.log('Successfully made POST request:', postResponse.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchDataAndPost();
