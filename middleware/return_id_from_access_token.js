const jwt = require('jsonwebtoken');
const User = require('../schemas/user_model');

require('dotenv').config();
async function verifyUserAccessTokenAndReturnId(accessToken) {
    

   
  
  
     return   jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_SECRET,
            async (err, decoded) => {

                if (err) { 
                    console.log('invalid token')
                    return false
                } else {
                    const id = decoded.id
                    const user = await User.findOne({id});
                    if (!user) {
                        console.log('user not found')
                       return false
                    } else {
                      console.log(`user found with id ${id}`)
                       
                        return id
                    }
                }
            }
        )
  
}

// const verifyUserAccessToken = async (req, res, next) => {
//     next();
// }

module.exports  =verifyUserAccessTokenAndReturnId;