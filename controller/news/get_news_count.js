const News = require('../../schemas/news_model');

module.exports = async (req, res) => {
   try {
              amharicPendingNews = await News
                .find({
                pending : true , 
                  language : 'am'
                }, { description: 0, _id: 0 })
              somaliPendingNews  = await News.find({
                pending : true ,
                language : 'en'
              })
              oromoPendingNews = await News.find({
                pending : true ,
                language : 'or' })
              tigrignaPendingNews = await News.find({ 
                pending : true ,
                language : 'ti' })

              
               
              return res.status(200).json({
                "am" :  amharicPendingNews.length , 
              "so" :   somaliPendingNews.length ,
              "or" :   oromoPendingNews.length ,
              "ti" :   tigrignaPendingNews.length
              });
            } catch (error) {
              console.log(error); 
              return res.status(400).json({ ok: false });
            }};