import type { Request, Response } from "express";
import thingsIknow from "../data/thingsIKnow.js";

const getThings = (req: Request, res: Response) => {
  res.status(200).json(thingsIknow);
};

export default getThings;
