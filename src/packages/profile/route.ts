import { Router } from "express";
import { profile } from "./handler";
const router = Router();


import { Request, Response, NextFunction } from "express";

const authCheck = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.user)
  next();
};

// routes
router.get("/", authCheck, (req: Request, res: Response) => {
  res.send(req.cookies)
});

export = {
  router,
};
