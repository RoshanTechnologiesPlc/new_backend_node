const News = require('../../schemas/news_model');
const idMatch = require("./wordMatch"); // Ensure this path is correct

module.exports = async (req, res) => {
    console.log('League news page is requested...');
    const { leagueId, lang } = req.query;
    const leagueName = idMatch[leagueId]?.[lang];
    if (!leagueName) {
        return res.status(404).json({ message: "League not found" });
    }

    const pageNumber = req.query.page ? parseInt(req.query.page) : 0;
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

    try {
        const newsList = await findNewsForLeague(lang, pageNumber, pageSize, leagueName);
        return res.status(200).json(newsList);
    } catch (error) {
        console.error(`Error fetching news for league: ${error}`);
        return res.status(500).json({ message: "Internal server error" });
    }
};

async function findNewsForLeague(lang, pageNumber, pageSize, leagueName) {
    const escapeRegExp = text => text.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
    const regexPattern = new RegExp(escapeRegExp(leagueName), 'i');

    const aggregationPipeline = [
        {
            $match: {
                $or: [
                    { title: regexPattern },
                    { description: regexPattern },
                    { figCaption: regexPattern },
                    { figCaption_am: regexPattern },
                    { figCaption_or: regexPattern },
                    { figCaption_so: regexPattern },
                    { figCaption_ti: regexPattern },
                    {summarized: regexPattern},
                    {summarized_am: regexPattern},
                    {summarized_or: regexPattern},
                    {summarized_so: regexPattern},
                    {summarized_ti: regexPattern},
                    {summarizedDescription: regexPattern},
                    {summarizedDescription_am: regexPattern},
                    {summarizedDescription_or: regexPattern},
                    {summarizedDescription_so: regexPattern},
                    {summarizedDescription_ti: regexPattern},
                    {summarizedTitle: regexPattern},
                    {summarizedTitle_am: regexPattern},
                    {summarizedTitle_or: regexPattern},
                    {summarizedTitle_so: regexPattern},
                    {summarizedTitle_ti: regexPattern},



                    // Add other fields where leagueName might appear
                ]
            }
        },
        { $sort: { publishedDate: -1, createdAt: -1 } },
        { $skip: pageNumber * pageSize },
        { $limit: pageSize },
        {
            $project: {
                title: 1,
                description: 1,
                mainImage: 1,
                publishedDate: 1,
                // Include other fields as necessary
            }
        }
    ];

    try {
        const newsArticles = await News.aggregate(aggregationPipeline);
        console.log(`Fetched ${newsArticles.length} news articles for league.`);
        return newsArticles;
    } catch (error) {
        console.error(`Error in aggregation for league news: ${error}`);
        throw error; // Rethrow to be caught by the caller
    }
};
