const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')


const GOOGLE_CLIENT_ID = "450824895681-6uar4cut594oj6lfcttojh7l4aqfup7l.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

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

passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})