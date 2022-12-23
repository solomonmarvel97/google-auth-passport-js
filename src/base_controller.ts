import { Request, Response, NextFunction, Router } from "express";
const passport = require("passport");

let router = Router();

let home = async (req: Request, res: Response) => {
  res.render("home");
};

let login = async (req: Request, res: Response) => {
  //handle with passport
  res.render("login");
};

let google = async (req: Request, res: Response) => {
  //handle with passport
  res.send("logging in with google");
};

let logout = async (req: Request, res: Response) => {
  //handle with passport
  res.send("logging out");
};

// routes
router.get("/", home);
router.get("/auth/login", login);
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);
router.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  (req: Request, res: Response) => {
    res.send(req.user);
  }
);
router.get("/login", logout);

export = {
  router,
};
