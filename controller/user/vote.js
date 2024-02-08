const Vote  = require('../../schemas/vote_schema')

const vote =  async(req, res)=>{
   
    try{
        const user = req.user
        const userId = req.user.id
        const fixtureId = req.body.fixtureId
        const prediction = req.body.prediction
      
       await Vote.findOneAndUpdate({    fixtureId , userId  } , 
                                        {
                                        'userVote' : prediction
                                        } , 
                                        {
                                            upsert : true ,
                                            new : true
                                        }
                )

            // res.status(201).json({'message' : 'success'})
            const voteData = await returnVotes(userId , fixtureId)
            if(voteData){
              return  res.status(200).json(voteData)
            }else{
           return     res.status(502).json({
                    message : 'error happened while processing your request'
                })
            }
        
    }catch(e){


        console.log(`error happened ${e}`)
        res.status(502).send({
            message : 'error happened while processing your request'
        })
    }
}


async function getVotes(req, res){
    const fixtureId = req.query.fixtureId;
    const userId = req.user.id
    console.log(`fixtureId ${fixtureId} & userId ${userId}`)
    const voteData = await returnVotes(userId , fixtureId)
    if(voteData){ 
        res.status(200).json(voteData)
    }else{
        res.status(502).json({
            message : 'error happened while processing your request'
        })
    }
}



async function returnVotes(userId ,fixtureId){
  
 try{
 // Aggregate votes
 const voteSummary = await Vote.aggregate([
  { $match: { fixtureId: parseInt(fixtureId) } },
  { $group: {
      _id: "$userVote",
      count: { $sum: 1 }
    }
  }
]);

// Check user vote
const userVote = await Vote.findOne({ userId, fixtureId });

return {
  voteSummary,
  userVote: userVote ? userVote.userVote : null
};
 }catch(e){
  return false;
 }

}

module.exports =  {vote , getVotes }