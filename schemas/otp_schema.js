const mongoose = require('mongoose');

// Define the OTP schema
const otpSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  otpCode: {
    type: String,
    required: true,
  },
  otpCreatedAt: {
    type: Date,
    default: Date.now,
  },
  otpExpireAt: {
    type: Date,
  },
  otpUsed: {
    type: Boolean,
    default: false,
  },
});

// Create a model using the schema
const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;
