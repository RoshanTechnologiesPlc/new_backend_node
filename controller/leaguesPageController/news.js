const News = require('../../schemas/news_model')

const idMatch = require("./wordMatch")

module.exports = async (req, res) => {
    console.log(req.query)
    const {leagueId , lang  } = req.query
    const leagueName = idMatch[leagueId]?.[lang] ?? undefined;
    if(!leagueName){
        return res.status(200).json([])
    }
    const pageNumber = req.query.page  ? parseInt(req.query.page) +1 : 1;
    const pageSize = 10;
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
    const newsList = await findNewsForLeague(language , pageNumber , pageSize , leagueName)

    if(newsList){
        return res.status(200).json(newsList)
    }else{
        return res.status(502).json({message : "something went wrong"})
    }


}


async function findNewsForLeague(language, pageNumber, pageSize , leagueName) {

 try{
    teamNames = [leagueName] 
    pageNumber = parseInt(pageNumber)-1 
    console.log(teamNames)
    
      const aggregationPipeline = [
        {
          $project: {
            title: 1,
            description: 1,
            id : 1 ,
            mainImage: 1,
            publishedDate: 1 ,
  
            // Other fields you need
            language: 1,
            occurrenceCount: {
                $sum: teamNames.map(name => ({
                  $cond: [
                    {
                      $or: [
                        { $regexMatch: { input: "$description", regex: escapeRegex(name), options: 'i' } },
                        { $regexMatch: { input: "$title", regex: escapeRegex(name), options: 'i' } },
                        { $regexMatch: { input: "$headLineTextAfterImage", regex: escapeRegex(name), options: 'i' } }
                      ]
                    },
                    1,
                    0
                  ]
                }))
              }
          }
        },
        { $match: { language : language , occurrenceCount: { $gte: 1 } } },
        { $skip: pageNumber * pageSize },
        { $limit: pageSize }, 
        { $sort: { publishedDate: -1  , dateCreated : -1 , createdAt : -1}}
      ];
      const newsArticles = await News.aggregate(aggregationPipeline);
      console.log(newsArticles.length)
      return newsArticles;
  
     
     
 }catch(e){
        console.log(`error happened in findNewsForLeague ${e}`)
        return false
 }
  }
    // Helper function to escape regex special characters in team names
    function escapeRegex(text) {
        console.log(text)
        if (typeof text !== 'string' || !text) {
          return ''; // Return an empty string if text is undefined or not a string
        }
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      }