const paypal = require('paypal-rest-sdk');
require('dotenv').config();

const paypalConfig = {
    mode: 'sandbox',
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_CLIENT_SECRET
};
  

paypal.configure(paypalConfig);
  
module.exports = paypal;
  