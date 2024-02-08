const News = require('../../schemas/news_model');
const uuid = require('uuid');
// const synthesisNews = require('./synthesis_news')
module.exports = async (req, res) => {
    try{
        const id = uuid.v4();
        const news = req.body
        const publishedDate = new Date().toISOString()
        news.id = id;
        news.publishedDate = publishedDate;
        news.sourceLink = id
        news.pending= false
       const submit =  new News(news)
        await submit.save();
        console.log('news created');
        // synthesisNews(news)
        res.status(201).json({message: 'news created'});
    }catch(e){
        console.log(e)
        res.status(502).json({message: 'internal server error'});
    }
}
