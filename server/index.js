require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectionDB = require("./db/connect");
const bodyParser = require("body-parser");
const posts = require("./router/pathes");

// middleware

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// routes
app.use("/", posts);

// server port
const port = process.env.SERVER_PORT;

connectionDB.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("server connected");
    app.listen(port, () => {
      console.log(`Start on ${port}`);
    });
  }
});
