const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')
const FacebookStrategy = require('passport-facebook')


const GOOGLE_CLIENT_ID = "450824895681-6uar4cut594oj6lfcttojh7l4aqfup7l.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
const FACEBOOK_APP_ID = "695211021674418"
const FACEBOOK_APP_SECRET = "b8da02d78e38f940719ff67b420c383b"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    cb(null, profile)
  }
));

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: "/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, cb) {
  cb(null, profile)
}
));

passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})