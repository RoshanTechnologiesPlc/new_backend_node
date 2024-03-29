
const Transfer = require("../../schemas/transfer");
const getTransferRssFeed = require("../../rss_json/transfer");
const transliteratePlayers = require("../../fetch/player_transliteration");
// fetch all data desc order
const index = (req, res) => {
 
  try{
 
    const pageNumber= +parseInt(req.query.pageNumber)
    const pageSize = 8;
    Transfer.find()
      .sort({ createdAt: 1 }).skip((pageNumber - 1) * pageSize).limit(pageSize)
      .then((response) => {
        res.status(200).json({
          response,
        });
      })
      .catch((error) => {
        console.log(error)
        res.status(502).json({
          message: "An error Occured",
        });
      });
  }catch(e){
    res.status(404).json({message : "error"})
  }
};

module.exports =  index
