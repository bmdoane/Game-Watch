// 'use strict'

// const twilioClient = require('../twilioUser')
// const fs = require('fs')
// // Have to hardcode or require user file?
// const admins = require('../config/administrators.json')

// const formatMessage = () => {
//   return 'You got this via twilio, fool!';
// };

// // How do I get this to work for user from Postman
// exports.notifyOnError = function(appError, request, response, next) {
//   admins.forEach(function(user) {
//     let messageToSend = formatMessage
//     twilioClient.sendSms(user.phoneNumber, messageToSend);
//   });
//   // next(appError);
// };


// // Twilio Credentials 
// var accountSid = 'AC01b35ef9421454e98c5c6cdf89adafbc'; 
// var authToken = 'your_auth_token'; 
 
// //require the Twilio module and create a REST client 
// var client = require('twilio')(accountSid, authToken); 
 
// client.messages.create({ 
//     to: "+15558675309", 
//     from: "+15017250604", 
//     body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
//     mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",  
// }, function(err, message) { 
//     console.log(message.sid) 
// })