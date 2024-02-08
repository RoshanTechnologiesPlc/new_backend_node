const News = require('../../schemas/news_model');
const synthesisNews = require('./synthesis_news')
module.exports = async (req, res) => {
    
   
    try{
        const id = req.body.id;
        const news = req.body
        news.pending = false
   
        
        await News.findOneAndUpdate({id:id}, news , {new: true , upsert : true});
       
        synthesisNews(news)
        res.status(201).json({message: 'news updated'});
    }catch(e){
        console.log(e);
        res.status(502).json({message: 'internal server error'});
    }
}