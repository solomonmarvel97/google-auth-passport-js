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
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleRedirect = exports.google = exports.logout = exports.login = void 0;
const passport = require("passport");
let login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //handle with passport
    res.send("authenticated");
});
exports.login = login;
let logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.logout();
    res.redirect('/');
});
exports.logout = logout;
let google = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.google = google;
let googleRedirect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(req.user);
});
exports.googleRedirect = googleRedirect;
