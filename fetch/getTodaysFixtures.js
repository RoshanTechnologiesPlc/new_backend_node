const Match = require("../schemas/match_schema")
async function getTodaysMatches(){
const today = new Date(); // Create a new Date object representing the current date and time
const year = today.getFullYear(); // Get the current year as a 4-digit number
const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Get the current month (0-11) and format it as a 2-digit string
const day = today.getDate().toString().padStart(2, '0'); // Get the current day of the month and format it as a 2-digit string

// // Combine the components to create the date string in the format "YYYY-MM-DD"
const dateString = `${year}-${month}-${day}`;
 
// const today = new Date(); // Create a new Date object representing the current date and time
// const yesterday = new Date(today); // Create a copy of the current date

// // Subtract one day from the copy to get yesterday's date
// yesterday.setDate(today.getDate() - 1); 

// const year = yesterday.getFullYear(); // Get the year of yesterday
// const month = (yesterday.getMonth() + 1).toString().padStart(2, '0'); // Get the month of yesterday
// const day = yesterday.getDate().toString().padStart(2, '0'); // Get the day of yesterday

// // Combine the components to create the date string in the format "YYYY-MM-DD"
// const dateString = `${year}-${month}-${day}`;
  try{
//     const spainfixtures =  await Match.find({  "dateOnly": dateString , "league.id" : 140} , {"teams.home.name" : 1 , "teams.away.name"   : 1, homeTeam : 1 ,  awayTeam  : 1 , _id : 0 , id : 1 , 
//     status : 1  , date : 1 }).sort({dateOnly: -1}).limit(100).populate("homeTeam").populate('awayTeam')
//   const engfixtures =  await Match.find({  "dateOnly": dateString , "league.id" : 39} , {"teams.home.name" : 1 , "teams.away.name"   : 1, homeTeam : 1 ,  awayTeam  : 1 , _id : 0 , id : 1 , 
//   status : 1  , date : 1}).sort({dateOnly: -1}).limit(100).populate("homeTeam").populate('awayTeam')

// const champfixtures =  await Match.find({  "dateOnly": dateString , "league.id" : 2} ,{"teams.home.name" : 1 , "teams.away.name"   : 1, homeTeam : 1 ,  awayTeam  : 1 , _id : 0 , id : 1 , }).sort({dateOnly: -1}).limit(100).populate("homeTeam").populate('awayTeam')
// const fixtures = [...spainfixtures , ...engfixtures , ...champfixtures] 
const ourleagueIds = [39, 45, 2, 363, 140, 61, 135, 78, 3, 307, 48, 29, 32, 30, 31, 34, 33, 41, 42, 40, 5, 6, 4, 88, 144, 179, 288, 203, 94, 9, 7, 22, 1043, 17, 18, 12, 20, 19, 141, 136, 138, 305, 145, 89, 79, 80, 62, 63, 71, 72, 75, 128, 129, 130, 253, 255, 489, 233, 570, 180]


  const leagueMatches = await Match.find({  "dateOnly": dateString , "league.id" :{ $in  : ourleagueIds}} ,{"teams.home.name" : 1 , "teams.away.name"   : 1, homeTeam : 1 ,  awayTeam  : 1 , _id : 0 , id : 1 , 
  status : 1  , date : 1}).sort({dateOnly: -1}).limit(100).populate("homeTeam").populate('awayTeam')

return leagueMatches
 
     
  }catch(e){  
    console.log(e)
    return false
  };
}


module.exports = getTodaysMatches;