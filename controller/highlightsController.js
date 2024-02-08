const { highlight } = require('../schemas/highlight_schema');


async function getHighlights(req , res) {
    console.log(`page number is ${req.query.page}`)
    const pageNumber = req.query.page ? parseInt(req.query.page) : 0; // Default to the first page if not provided
    const pageSize = 30; // Keeping it consistent
    const skip = pageNumber * pageSize;

    try{
        const highlights = await highlight.find({ 
            highlight : true
          }).skip(skip).limit(pageSize).sort({matchDate : -1}).populate('teamOneName').populate('teamTwoName').populate('playlist')  ;
       


          console.log(`retrieved highlights`)
        return res.status(200).json(highlights);
    }catch(e){
        console.log(`error retrieving highlights ${e}`)
        res.status(500).json({message : "We are working to solve the problem!"})
    }
   

    
  }

module.exports ={ getHighlights}