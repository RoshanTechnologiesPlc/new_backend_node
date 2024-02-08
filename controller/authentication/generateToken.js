const jwt = require('jsonwebtoken');
require('dotenv').config()

function generateRefreshTokenForUser(userId) {

    //phone number has been substituted by userId
    return jwt.sign(
        {  "id" : userId,
            },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '90d' }   );
} 

function generateAccessTokenForUser(userId){
    return jwt.sign(
        {  "id" : userId,
           },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15d' }   );
}

module.exports = {
    generateRefreshTokenForUser,
    generateAccessTokenForUser
}