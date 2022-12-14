
module.exports = {
    GoogleClientID: process.env.GOOGLE_CLIENT_ID, 
    GoogleClientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    mongoURI: process.env.MONGO_URI,
    cookieKeys: 'userId',
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendGridKey: process.env.SEND_GRID_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN
}
