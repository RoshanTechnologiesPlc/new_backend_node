const axios = require('axios');
const PostModel = require('../../schemas/post_model')
async function fetchInstagram(link , image){
    const response =  await axios.get(link)

    if(response.status === 200){
        const items = response.data.items

        const feeds = extractInstagramData(items)

        for(let i = 0 ; i < feeds.length ; i++){
            const feed = feeds[i]
            const postObject = {
                contentText: feed.postContent,
                image: image,
                authors: feed.username,
                datePublished: feed.datePublished,
                accountName: feed.accountName,
                previewImage: feed.imageUrl,
                source: "instagram",
            }

            
         const post =    await PostModel.findOneAndUpdate(
                { image: feed.imageUrl , source : "instagram"  },
                postObject,
                { upsert: true , new : true }

            );

            console.log(post)
        }

       
        
    }
}

function extractInstagramData(feed) {
    return feed.map(item => ({
        datePublished: item.date_modified,
        username: item.author.name,
        accountName: item.title.split(' - ')[1].split(' - ')[0], // Assuming the account name is in the title
        imageUrl: item.attachments[0].url, // Assuming the image URL is the first in attachments
        postUrl: item.url,
        postContent: item.content_html.replace(/<p\/>/g, '')
        .replace(/<[^>]*>/g, '')
        .replace(/\n/g, ' ') // Removes newline characters
        .replace(/\s+/g, ' ')  // Removes <p/> and other HTML tags
    }));
}



module.exports = fetchInstagram