const teamName = require("../../../schemas/team_data");
const User = require('../../../schemas/user_model')
async function getFavouriteTeams(req ,res){

  try {
    const user = await User.findOne({ id: req.user.id });
    if (!user) return res.status(401).json({ "error": "user not found" });
    
    const idsArray = user.favouriteTeams;
    if (!idsArray.length) {
      return res.status(200).json([]); // Return an empty array if no favourite teams
    }
   const teams = await teamName.find({ id: { $in: idsArray } }).exec();
  
    return res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}  



module.exports = {
    getFavouriteTeams
}