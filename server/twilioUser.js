'use strict'

// Require env vars
const config = require('./twilioConfig')
// Require the Twilio module and create a REST client 
const client = require('twilio')(config.accountSid, config.authToken)

// Twilio method
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

// module.exports.sendSms = (to, message) => {
//   client.messages.create({
//     body: message,
//     to: to,
//     from: config.sendingNumber
// //  mediaUrl: imageUrl
//   }, (err, data) => {
//     if (err) {
//       console.error('Could not notify User');
//       console.error(err);
//     } else {
//       console.log('User notified');
//     }
//   })
// }