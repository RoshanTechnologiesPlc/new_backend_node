const axios  = require('axios');
async function fetchTwitterFeed(rssLink){
    try{
        const response = await axios.get(rssLink);

    

        if (response.status === 200) {
            const feed = await parser.parseString(response.data);
            console.log(feed)

            
        } else {
            
        }
    }catch(e){
        console.log(`error happened while fetching twitter feed ${e}`)
    }
}

module.exports = fetchTwitterFeed