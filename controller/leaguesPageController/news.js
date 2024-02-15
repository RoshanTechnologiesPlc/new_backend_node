// const News = require('../../schemas/news_model');
// const idMatch = require("./wordMatch");

// // Main function to handle the request and respond with the filtered news
// module.exports = async (req, res) => {
//     const { leagueId, lang } = req.query;
//     const leagueName = idMatch[leagueId]?.[lang] ?? undefined;
//     if (!leagueName) {
//         return res.status(200).json([]);
//     }

//     const pageNumber = req.query.page ? parseInt(req.query.page) : 1;
//     const pageSize = 10;

//     const newsList = await findNewsForLeague(pageNumber, pageSize, leagueName, lang);

//     if (newsList) {
//         return res.status(200).json(newsList);
//     } else {
//         return res.status(502).json({ message: "something went wrong" });
//     }
// };

// Function to find news for a league based on language, page number, page size, and league name
const News = require('../../schemas/news_model');
const idMatch = require("./wordMatch");

// Main function to handle the request and respond with the filtered news
module.exports = async (req, res) => {
    const { leagueId, lang } = req.query;
    console.log("Recieved id of league: ", leagueId, " and language: ", lang)
    const leagueName = idMatch[leagueId]?.["en"] ??  idMatch[leagueId]?.[lang] ?? undefined;
    console.log("League name: ", leagueName)
    if (!leagueName) {
        return res.status(200).json([]);
    }

    const pageNumber = req.query.page ? parseInt(req.query.page) : 0;
    const pageSize = 10;

    const newsList = await findNewsForLeague(pageNumber, pageSize, leagueName, lang);

    if (newsList) {
        return res.status(200).json(newsList);
    } else {
        return res.status(502).json({ message: "something went wrong" });
    }
};

// Function to find news for a league based on language, page number, page size, and league name
async function findNewsForLeague(pageNumber, pageSize, leagueName, lang) {
  try {
    const matchOrConditions = [leagueName].map(name => ({
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

    //   console.log("page number: ", pageNumber, " page size: ", pageSize, " league name: ", leagueName, " lang: ", lang);
  
      const newsArticles = await News.aggregate(aggregationPipeline);
      console.log("News articles: ", newsArticles.length)
      return newsArticles;
  } catch (e) {
      console.log(`Error happened in findNewsForLeague ${e}`);
      return false;
  }
}


// Helper function to escape regex special characters in team names
function escapeRegex(text) {
    //console.log(text)
    if (typeof text !== 'string' || !text) {
      return ''; // Return an empty string if text is undefined or not a string
    }

    var result = text.split(" ").map(text=>text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')).join(" ");
    var possibleAbbrs = idMatch["abbreviation"][result]
    if (possibleAbbrs) {
      result = result + "|" + possibleAbbrs.join("|")
    }
   // console.log("Result: ", result)
    return result;
  }