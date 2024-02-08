const News = require('../../schemas/news_model');

module.exports = async (req, res) => {

   try {
    const commonId = req.query.commonId;
    const id = req.query.id;
    console.log(commonId , id)
             const localNews = await News.findOne({ id : id })
             const englishNews = await News.findOne({ commonId : commonId , language : 'en' })
              
               
              return res.status(200).json({
                'english' : englishNews,
                'local' : localNews
              });
            } catch (error) {
              console.log(error); 
              return res.status(400).json({ ok: false });
            }};