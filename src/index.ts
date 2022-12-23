require("dotenv").config();
const keys = require("./config/keys");
const mongoose = require("mongoose");
// database connection
mongoose.connect(keys.mongodb.uri, () => {
  console.log("Database Connected Successfully");
});

const express = require("express");
const app = express();
const passportSetup = require("./config/Facade/_Passport");
const passport = require("passport");
const cookieSession = require("cookie-session");
const { settings } = require("./config/Facade/_Settings");
const {
  router: authenticationRouter,
} = require("./packages/authentication/route");
const { router: profileRouter } = require("./packages/profile/route");
var cors = require("cors");
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));



app.use("/auth", authenticationRouter);
app.use("/profile", profileRouter);

app.set("view engine", "ejs");
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
    resave: true,
    saveUninitialized: true,
  })
);
// initialize passport
app.use(passport.initialize());
app.use(passport.session());

let port = settings.getPort();
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
