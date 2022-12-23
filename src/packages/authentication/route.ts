import { Request, Response, NextFunction, Router } from "express";
const passport = require("passport");
import { login, google, googleRedirect, logout } from "./handler";
const router = Router();

// routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] }),
  google
);
router.get("/google/redirect", passport.authenticate("google"), googleRedirect);

router.get("/login", login);
router.get("/logout", logout);

router.get('/home', (req: Request, res:Response) => {
  res.send(req.user)
})

export = {
  router,
};
