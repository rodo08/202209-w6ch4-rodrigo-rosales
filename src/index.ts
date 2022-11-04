import express from "express";
import * as dotenv from "dotenv";
import getThings from "./cotrollers/getThings.js";
import getThingById from "./cotrollers/getThingsById.js";

const { log } = console;

dotenv.config();
const app = express();
const port = process.env.PORT;

const server = app.listen(port, () => {
  log(`listening to ${port}`);
});

app.get("/things", getThings);
app.get("/things/:thingById", getThingById);

app.use((req, res) => {
  res.status(404).json({ message: "print message" });
});

server.on("error", (error) => {
  log("Error on starting server", error.message);
});
