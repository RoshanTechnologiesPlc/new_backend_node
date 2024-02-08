const Post =require('../../schemas/post_model')
const index= async (req,res)=>{
  const pageNumber= req.query.pageNumber || 1;
  console.log(`pageNumber ${pageNumber}`)
  const skipCount = (pageNumber - 1) * 10;
  try{
    const posts = await  Post.find({
      source: "instagram"
  
    })
    .skip(skipCount)
    .limit(10)
    .sort({ datePublished: -1 })

   res.status(200).json(posts)
  }catch(e){
    console.log(e)
    res.status(502).json({message:"something went wrong"})
  }
   
}
module.exports=index