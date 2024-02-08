const User = require('../schemas/user_model');
const jwt = require('jsonwebtoken');
const generateAccessTokenForUser = require('../controller/authentication/generateToken').generateAccessTokenForUser;
const generateRefreshTokenForUser = require('../controller/authentication/generateToken').generateRefreshTokenForUser;
const handleRefreshToken = async (req, res  , next) => {
    const refreshToken = req.headers['refreshtoken'];
   
    if (!refreshToken) 
    {
        console.log('here')
        return res.status(401).send('Access denied');
    }else{
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (err, decoded) => {
                if (err) { 
                  
                    return res.status(401).send('Invalid token');
                } else {
                    const id = decoded.id
                   
                    const user = await User.findOne({id : id});
                    // console.log(user)
                    if (!user) {
                        return res.status(401).send('Invalid token');
                    } else {
                        // if (user.devices.length > 4) {
                        //     user.devices.splice(0, 1); }
                        // for (let i = 0; i < user.devices.length; i++) {
                        //     if (i == user.devices.length - 1 && user.devices[i].deviceId != deviceId) {
                        //         return res.status(401).send('Invalid token');
                        //     }else if(user.devices[i].deviceId == deviceId){
                        //         break;
                        //     }
                        // }
                     
                        req.user = user;
                        next();
                    }
                }
            }
        )
    }
}


// const handleRefreshToken = async (req, res  , next) => {
//     next()
// }
module.exports = { handleRefreshToken }