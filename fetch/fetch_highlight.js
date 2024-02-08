// const axios = require('axios');
// const {highlight , teamNames: teamNames} = require('../schemas/highlight_schema');
// const  transliterateToAmharic = require('./team_transliteration')
// require('dotenv').config();



  
// async function fetchHightlight(){
   
//     try {
//         const response = await axios.get(process.env.HIGHLIGHT_ENDPOINT);
//         if(response.status === 200){
//             highlightsList =  response.data['tvhighlights'];

//             for (let i = 0; i < highlightsList.length; i++) {
//                 const element = highlightsList[i];
//                 const teamNameList = extractTeamNames(element.strEvent);
                
                 

//                 var teamOneNames = {
//                     englishName : teamNameList[0] , 
//                     amharicName : teamNameList[0] , 
//                     somaliName : teamNameList[0] ,
//                     oromoName : teamNameList[0]

//                 }
//                 var teamTwoNames = {
//                     englishName : teamNameList[1] , 
//                     amharicName : teamNameList[1] , 
//                     somaliName : teamNameList[1] ,
//                     oromoName : teamNameList[1]
//                 }

//                 result = await transliterateToAmharic(teamOneNames)
//                 console.log(`result from translation is ${result}`)
//                 if(result){
//                     teamOneNames.amharicName = result.AmharicName
//                     teamOneNames.oromoName = result.OromoName
//                     teamOneNames.somaliName = result.SomaliName
//                 }
//                 resultTwo = await transliterateToAmharic(teamTwoNames)
//                 console.log(`result from translation is ${resultTwo}`)
//                 if(resultTwo){
//                     teamTwoNames.amharicName = resultTwo.AmharicName
//                     teamTwoNames.oromoName = resultTwo.OromoName
//                     teamTwoNames.somaliName = resultTwo.SomaliName
//                 }


//                 try{
                    
//                     const teamOneNamesData = await teamNames.create({englishName : teamOneNames.englishName} , teamOneNames , {upsert : true , new : true})
//                     const teamOneId = teamOneNamesData._id
//                     const teamTwoNamesData = await teamNames.create({englishName : teamTwoNames.englishName} , teamTwoNames , {upsert : true , new : true})
//                     const teamTwoId = teamTwoNamesData._id
//                     const highlightData = await highlight.create({id : element.idEvent} , {
//                         teamOneName : teamOneId , 
//                         teamTwoName : teamTwoId , 
//                         leagueName : element.strLeague , 
//                         matchDate : element.dateEvent , 
//                         photo : element.strThumb , 
//                         video : element.strVideo , 
//                         id : element.idEvent
//                     } , {upsert : true , new : true})

//                     console.log(`successfuly saved highlights data!`)
//                 }catch(error){
//                     console.log(error)
//                 }}
//         }
//     } catch (error) { }}

// function extractTeamNames(matchString) {
//     // Split the input string by " vs " (with spaces)
//     const parts = matchString.split(" vs ");
    
//     // Trim the team names
//     const teamNames = parts.map(part => part.trim());
    
//     return teamNames;
//     }


//     module.exports = fetchHightlight
