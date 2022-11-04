import type { Request, Response } from "express";
import thingsIknow from "../data/thingsIKnow.js";

const getThingById = (res: Response, req: Request) => {
  const { thingById } = req.params;

  const { things } = thingsIknow;

  const thing = things.filter((things) => things.id === Number(thingById));

  if (!thing) {
    res.status(404).json({ message: "404 not found" });
  }
};

export default getThingById;
