const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');
const bodyParser = require('body-parser');
const { dirname } = require('path');

//Models
require('./models/User');
require('./models/Survey');

//Services
require('./services/passport');

//Mongoose DB connection
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKeys]
}))

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV = 'production') {
    //Express will send client side js/css
    app.use(express.static('client/build'));

    //Express will serve index.tml from static if unknown route
    const path = require('path');
    app.get('*', (req, resp) => {
        resp.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5001;

app.listen(PORT);