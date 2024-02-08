const axios = require('axios')
const OTP = require('../../schemas/otp_schema')
const User = require('../../schemas/user_model')
const generateOtp  = require("../../functions/generate_otp")
require('dotenv').config()
const { updateUserData} = require('./register_user')
const generateAccessTokenForUser = require('./generateToken').generateAccessTokenForUser;
const generateRefreshTokenForUser = require('./generateToken').generateRefreshTokenForUser;
async function sendOtp(req, res){
  console.log('otp is requested')
  const TOKEN  = process.env.AFRO_SMS_KEY
    const phoneNumber = req.body.phoneNumber
    console.log(req.body)
    console.log(phoneNumber)
    const otpNum = generateOtp()
    const message = `Testaet, your sms verification code is :${otpNum}` 
    console.log(otpNum)
    const config = {
        method : 'GET' , 
        headers : {
            'Authorization': `Bearer ${TOKEN}` 
        } , 
        url  : `https://api.afromessage.com/api/send?from=e80ad9d8-adf3-463f-80f4-7c4b39f7f164&to=0918752015&message=${message}`
    }
//    res =  await axios(config)
   try{
    await axios(config)

  



const newOTP = {
  phoneNumber: phoneNumber.toString() ,
  otpCode: otpNum.toString() ,
  otpExpireAt: new Date(Date.now() + 10 * 60 * 60 * 1000), 
  otpCreatedAt: new Date(),
    otpUsed: false,

};



try{
    await OTP.findOneAndUpdate({
        phoneNumber : phoneNumber
    } , 
    newOTP , 
    {
        upsert : true 
    } ,
    )
console.log(`otp is sent to the number ${phoneNumber}`)
return    res.status(200).send('otp is sent to the number')
}catch(e){
    console.log(`error is caught ${e}`)
    res.status(502).send(`internal server error `);
}


   }catch(e){
    console.log(`error is caught ${e}`)
    res.send(e)
   }
}



async function verifyOTP(req, res) {
    const phoneNumber = req.body.phoneNumber;
    const enteredOTP = req.body.otp;
    const deviceId = req.body.deviceId;
    const name  = req.body.name
    const id = req.user.id
    console.log(`otp verification requested for ${phoneNumber} ,  ${enteredOTP}  , 
    with device id of ${deviceId} and 
    name of ${name}
    
    `)
    try{
        const otpDoc = await  OTP.findOne({ phoneNumber });
        if (!otpDoc) {
            res.status(404).send('Phone number not found');
          } else {
            console.log('otp is verified')
            const currentTimestamp = new Date();
            if (otpDoc.otpCode === enteredOTP) {
              if (!otpDoc.otpUsed && otpDoc.otpExpireAt > currentTimestamp) {
                // Mark OTP as used in the database
                otpDoc.otpUsed = true;
                otpDoc.save();
                const doesUserExist = await User.findOne({phoneNumber})
                const accessToken = generateAccessTokenForUser(phoneNumber);
                const refreshToken = generateRefreshTokenForUser(phoneNumber);
                if(!doesUserExist){
                    console.log('user does not exist')
                    const isUserCreated = await  updateUserData(phoneNumber , id , name)
                    if(!isUserCreated){
                        console.log('user is not created')
                        return res.status(502).send('Internal Server Error');
                    }else{
                     
                      return res.status(201).json({
                        accessToken  : accessToken ,
                        refreshToken : refreshToken
                      });
                    }

                }else{
                  const isUserCreated = await  updateUserData(phoneNumber , id , name)
                }
                return res.status(200).json({
                  accessToken  : accessToken ,
                  refreshToken : refreshToken
                });
              } else {
                res.status(400).send('Invalid OTP or OTP has expired.');
              }
            } else {
              res.status(400).send('Invalid OTP.');
            }
          }
    }catch(e){
        console.error('Error while querying the database:', err);
     return   res.status(500).send('Internal Server Error');
    }
    
  }


  
module.exports = {sendOtp , verifyOTP}