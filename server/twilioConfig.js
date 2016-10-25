'use strict'

// Don't think I need these top lines
// const dotenv = require('dotenv');
// let cfg = {};

// if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
//   dotenv.config({path: '.env'});
// } else {
//   dotenv.config({path: '.env.test', silent: true});
// }

// // HTTP Port to run our web application
// cfg.port = process.env.PORT || 3000;

// // A random string that will help generate secure one-time passwords and
// // HTTP sessions
// cfg.secret = process.env.APP_SECRET || 'keyboard cat';

const cfg = {
	accountSid: process.env.TWILIO_ACCOUNT_SID,
	authToken: process.env.TWILIO_AUTH_TOKEN,
	sendingNumber: process.env.TWILIO_NUMBER
}

const requiredConfig = [cfg.accountSid, cfg.authToken, cfg.sendingNumber];
const isConfigured = requiredConfig.every(function(configValue) {
  return configValue || false;
});

if (!isConfigured) {
  const errorMessage =
    'TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_NUMBER must be set.';

  throw new Error(errorMessage);
}

// Export configuration object
module.exports = cfg;