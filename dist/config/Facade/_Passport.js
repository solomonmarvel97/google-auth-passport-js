"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const GoogleStrategy = require("passport-google-oauth20");
const keys_1 = __importDefault(require("../keys"));
const model_1 = __importDefault(require("../../packages/authentication/model"));
// serialize user for working with cookie
passport_1.default.serializeUser((user, cb) => {
    cb(null, user.id);
});
// passport deserializing user when the cookie comes back from the browser
passport_1.default.deserializeUser((id, cb) => {
    model_1.default.findById({ id }).then((user) => {
        return cb(null, user);
    });
});
// passport auth strategy
passport_1.default.use(new GoogleStrategy({
    // options for the google strategy
    callbackURL: "/auth/google/redirect",
    clientID: keys_1.default.google.clientID,
    clientSecret: keys_1.default.google.clientSecret,
}, (accessToken, refreshToken, profile, done) => {
    //passport callback function
    // console.log('callback function fired')
    // console.log(profile)
    model_1.default.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
            // already have this user
            done(null, currentUser);
        }
        else {
            // if not, create user in our db
            new model_1.default({
                googleId: profile.id,
                username: profile.displayName,
                thumbnail: profile._json.image.url
            }).save().then((newUser) => {
                done(null, newUser);
            });
        }
    });
}));
