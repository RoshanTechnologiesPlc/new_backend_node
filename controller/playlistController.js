
const Podcast = require("../schemas/podcast_schema")
const Playlist = require("../schemas/playlist_schema");
const uuid = require("uuid");

const addPlaylist = async (req, res) => { n
  id = uuid.v4();
  try {
    const { title, content, date, podcastId } = req.body;
    const playlist = new Playlist({ id, podcastId, title, content, date });
    await playlist.save();
    res.status(201).json(playlist);
  } catch (err) {
   
    res.status(500).json({ error: "Internal server error" });
  }
};


const findCollection = async (req , res) =>{
  try {
    idList = []
    filteredPodcasts = []
    const podcastSongList = await Playlist.find({})
   const podcasts = await Podcast.find({})
  

    podcasts.forEach(element => {
      idList.push(element['id'])
    });

    console.log(`id list is ${idList}`)
    idList.forEach(podcastId => {
    
      const podcastSongs = podcastSongList.filter((song) => song['podcastId'] == podcastId);
      filteredPodcasts.push(...podcastSongs.slice(0,3))    })


      let rearrangedPodcasts = [];
      while (filteredPodcasts.length > 0) {
        idList.forEach(podcastId => {
          let songIndex = filteredPodcasts.findIndex(song => song['podcastId'] === podcastId);
          if (songIndex !== -1) {
            rearrangedPodcasts.push(filteredPodcasts[songIndex]);
            filteredPodcasts.splice(songIndex, 1);
          }
        });
      }
  
      return res.status(200).send(rearrangedPodcasts.reverse());
  
   
 

  } catch (error) {
    console.log(error)
   return res.status(500).json({ok : false})
  }
}




const getAllPlaylists = async (req , res)=>{
try {
 const playlists = await Playlist.find({})
  res.status(200).json(playlists)
} catch (error) {
  res.status(500).send("Can't find any")
  console.log(error)
}
}

module.exports = { addPlaylist  , findCollection , getAllPlaylists};
