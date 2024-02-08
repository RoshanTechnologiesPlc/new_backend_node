const User = require('../../schemas/user_model');
const jwt = require('jsonwebtoken');
const generateAccessTokenForUser = require('./generateToken').generateAccessTokenForUser;
const generateRefreshTokenForUser = require('./generateToken').generateRefreshTokenForUser;
const handleRefreshToken = async (req, res) => {
 
    const refreshToken =  req.headers?.refreshToken
   
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (err, decoded) => {
                if (err) return res.sendStatus(403);    }   )
       
  

    const newRefreshTokenArray = foundUser.refreshToken.filter(rt => rt !== refreshToken);

    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, decoded) => {
            if (err) {
                console.log('expired refresh token')
                foundUser.refreshToken = [...newRefreshTokenArray];
                const result = await foundUser.save();
                console.log(result);
            }
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403);

            const phoneNumber = decoded.phoneNumber;
            const deviceId = decoded.deviceId;
            const foundUser  = await User.findOne({phoneNumber})
            const accessToken = generateAccessTokenForUser(phoneNumber, deviceId);

            const newRefreshToken = generateRefreshTokenForUser(phoneNumber, deviceId);
            for(let i = 0 ; i < foundUser.devices.length ; i++){
                if(foundUser.devices[i].id === deviceId){
                    foundUser.devices[i].refreshToken = newRefreshToken
                }   }
            const result = await foundUser.save();
            res.status(200).json({ accessToken  , refreshToken})
        }
    );
}

module.exports = { handleRefreshToken }