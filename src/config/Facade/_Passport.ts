import passport from "passport";
const GoogleStrategy = require("passport-google-oauth20");
import keys from "../keys";

import User from "../../packages/authentication/model";

// serialize user for working with cookie
passport.serializeUser((user: any, cb: any) => {
  cb(null, user.id);
});

// passport deserializing user when the cookie comes back from the browser
passport.deserializeUser((id: any, cb: any) => {
  User.findById({ id }).then((user: any) => {
    return cb(null, user);
  });
});

// passport auth strategy
passport.use(
  new GoogleStrategy(
    {
      // options for the google strategy
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
    },
    (accessToken: any, refreshToken: any, profile: any, done: any) => {
      //passport callback function
      // console.log('callback function fired')
      // console.log(profile)
      User.findOne({ googleId: profile.id }).then((currentUser: any) => {
        if (currentUser) {
          // already have this user
          done(null, currentUser);
        } else {
          // if not, create user in our db
          new User({
            googleId: profile.id,
            username: profile.displayName,
            thumbnail: profile._json.image.url
          }).save().then((newUser) => {
            done(null, newUser);
          });
        }
      })
    }
  )
);

