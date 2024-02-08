const TeamName = require('../schemas/team_data')

async function getTeamNames(req ,  res){
   try{

  
    const pageNumber = +req.query.pageNumber ? parseInt(req.query.pageNumber) : 1
    const language = +req.query.language
    const limit = 40
    const skip = (pageNumber - 1) * limit
    let query =  { amharicEditted: { $ne: true }}
    
    if(language === 'or'){
        query = { oromoEditted: { $ne: true }}
    }else if(language === 'so'){
        query = {somaliEditted : {$ne : true}}
    }

    const teamList = await TeamName.find(query).skip(skip).limit(limit).exec()

    res.status(200).json(teamList)

   }catch(e){
    console.log(e)
    res.status(500).json({'message' : 'internal server error'})
   }

}


async function editTeamNames(req ,  res){
   
    try{
     const pageNumber = +req.query.pageNumber ? parseInt(req.query.pageNumber) : 1
     const language = req.body.language
     console.log(req.body)
     let body =  { 
        AmharicName : req.body.amharicName ,
       
        amharicEditted: true }
     
     if(language === 'or'){
        body =  { 
            OromoName : req.body.oromoName ,
           
            oromoEditted: true }
     }else if(language === 'si'){
        body =  { 
            SomaliName : req.body.somaliName ,
           
            somaliEditted: true }
     }
 
     const team = await TeamName.findOneAndUpdate({id : req.body.id} , body , {upsert : true , new :  true})
     
     res.status(201).json(team)
 
    }catch(e){
     console.log(e)
     res.status(500).json({'message' : 'internal server error'})
    }
 
 }

 async function searchTeamName(req ,res){
    try{
        const nameQuery = req.query.name
        const regex = new RegExp(nameQuery, 'i');
          
          // Find players whose name matches the query
          const matchingPlayers = await TeamName.find({
              $or: [
                  { AmharicName: regex },
                  { EnglishName: regex },
                  { SomaliName: regex },
                  { OromoName: regex }
              ]
          });

          res.status(200).json(matchingPlayers)
    }catch(e){
        console.log(e)
        res.status(500).json({'message' : 'internal server error'})
    }
 }
 


module.exports = {getTeamNames , editTeamNames , searchTeamName} 