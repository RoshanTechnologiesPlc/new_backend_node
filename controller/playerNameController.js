const PlayerName = require('../schemas/player_names')

async function editPlayerName(req ,  res){
    
    try{
    const language = req.body.language
     console.log(req.body)
     let body =  { 
        amharicName : req.body.amharicName ,
       translated : true , 
        amharicEditted: true }
      
     if(language === 'or'){
        body =  { 
            oromoName : req.body.oromoName ,
            translated : true , 
            oromoEditted: true }
     }else if(language === 'si'){
        body =  { 
            somaliName : req.body.somaliName ,
            translated : true , 
            somaliEditted: true }
     }
 
     const player = await PlayerName.findOneAndUpdate({id : req.body.id} , body , {upsert : true , new :  true})
     
     res.status(201).json(player)
 
    }catch(e){
     console.log(e)
     res.status(500).json({'message' : 'internal server error'})
    }
 
 }

async function getPlayerNames(req, res){
   try{
      const pageNumber =  req.query.pageNumber ?  parseInt( req.query.pageNumber) :  1
      const pageSize = 60
      const skip = (pageNumber - 1) * pageSize
      const language = req.query.language

      let query =  { amharicEditted: { $ne: true }}
    
      if(language === 'or'){
          query = { oromoEditted: { $ne: true }}
      }else if(language === 'so'){
          query = {somaliEditted : {$ne : true}}
      }
      const playerNames = await PlayerName.find(query).skip(skip).limit(pageSize)
      res.status(200).json(playerNames)
   }catch(e){
      console.log(e)
      res.status(500).json({'message' : 'internal server error'})
   }
}
 module.exports = {editPlayerName , getPlayerNames} 