import express from "express";
import * as dotenv from "dotenv";

const { log } = console;

dotenv.config();
const app = express();
const port = process.env.PORT;

const server = app.listen(port, () => {
  log(`listening to ${port}`);
});

app.use((req, res) => {
  res.status(200).json({ message: "print message" });
});

server.on("error", (error) => {
  log("Error on starting server", error.message);
});
