const User = require('../schemas/user_model'); // Import the User model
const Podcast = require('../schemas/podcast_schema'); // Import the Podcast model
const isPodcastCurrentlyLive = require('../functions/isPodcastLive'); // Import the utility function

async function notifyUserIfFavoritePodcastIsLive(userId, socket) {

    const user = await User.findOne({id : userId});
    if (!user) return;

    for (const podcastId of user.favouritePodcast) {
        const podcast = await Podcast.findOne({id : podcastId});
        if (!podcast) continue;
          
        
        const name = podcast.name;
        const programName = podcast.program;
        const station  = podcast.station
        const program = `🔴 ${programName} - ${station}`
        const imageAddress = `https://testanodebackend.azurewebsites.net/${podcast.avatar}`
        console.log(imageAddress)
        const notificationPayload = {
            'event': 'podcast',
            'event-am': name,
           
          
            'event-or':name,
            'event-en': name , 
    
            'event-am'  :name , 
            'event-si' : name ,  
            'event-or'  : name , 
            'event-tr' : name  ,
    
    
            'team': program  ,
            'am' : program  ,
            'tr' :program  ,
            'si' : program  ,
            'or' : program  ,
    
            'image': imageAddress,
            'type': 'podcast'   }

        // Check if the podcast is currently live
        try{
            if (isPodcastCurrentlyLive(podcast)) {

                socket.emit('ev', notificationPayload);
            }
        }catch(e){
            console.log(e)
        }
    } 
}



module.exports = notifyUserIfFavoritePodcastIsLive;