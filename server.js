'use strict';

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const axios = require("axios");
const findGames = require("./modules/games.js")
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_CONNECT);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", (_) => {
  console.log("Mongo Atlas connection sucessful");
});

app.get("/test", (request, response) => {
    response.send("test request received");
  });

app.get("/games", getGames);

function getGames(request, response) {
  let search = request.query.gameName
  
  findGames(search)
  .then(gameData => response.status(200)
  .send(gameData))
  .catch( e => {
    console.error(e)
    response.status(500)
    .send("I'm sorry an internal server error occured. Trying again, if the problem persists call support at Fake-Num-Ber.")
  })
}

app.get("/wishlist", wishlistData);

async wishlistData(request, response) {...}


app.listen(PORT, () => console.log(`listening on ${PORT}`));
// Mongo database for later

// const Book = require("./models/books");

// mongoose.connect(process.env.MONGO_CONNECT);
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", (_) => {
//   console.log("Mongo Atlas connection sucessful");
// });