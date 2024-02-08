const crypto = require('crypto');

function generate4DigitSecureOTP() {
  const buffer = crypto.randomBytes(2); // 2 bytes will generate a 4-digit number
  const otp = (buffer.readUInt16BE(0) % 10000).toString().padStart(4, '0');

  return otp;
}

// // Usage
// const secureOTP = generate4DigitSecureOTP();
// console.log(secureOTP);

module.exports = generate4DigitSecureOTP