const Lineup = require("../schemas/lineup_schema");


async function getLineups(req , res) {
    fixture = req.params.id
  
    console.log("incoming request for lineup ...")
    // console.log(fixture)
    

    try {
      const lineup = await Lineup.find({ 
        fixture : fixture,
       });
      console.log(lineup)
      return res.status(200).json(lineup);
    } catch (error) {
      console.error('Error retrieving line ups:', error);
      throw error;
    }

    
  }

module.exports = {getLineups}