const express = require("express");
const news = require("./schemas/news_model");
const app = express();
const router = express.Router(); 
const uniqid = require("uniqid");
const multer = require("multer");
const News = require("./schemas/news_model");
const Ads = require("./schemas/ads_model");
var fileupload = require("express-fileupload");
const League = require("./schemas/leagues");
const { v4: uuidv4 } = require("uuid");
const apiRoute = require("./routes/apiRouter");
const lineup = require("./schemas/lineup_schema")
const allPlayers = require("./models/allPlayer")
const FixtureEvent = require("./schemas/event_schema")
const path = require("path"); 
const bodyParser = require("body-parser");
const Matches = require("./schemas/match_schema")
const cors = require("cors");
const makeRequest = require("./makearequest");
const fetchPlaylist = require("./fetch/fetch_playlist")
const fetchStanding = require("./fetch/fetch_players")
const leagueStatistics = require("./schemas/league_statistics")
const StandingSchema = require("./schemas/standings");
const standings = require("./schemas/standings");
const verifyRefereshToken = require('./middleware/verify_refresh_token').handleRefreshToken
const getTodaysMatches  = require("./fetch/getTodaysFixtures")

// const callPythonFunction = require("./tts/synthesis");
const SomaliSynthesis = require("./speech_synthesis/somali_oromo");
const AmharicSynthesis = require("./speech_synthesis/amharic_tigrigna");
const teamData = require("./schemas/team_data")
const adminRoute = require('./routes/admin/adminRouter')


app.use(cors());
const morgan = require("morgan");
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get("/", (req, res) => res.status(200).send("working fine!"));

app.get("/leagueStat" ,async(req, res)=>{
  data = await leagueStatistics.find({}); 
  res.status(200).json(data)
})





 
app.use(express.static("uploads"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoute);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
        const uniqueIdentifier = Date.now();
      const sanitizedFilename = file.originalname.replace(/\s+/g, ""); const fileExtension = path.extname(sanitizedFilename);
      const uniqueFilename = `${uniqid()}_${uniqueIdentifier}_${sanitizedFilename}`;
      cb(null, uniqueFilename);
  },
});

const upload = multer({ storage: storage });
// upload.single("photo"),
  // const image = req.file.filename;






app.use("/api", apiRoute); 

