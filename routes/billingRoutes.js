const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin')

module.exports = (app) => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        //Finalize charge
        //console.log(req.body);

       const charge =  await stripe.charges.create(
            {
                amount: 500,
                currency: 'usd',
                description: 'Argumes membership',
                source: req.body.id
            }
        )
        
        //console.log(charge);

        req.user.credits += 5;
        const user = await req.user.save();
        //console.log(user);
        res.send(user);
    });
}

