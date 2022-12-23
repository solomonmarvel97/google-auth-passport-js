import { Request, Response, NextFunction } from "express";



const profile = async (req: Request, res: Response) => {
  //handle with passport
  res.send(req.user)
};

export { profile };
