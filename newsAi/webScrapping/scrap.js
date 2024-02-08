const axios = require('axios');
const cheerio = require('cheerio');

async function extractContentFromURL(url) {
    try {
        // Fetch the content of the URL using axios
        const response = await axios.get(url);

        // Load the fetched HTML content into Cheerio
        const $ = cheerio.load(response.data);

        // Extract the title for reference
        const title = $('title').text();

        // Find the target element
        const targetElement = $('.tdb-block-inner.td-fix-index');

        // Extract the first child <p> and <blockquote> elements
        const firstP =  targetElement.children('p').map((i, el) => $(el).text()).get();
        const blockquotes = targetElement.find('blockquote').map((i, el) => $(el).text()).get();

        // Return the extracted data
        return {
            title: title,
            firstP: firstP,
            blockquotes: blockquotes
        };
    } catch (error) {
        console.error("Error fetching or parsing the URL:", error.message);
        return null;
    }
}

// Example usage
const url = 'https://www.90min.com/posts/cristiano-ronaldo-failing-persuade-david-de-gea-join-al-nassr';  // Replace with the desired URL
extractContentFromURL(url).then(data => {
    if (data) {
        console.log( data.firstP);
        console.log(data.blockquotes);
    }
});
