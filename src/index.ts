import express from "express";

const app = express();
const port = 4000;

const server = app.listen(port, () => {
  console.log(`listening to ${port}`);
});
