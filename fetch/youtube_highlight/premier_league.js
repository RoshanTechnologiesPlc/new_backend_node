// const axios = require(`axios`)
// require('dotenv').config()

// const transliterateToAmharic = require("./transliterate_highlight")
// const {highlight ,teamNames  , playlist} = require('../../schemas/highlight_schema');
// const league = require("../../schemas/leagueNamesSchema")
// async function fetcHighlightsfromYoutube(playlistId , leagueId){

   
//     try {
//        const API_KEY = process.env.YOUTUBE_API_KEY

//        const PLAYLIST_ID = playlistId
//         url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
//         const response = await axios.get(url)
//         if(response.status === 200){
//             const highlightsList = response.data['items']
          
//             for (let i = 0; i < highlightsList.length; i++) {

              
//                 const element = highlightsList[i];

//                 const doesHighlightExist = await highlight.findOne({video : element.snippet.resourceId.videoId})

//                 if(doesHighlightExist){
//                     console.log(`highlight already exists`)
//                     continue
//                 }
//                var teamOneName = {
//                     englishName : "" , 
//                     amharicName : "" ,
//                     oromoName : "" ,
//                     somaliName : ""

//                 }
//                var teamTwoName = {
//                     englishName : "" , 
//                     amharicName : "" ,
//                     oromoName : "" ,
//                     somaliName : ""
                    
//                 }
//                 const result = await transliterateToAmharic(element.snippet.title)

//                 if(result!= false){
//                     try {
//                     teamOneName.englishName = result[0].EnglishName 
//                     teamOneName.amharicName = result[0].AmharicName 
//                     teamOneName.oromoName = result[0].OromoName 
//                     teamOneName.somaliName = result[0].SomaliName 
//                     teamTwoName.englishName = result[1].EnglishName 
//                     teamTwoName.amharicName = result[1].AmharicName 
//                     teamTwoName.oromoName = result[1].OromoName 
//                     teamTwoName.somaliName = result[1].SomaliName     } catch (error) {
//                         console.log(`error occured while trying to get team names from the description ${error}`)
//                     }


//                     try {
//                         const   teamOne =    await teamNames.findOneAndUpdate({englishName : teamOneName.englishName} , teamOneName , {upsert : true , new : true})
//                         const teamOneId = teamOne._id
//                         const   teamTwo =    await teamNames.findOneAndUpdate({englishName : teamTwoName.englishName} , teamTwoName , {upsert : true , new : true})
//                         const teamTwoId = teamTwo._id
                      
//                         const channelId = element.snippet.channelId
//                         const channelName = element.snippet.channelTitle
//                         const playlistId = element.snippet.playlistId
//                         const photo = await getProfilePicture(channelId)

//                         const playlistData = await playlist.findOneAndUpdate({playlistId : playlistId} , {channelName ,playlistId , channelId  , photo } , {upsert : true , new : true})
//                         const playlistObjectId = playlistData._id
//                         const highlightsData = {
//                             photo : element.snippet.thumbnails.medium.url ,
//                             matchDate : element.snippet.publishedAt ,
//                             description : element.snippet.title ,
//                             video : element.snippet.resourceId.videoId  , 
//                             teamOneName : teamOneId ,
//                             teamTwoName : teamTwoId  , 
//                             league : leagueId  , 
//                             playlist : playlistObjectId , 
//                            position  : element.snippet.position
//                         }
//                         const highlightData = await highlight.findOneAndUpdate({video : element.snippet.resourceId.videoId} , highlightsData , {upsert : true , new : true})
//                         console.log('highlights data inserted successfully!')
//                     } catch (error) {
//                        console.log(`error while inserting highlights data ${error}`) 
//                     }  }  }
//         }
//     } catch (error) {
//         console.log(`error while fetching highlight ${error}`)
//     }
// }


// async function getProfilePicture(channelId){
//     try {
//         const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.YOUTUBE_API_KEY}`)
//         if(response.status === 200){
//             const channel = response.data
//             return channel.items[0].snippet.thumbnails.default.url
//         }else{
//             return ""
//         }
//     } catch (error) {
//         console.log(`error`)
//         return ""
//     }
// }


// module.exports =  ()=>console.log("highlight noop");// fetcHighlightsfromYoutube