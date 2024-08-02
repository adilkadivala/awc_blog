require("dotenv").config();
const express = require("express");
const app = express();
const connectionDB = require("./db/connect");

const port = process.env.SERVER_PORT;

connectionDB.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(port, () => {
      console.log(`Start on ${port}`);
    });
  }
});
