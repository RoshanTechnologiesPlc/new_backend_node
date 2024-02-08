const jwt = require('jsonwebtoken');
const User = require('../schemas/user_model');

require('dotenv').config();
const verifyUserAccessToken = async (req, res, next) => {
    // console.log('verifying')

    const accessToken = req.headers['accesstoken'];
    // console.log(req.headers)
    // console.log(accessToken)
    if (!accessToken) {
        console.log('no token')
        return res.status(401).send('Access denied');
    }else{
        jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_SECRET,
            async (err, decoded) => {

                if (err) { 
                    // console.log('invalid token')
                    return res.status(401).send('Invalid token');
                } else {
                    const id = decoded.id
                    const user = await User.findOne({id});
                    if (!user) {
                        // console.log(id)
                        // console.log('no user')
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
                        // console.log('verified')
                        req.user = user;
                        next();
                    }
                }
            }
        )
    }
}

// const verifyUserAccessToken = async (req, res, next) => {
//     next();
// }

module.exports  = verifyUserAccessToken;