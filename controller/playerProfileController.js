const playerProfileSchema = require("./../schemas/player_profile");
const playerWithTeam = require("./../schemas/playerWithTeam")
const PlayerName = require("./../schemas/player_names")
const Player = require("./../schemas/fifa_model")

const PlayerProfile = require('../schemas/player_profile')
const User = require('../schemas/user_model');
const { Error } = require("mongoose");


async function getPlayers(req , res) {
  
    playerId = +req.query.id;
   try {
      const playerProfile = await playerProfileSchema.findOne({id : playerId}).populate({
        path: 'statistics',
        model: 'PlayerStatistics', // this is the name of the model you've exported
        populate: [{
            path: 'team',
            model: 'TeamDataSchema'  // replace with the actual name you've used when exporting the model
        }, {
            path: 'league',
            model: 'LeagueName'  // replace with the actual name you've used when exporting the model
        }]
      }).populate( "birthCountry").populate("nationality").populate('player')
      .exec()
        ;
        console.log(playerProfile)
        if(playerProfile == null){
          return res.status(201).json({"error" : "player not found"})
        }
        return res.status(200).json(playerProfile);
      } catch (error) {
        console.error('Error retrieving line ups:', error);
        return res.status(502).json({"error" : "error"});
        // throw error;
      }

    
  }



  async function getFavouritePlayers(req, res){


  
    try {
   
      const user = await User.findOne({id : req.user.id})
      if(user == null){
        return res.status(401).json({"error" : "user not found"})
      }
      const idsArray = user.favouritePlayers;
    console.log("incoming request for",idsArray);
     let playerslist = await playerProfileSchema.find({id :{ $in: idsArray }}).populate({ 
          path: 'statistics',
          model: 'PlayerStatistics', 
          populate: [{
               path: 'team',
              model: 'TeamDataSchema'  
          }, {
              path: 'league',
              model: 'LeagueName' 
          }] 
      }).populate( "birthCountry").populate("nationality").populate('player')
      .exec() 

      console.log("this is the reponse part",playerslist)
    
      return res.status(200).json(playerslist); 
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' });
    } }


async function getPlayerWithTeam(req, res){
  
  const pageNumber = req.query.page ? parseInt(req.query.page) : 0; // Default to the first page if not provided

  const pageSize = 40; // Keeping it consistent
  const skip = pageNumber * pageSize; 
  try{
    const result = await playerWithTeam.find({}).populate("player").populate("team").skip(skip)
    .limit(pageSize).exec()
   
   return res.status(200).json(result)
  }catch(e){
    res.status(500).json({ error: 'Internal server error' });
  
  }
}


async function searchPlayer(req , res){
  try {
    const players = await findPlayersByName(req.query.name , false)
    res.status(200).json(players)

    console.log('searching player for',findPlayersByName )
  } catch (error) {
    console.log('error while sending players data' , error) 
  }
 

} 

async function searchPlayerForAdmin(req , res){
  const players = await findPlayersByName(req.query.name , true)
 
res.status(200).json(players)

}
 



const findPlayersByName = async (nameQuery , admin) => {
  try {
      // Use regex for case insensitive and partial matching
      const regex = new RegExp(nameQuery, 'i');
      
      // Find players whose name matches the query
      const matchingPlayers = await Player.find({
          $or: [
              { 'playerName.amharicName': regex },
              { 'playerName.englishName': regex },
              { 'playerName.somaliName': regex },
              { 'playerName.oromoName': regex }
          ]
      });

      console.log('matching players length' , matchingPlayers.length)
      return matchingPlayers
      
      if (!matchingPlayers || matchingPlayers.length === 0) {
          return [];
      }
      
      // Extract IDs of the matching players
     
      // Retrieve playerWithTeam documents associated with the matching players
      // const matchingPlayerWithTeams = await playerWithTeam.find({
      //     player: { $in: playerIds }
      // }).populate('player').populate('team');
      if(admin){
        // const matchingPlayerWithTeams = await findMatchingPlayersForAdmin(playerIds)
        // return matchingPlayerWithTeams; 


      }else{
        const playerIds = matchingPlayers.map(player => player.id);

        const matchingPlayerWithTeams = await findMatchingPlayersForClient(playerIds)
        return matchingPlayerWithTeams;
      }
       


  } catch (error) {
      console.error("Error finding players:", error);
      throw error;
  }
};


async function findMatchingPlayersForAdmin(playerIds){
try{
  const matchingPlayerWithTeams = await PlayerProfile.find({
    player: { $in: playerIds }
  }).populate('player')
  return matchingPlayerWithTeams

}catch(e){
console.log(e)
return []
}
}


async function findMatchingPlayersForClient(){
  try{
     const matchingPlayerWithTeams = await playerWithTeam.find({
          player: { $in: playerIds }
      }).populate('player').populate('team');
      return matchingPlayerWithTeams

  }catch(e){
    return []
  }
}
module.exports = {getPlayers , getFavouritePlayers ,  getPlayerWithTeam , searchPlayer , searchPlayerForAdmin}
