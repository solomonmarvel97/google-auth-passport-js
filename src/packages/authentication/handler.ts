import { Request, Response, NextFunction } from "express";
const passport = require("passport");

let login = async (req: Request, res: Response) => {
  //handle with passport
  res.send("authenticated");
};

let logout = async (req: Request, res: Response) => {
  req.logout();
  res.redirect('/');
};

let google = async (req: Request, res: Response) => {};

let googleRedirect = async (req: Request, res: Response) => {
  res.send(req.user)
};

export { login, logout, google, googleRedirect };
