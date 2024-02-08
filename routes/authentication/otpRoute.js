const express = require("express");
const otpController = require("../../controller/authentication/otp_controller");
const verifyUserAccessToken = require("../../middleware/verify_user_access_token");

const router = express.Router();


router.use(verifyUserAccessToken)


router.post("/generateOtp",   otpController.sendOtp);

router.post('/verifyOtp' , otpController.verifyOTP)

module.exports = router;
 