"use strict";
const express_1 = require("express");
const passport = require("passport");
const handler_1 = require("./handler");
const router = (0, express_1.Router)();
// routes
router.get("/google", passport.authenticate("google", { scope: ["profile"] }), handler_1.google);
router.get("/google/redirect", passport.authenticate("google"), handler_1.googleRedirect);
router.get("/login", handler_1.login);
router.get("/logout", handler_1.logout);
router.get('/home', (req, res) => {
    res.send(req.user);
});
module.exports = {
    router,
};
