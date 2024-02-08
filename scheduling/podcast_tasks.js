const User = require('../schemas/user_model'); // Import the User model

// const {io} = require("../app")

const Podcast = require('../schemas/podcast_schema'); // Import the Podcast model
const userSockets = require('./../socket/userSocket')
module.exports = function(agenda , io ) {
    

    agenda.define('notify podcast live', async job => {
        console.log('notify podcast live job running')
        const { podcastId } = job.attrs.data; 
        console.log('podcastId',podcastId)
        // Fetch interested users
        const interestedUsers = await User.find({ favouritePodcast: { $in: [podcastId] } });
        console.log('interestedUsers', interestedUsers)
        
       try{
        const podcast = await Podcast.findOne({id: podcastId});
        
        const name = podcast.name;
        const programName = podcast.program;
        const station  = podcast.station
        const program = `🔴 ${programName} - ${station}`


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
    
            'image': "",
            'type': 'podcast',
       
        }

        
         // Notify these users
         interestedUsers.forEach(user => {
            const socketId = userSockets.get(user.id);
            console.log('socketId',socketId)
            if (socketId ) {
                console.log('sending....')
                console.log(io)
                // io.sockets.connected[socketId].emit('ev', notificationPayload);
                io.to(socketId).emit("ev",notificationPayload);
                console.log('sent')
            }
        });


       }catch(e){
        console.log(e)
       }
    });
};
