"use strict";
const express_1 = require("express");
const router = (0, express_1.Router)();
const authCheck = (req, res, next) => {
    console.log(req.user);
    next();
};
// routes
router.get("/", authCheck, (req, res) => {
    res.send(req.cookies);
});
module.exports = {
    router,
};
