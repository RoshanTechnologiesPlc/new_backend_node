const User = require('../../schemas/user_model')
const TeamDataSchema = require('../../schemas/team_data')
const PlayerName = require('../../schemas/player_names')
const News = require('../../schemas/news_model')

module.exports = async (req, res) => {
    console.log('for you page is requested...!')
    const pageNumber = req.query.page  ? (parseInt(req.query.page) ?? 0)  : 0; 
    const pageSize = 10; 
    const skip = pageNumber * pageSize;
    const userId = req.user.id


    var language;
    switch (req.query.lang) {
      case"en": 
        language = "en"
        break; 
      case "am":
        language = "am"
        break
      case "tr" : 
        language = "ti"
        break;
      case "or" : 
        language = "or"
        break;
      case "si" :
        language = "so"
          // default "Amharic":
        break;
    }

    // playerIds, language, pageNumber, pageSize

    try{

        const user  = await User.findOne({id : userId})
        const teamIds  = user.favouriteTeams;
        const playerIds = user.favouritePlayers

        const teamNews  = await findNewsForTeams(teamIds , language  , pageNumber , pageSize)
        const playerNews = await findNewsForPlayers(playerIds , language  , pageNumber , pageSize)

        const newsList = [...teamNews ,  ...playerNews]
        console.log(`newsList.length ${newsList.length}`)
        return res.status(200).json(newsList)

    }catch(e){
            console.log(`error happened in for you ${e}`)
    }
 
}  




async function getPlayerNamesByIdsAndLanguage(playerIds, language) {
    const languageFieldMap = {
      'am': 'amharicName',
      'en': 'englishName',
      'om': 'oromoName',
      'so': 'somaliName'
    };
  
    const languageField = languageFieldMap[language.toLowerCase()] || 'EnglishName'; // Default to English if language not found
  
    const players = await PlayerName.find({ id: { $in: playerIds } }).select(languageField + ' -_id');
    
    return players.map(player => player[languageField]);
  }
  




  async function getTeamNamesByIdsAndLanguage(teamIds, language) {
    const languageFieldMap = {
      'am': 'AmharicName',
      'en': 'EnglishName',
      'om': 'OromoName',
      'so': 'SomaliName'
    };
  
    const languageField = languageFieldMap[language.toLowerCase()] || 'EnglishName'; // Default to English if language not found
  
    const teams = await TeamDataSchema.find({ id: { $in: teamIds } }).select(languageField + ' -_id');
    
    return teams.map(team => team[languageField]);
  }
  
  async function findNewsForTeams(teamIds, language, pageNumber, pageSize) {
    console.log("teamIds",teamIds)
    const teamNames = await getTeamNamesByIdsAndLanguage(teamIds, language);
    if(teamNames.length === 0){
      return []
    }
  
    const matchOrConditions = teamNames.map(name => ({
      $or: [
        { title: { $regex: escapeRegex(name), $options: 'i' } },

        { description: { $regex: escapeRegex(name), $options: 'i' } },

        { figCaption: { $regex: escapeRegex(name), $options: 'i' } },

{ figCaption_am: { $regex: escapeRegex(name), $options: 'i' } },
{ figCaption_tg: { $regex: escapeRegex(name), $options: 'i' } },

        { summarized: { $regex: escapeRegex(name), $options: 'i' } },
      
        { summarizedDescription: { $regex: escapeRegex(name), $options: 'i' } },

        { summarizedTitle: { $regex: escapeRegex(name), $options: 'i' } },

        { summarized_am: { $regex: escapeRegex(name), $options: 'i' } },
        
          { summarizedDescription_am: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarizedTitle_am: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarized_or: { $regex: escapeRegex(name), $options: 'i' } },
        
          { summarizedDescription_or: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarizedTitle_or: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarized_tg: { $regex: escapeRegex(name), $options: 'i' } },
        
          { summarizedDescription_tg: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarizedTitle_tg: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarized_so: { $regex: escapeRegex(name), $options: 'i' } },
        
          { summarizedDescription_so: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarizedTitle_so: { $regex: escapeRegex(name), $options: 'i' } },
      ]
    }));


    const aggregationPipeline = [
      { $match: {  $or: matchOrConditions  } },
      { $skip: pageNumber * pageSize },
      { $limit: pageSize },
      { $sort: { publishedDate: -1, createdAt: -1 } }
    ];

    const newsArticles = await News.aggregate(aggregationPipeline);
  
    return newsArticles;
}

  
  // Helper function to escape regex special characters in team names
  function escapeRegex(text) {
    //console.log(text)
    if (typeof text !== 'string' || !text) {
      return ''; // Return an empty string if text is undefined or not a string
    }
    var result =  text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    return result;
  }
  

  async function findNewsForPlayers(playerIds, language, pageNumber, pageSize) {
    const playerNames = await getPlayerNamesByIdsAndLanguage(playerIds, language);
  
    const matchOrConditions = playerNames.map(name => ({
      $or: [
        { title: { $regex: escapeRegex(name), $options: 'i' } },

        { description: { $regex: escapeRegex(name), $options: 'i' } },

        { figCaption: { $regex: escapeRegex(name), $options: 'i' } },

        { summarized: { $regex: escapeRegex(name), $options: 'i' } },
      
        { summarizedDescription: { $regex: escapeRegex(name), $options: 'i' } },

        { summarizedTitle: { $regex: escapeRegex(name), $options: 'i' } },

        { summarized_am: { $regex: escapeRegex(name), $options: 'i' } },
        
          { summarizedDescription_am: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarizedTitle_am: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarized_or: { $regex: escapeRegex(name), $options: 'i' } },
        
          { summarizedDescription_or: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarizedTitle_or: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarized_tg: { $regex: escapeRegex(name), $options: 'i' } },
        
          { summarizedDescription_tg: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarizedTitle_tg: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarized_so: { $regex: escapeRegex(name), $options: 'i' } },
        
          { summarizedDescription_so: { $regex: escapeRegex(name), $options: 'i' } },
  
          { summarizedTitle_so: { $regex: escapeRegex(name), $options: 'i' } },
      ]
    }));

    if (matchOrConditions.length === 0) {
      return [];
    }

    
  
    const aggregationPipeline = [
      { $match: { $or: matchOrConditions } },
      { $skip: pageNumber * pageSize },
      { $limit: pageSize },
      // Additional stages like $sort can be added here
      {$sort : {publishedDate : -1}}
    ];
  

   
    const newsArticles = await News.aggregate(aggregationPipeline)
  
    return newsArticles;
  }
  