app.get('/searchPlayers', async (req, res) => {
    try {
      const searchName = req.query.name;
      const searchResults = await Player.find({ name: { $regex: searchName, $options: 'i' } });
      res.status(200).json(searchResults);
    } catch (error) {
      
      console.error('Error searching players:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
app.get("/lineup/:id" , async(req, res)=>{

  fixture = req.params.id;

  try {
    lineuup = await lineup.find({
      fixture : fixture
    })

    console.log(lineuup);
    res.status(200).json(lineuup)
  } catch (error) {
    console.log(error);
  } 

})
app.get("/newsbylang/:lang", verifyRefereshToken ,  async (req, res) => {
    const lang = req.params.lang;
    

    try {
      const newsResult = await news.find({ language: lang } , {
        id : 1 , _id : 0    , newsLink : 1
      });
      res.status(200).json(newsResult);
     ``
    } catch (error) {
      console.log(error)
    }
})

async function getTrendingNews(lang, pageNumber, excludeIds = [], lastViewCount = null) {
  try {
    // Calculate the skip value (pageNumber - 1) to adjust for pages since the first page should have no skip
    const skipValue = Math.max(0, pageNumber - 1);

    // Calculate the start of the current day
const startOfToday = new Date();
startOfToday.setHours(0, 0, 0, 0); // Set to midnight of the current day

// Update the query object's publishedDate filter
let query = {
  pending: false,
  publishedDate: { $gte: startOfToday }, // Filter for news published from the start of today
  _id: { $nin: excludeIds }
};

// If lastViewCount is provided, adjust the query accordingly
if (lastViewCount !== null) {
  query.viewCount = { $lt: lastViewCount };
}


    // Fetch the trending news item within the last 3 days
    const trendingNews = await news
      .find(query)
      .sort({ viewCount: -1 }) // Sort by view count in descending order
      .skip(skipValue) // Skip to the nth news item
      .limit(1) // Limit to only one result

    // Check if we got a result and return it
    if (trendingNews.length > 0) {
      return trendingNews[0];
    } else {
      return null; // Or handle the case where there is no news for this page number
    }
  } catch (e) {
    console.error('Error fetching trending news:', e);
    throw e; // Re-throw the error or handle it as per your application's error handling policy
  }
}


async function fetchAds() {
  try {
    const adsList = await Ads.find();
    
    console.log("Ads found:");
    console.log(adsList);
    return adsList;
  } catch (e) {
    console.error(e);
  }
}



app.get("/ads", async (req, res) => {
  try {
    const ads = await fetchAds();
    res.status(200).json(ads);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }

});

app.get("/news",  verifyRefereshToken  , async (req, res) => {
 

  
  console.log(req.query.page)
  const pageNumber = req.query.page ? parseInt(req.query.page) : 0; // Default to the first page if not provided
  const pageSize = 9; // Keeping it consistent
  const skip = pageNumber * pageSize;

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
  try {
    const trendingNews = await getTrendingNews(language, pageNumber);

  let newsResult = await news
      .find({
        pending : false
      })
      .sort({publishedDate : -1})
      .skip(skip)
      .limit(pageSize)
 // console.log("newsResult=",newsResult)
  newsResult =  [ trendingNews ,   ...newsResult ]
    return res.status(200).json(newsResult);
  } catch (error) {
    console.error("News error:",error); 
    return res.status(400).json({ ok: false });
  }

}); 

app.get("/details/:id", async (req, res) => {
  try {
    id = req.params.id;
    console.log(id);
    newsDetail = await news.find({ id: id });
    
    const updateResult = await news.findOneAndUpdate(
      { id: id },
      { $inc: { viewCount: 1 } },
      { new: true }
    );
    
    return res.status(201).json(newsDetail);
  } catch (error) {
    console.log("error=> ",error);
    res.status(400).json({ ok: false }); 
  }
});


app.post("/editNews" , async(req, res)=>{
  try{
    id = req.body.id;
    news = req.body
    await news.findOneAndUpdate({
      id : id
    } , 
    news, {
      upsert : true , 
      new : true
    }
    )
  }catch(e){

  }
})
 
app.get("/favPlayers", async (req, res) => {
  
  try {
    const playerIds = req.query.ids;
    const idsArray = playerIds.split(',').map(Number);
    console.log(idsArray);
    playerslist = []

    for(let i = 1 ; i < idsArray.length ; i ++){
      player = await allPlayers.findOne({playerId : idsArray[i]}).populate("stats");  
  
      playerslist.push(player)
    }

    return res.status(200).json(playerslist); 
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get("/standings/:leagueid", async (req, res) => {
  
  try {
    leagueid = req.params.leagueid;
    console.log(leagueid);
    // standings = await League.findOne({ id: leagueid });
    // return res.status(200).json(standings);
standingData = await StandingSchema.aggregate([
  {
    $match: {
      leagueId:  39 // Filter by the desired leagueId
    }
  },
  {
    $unwind: "$standings" // Unwind the standings array to work with individual team statistics
  },
 
  {
    $sort: {
      "standings.rank": -1,
        } 
  },
  {
    $group: {
      _id: "$_id", // Group by the original document's _id field
      standings: { $push: "$standings" } // Push the sorted standings back into an array
    }
  },
  {
    $project: {
      leagueId: 1, // Include other fields from your original schema
      season: 1,
      standings: 1 // Include the sorted standings
    }
  } 
]);

console.log( standingData[0]["standings"]);
return res.status(200).json({
  "overall" :  standingData[0]["standings"] ,
  "home" :  standingData[0]["standings"], 
  "away" :  standingData[0]["standings"]
});

  } catch (e) {
    console.log(e);
    res.status(400).json({ ok: false });
  }
});

app.get("/fixtures/:leagueId", async (req, res) => {
  console.log("request for fixture is coming ....");
  leagueid = req.params.leagueId;
  try {
    result = await getMatchesByLeagueId(leagueid);
    console.log("returned");
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json({});
  }
});


app.get("/todaysMatches" , async(req, res)=>{
  try{
    const fixtures = await getTodaysMatches()
    res.status(200).json(fixtures)
  }catch(e){
    console.log(e)
  }
})

app.get("/allfixtures" , async(req, res)=>{
   try {
    matchList = await Matches.find({} , {id : 1 , _id : 0});
   return res.status(200).json(matchList);
   } catch (error) {
    console.log(error);
  return  res.status(404).json({ok : false})

   }

    
})
app.get("/match/:id" , async(req, res)=>{
  try{
    id = req.params.id
    match = await Matches.find({
      id  :id
    })

    res.status(200).send(match)
  }catch(e){

  }
})

 
app.get("/event/:fixtureId" , async(req, res)=>{
        fixtureId = req.params.fixtureId
        console.log(`incoming request .... ${fixtureId}`)
        try {
          result = await FixtureEvent.findOne({
            fixture : fixtureId
          })
          console.log(result)
          return res.status(200).json(result)
        } catch (error) { 
          console.log(error)
          res.status(404).json({})
        } 


})   


module.exports= app
async function getListofMatches() {
  try {
    console.log('Finding matches with non-null YouTube highlights...');
    const matches = await Matches.find({
      'youtubeHighlight.VideoTitle': { $ne: null },
      'youtubeHighlight.VideoId': { $ne: null },
      'youtubeHighlight.Thumbnail': { $ne: null }
    }).sort({'createdAt': 1}) 
    .lean();

    // console.log(`Found ${matches.length} matches with valid YouTube highlights.`);
    return matches;
  } catch (error) {
    console.error('Error fetching matches:', error.message);
    throw error; 
  }
}

app.get('/api/matches', async (req, res) => {
  try {
    const matches = await getListofMatches();
    res.json(matches); 
    console.log(matches);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching matches', error: error.message });
  }
});
