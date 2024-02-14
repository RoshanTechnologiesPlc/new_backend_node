const News = require('../../schemas/news_model');
const idMatch = require("./wordMatch");

// Main function to handle the request and respond with the filtered news
module.exports = async (req, res) => {
    const { leagueId, lang } = req.query;
    const leagueName = idMatch[leagueId]?.[lang] ?? undefined;
    if (!leagueName) {
        return res.status(200).json([]);
    }

    const pageNumber = req.query.page ? parseInt(req.query.page) : 1;
    const pageSize = 10;

    const newsList = await findNewsForLeague(pageNumber, pageSize, leagueName, lang);

    if (newsList) {
        return res.status(200).json(newsList);
    } else {
        return res.status(502).json({ message: "something went wrong" });
    }
};

// Function to find news for a league based on language, page number, page size, and league name
const News = require('../../schemas/news_model');
const idMatch = require("./wordMatch");

// Main function to handle the request and respond with the filtered news
module.exports = async (req, res) => {
    const { leagueId, lang } = req.query;
    const leagueName = idMatch[leagueId]?.[lang] ?? undefined;
    if (!leagueName) {
        return res.status(200).json([]);
    }

    const pageNumber = req.query.page ? parseInt(req.query.page) : 1;
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
      pageNumber = pageNumber - 1; // Adjust for zero-based index

      // Determine the appropriate field names based on the language code
      let titleField, summarizedField;
      switch (lang) {
          case 'am':
              titleField = 'summarizedTitle_am';
              summarizedField = 'summarized_am';
              break;
          case 'or':
              titleField = 'summarizedTitle_or';
              summarizedField = 'summarized_or';
              break;
          case 'tg': // Ensure this is correct as per your schema, 'tg' for Tigrinya
              titleField = 'summarizedTitle_tg';
              summarizedField = 'summarized_tg';
              break;
          case 'so':
              titleField = 'summarizedTitle_so';
              summarizedField = 'summarized_so';
              break;
          default:
              titleField = 'title'; // English uses the 'title' field without suffix
              summarizedField = 'summarized'; // Default summarized field if exists or adjust as needed
              break;
      }

      const aggregationPipeline = [
          {
              $project: {
                  [titleField]: 1,
                  [summarizedField]: 1,
                  mainImage: 1,
                  publishedDate: 1,
                  occurrenceCount: {
                      $sum: [
                          {
                              $cond: [
                                  { $regexMatch: { input: `$${titleField}`, regex: new RegExp(escapeRegex(leagueName), 'i') } },
                                  1,
                                  0
                              ]
                          },
                          {
                              $cond: [
                                  { $regexMatch: { input: `$${summarizedField}`, regex: new RegExp(escapeRegex(leagueName), 'i') } },
                                  1,
                                  0
                              ]
                          }
                      ]
                  }
              }
          },
          { $match: { occurrenceCount: { $gte: 1 } } },
          { $skip: pageNumber * pageSize },
          { $limit: pageSize },
          { $sort: { publishedDate: -1 } }
      ];

      // Log the aggregation pipeline for inspection
      console.log(JSON.stringify(aggregationPipeline, null, 2));

      const newsArticles = await News.aggregate(aggregationPipeline);
      return newsArticles;
  } catch (e) {
      console.log(`Error happened in findNewsForLeague ${e}`);
      return false;
  }
}


// Helper function to escape regex special characters in team names
function escapeRegex(text) {
    if (typeof text !== 'string' || !text) {
      return ''; // Return an empty string if text is undefined or not a string
    }
    console.log(JSON.stringify(aggregationPipeline, null, 2));

    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    
}
