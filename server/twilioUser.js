'use strict'

// Require to grab env vars
const dotenv = require('dotenv');
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  dotenv.config({path: '.env'});
} else {
  dotenv.config({path: '.env.test', silent: true});
}

// Destructure env vars from
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env 
// Require the Twilio module and create a REST client
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)


// Twilio method function
module.exports.sendSms = (to, message) => {
  client.messages.create({ 
      to: "+16159722717", 
      from: "+16159888258", 
      body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
      mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",  
  }, function(err, message) { 
      console.log(message.sid) 
  })
}