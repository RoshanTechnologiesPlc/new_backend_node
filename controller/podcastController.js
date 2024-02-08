const Podcast = require("../schemas/podcast_schema");
const uuid = require("uuid");

const addPodcast = async (req, res) => {
  try {
    const {
      id,
      amharicName,
      englishName,
      oromoName,
      tigrignaName,
      somaliName,
 
       
      // amharicDescription,
      englishDescription,
      oromoDescription,
      tigrignaDescription,
      somaliDescription,

      amharicStationName,
      englishStationName,
      oromoStationName,
      tigrignaStationName,
      somaliStationName,


      amharicProgramName,
      englishProgramName,
      oromoProgramName,
      tigrignaProgramName,
      somaliProgramName,
     
       liveLink ,
    
      
      } = req.body;
    // const avatar = req.file.filename;
    // const id = uuid.v4();
      rssLink =  ''
      liveTimes = []
    // const parsedLiveTimes = JSON.parse(liveTimes);

    // const podcast = new Podcast({
    //   id, 
    //   amharicName,
    //   englishName,
    //   oromoName,
    //   tigrignaName,
    //   somaliName,

      
    //   amharicDescription,
    //   englishDescription,
    //   oromoDescription,
    //   tigrignaDescription,
    //   somaliDescription,

    //   amharicStationName,
    //   englishStationName,
    //   oromoStationName,
    //   tigrignaStationName,
    //   somaliStationName,


    //   amharicProgramName,
    //   englishProgramName,
    //   oromoProgramName,
    //   tigrignaProgramName,
    //   somaliProgramName,
     
    //    liveLink ,
    //  liveTimes,
    //   rssLink
    // });


  
    // await podcast.save();
    const existingPodcast = await Podcast.findOne({id:id});
    amharicDescription = existingPodcast.description;
await Podcast.findOneAndUpdate({id:id},
  { 
    amharicName,
    englishName,
    oromoName,
    tigrignaName,
    somaliName,

    
    amharicDescription,
    englishDescription,
    oromoDescription,
    tigrignaDescription,
    somaliDescription,

    amharicStationName,
    englishStationName,
    oromoStationName,
    tigrignaStationName,
    somaliStationName,


    amharicProgramName,
    englishProgramName,
    oromoProgramName,
    tigrignaProgramName,
    somaliProgramName,
   
   
  } 
  , {upsert: true});

    res.status(201).json(Podcast);
  } catch (err) {
    console.log(err);
    console.log("---------------");
    res.status(500).json({ error: "Internal server error" });
  }
};

async function getAllPodcasts(req, res) {
  console.log("getAllPodcasts");
  try {
    result = await Podcast.find({});
  
    return res.status(200).json(  result );
  } catch (error) {
    console.log(error);
    return res.status(400).json({ ok: false });
  }
}

 
async function getPodcast(req, res) {
 
  try {
    const id = req.params.id
    result = await Podcast.findOne({id : id});
    console.log(result)
    return res.status(200).json(  result );
  } catch (error) {
    console.log(error);
    return res.status(400).json({ ok: false });
  }
}
module.exports = { addPodcast, getAllPodcasts , getPodcast};
