const paypal = require('../config/payPalConfig')

const getClientId = (request, response) => {
    response.json({ clientId: process.env.PAYPAL_CLIENT_ID});
}

module.exports = {
    getClientId
}