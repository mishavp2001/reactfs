const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done)=>{
    done(null, user.id);
})

passport.deserializeUser((id, done)=>{
    User.findById(id).then((user)=>{
        done(null, user);
    })
})


passport.use(new GoogleStrategy({
    clientID: keys.GoogleClientID,
    clientSecret: keys.GoogleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
        //console.log("accessToken iui = ", accessToken);
        //console.log("refreshToken = ", refreshToken);
        //console.log("profile = ", profile);
        
        User.findOne({googleId: profile.id}).then((existingUser)=>{
            if(!existingUser) {
                new User({
                    googleId: profile.Id
                }).save().then((user)=>{
                    done(null, user);
                })

            } else {
                done(null, existingUser);
            }
        })
    }
));

