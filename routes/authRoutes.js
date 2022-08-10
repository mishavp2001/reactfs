const passport = require('passport');

module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    
    app.get('https://fierce-thicket-67604.herokuapp.com//auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res)=> {
        const user = req.user
        req.logout();
        res.send(`${user}, you are logged out`);
    });

    app.get('/api/current_user', (req, res)=> {
        res.send(req.user);
    });
    

}

