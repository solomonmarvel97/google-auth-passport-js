"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express_1 = require("express");
const passport = require("passport");
let router = (0, express_1.Router)();
let home = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render("home");
});
let login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //handle with passport
    res.render("login");
});
let google = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //handle with passport
    res.send("logging in with google");
});
let logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //handle with passport
    res.send("logging out");
});
// routes
router.get("/", home);
router.get("/auth/login", login);
router.get("/auth/google", passport.authenticate("google", {
    scope: ["profile"],
}));
router.get("/auth/google/redirect", passport.authenticate("google"), (req, res) => {
    res.send(req.user);
});
router.get("/login", logout);
module.exports = {
    router,
};
