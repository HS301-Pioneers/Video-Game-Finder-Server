'use strict';

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/test", (request, response) => {
    response.send("test request received");
  });

app.listen(PORT, () => console.log(`listening on ${PORT}`));

// Mongo database for later
// const db = mongoose.connection;
// const Book = require("./models/books");

// mongoose.connect(process.env.MONGO_CONNECT);
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", (_) => {
//   console.log("Mongo Atlas connection sucessful");
// });