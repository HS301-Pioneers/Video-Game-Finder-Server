'use strict';

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const findGames = require("./modules/games.js")
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/test", (request, response) => {
    response.send("test request received");
  });

app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.get("/games", getGames);

function getGames(request, response) {
  let search = request.query.gameName
  
  findGames(search)
  .then(gameData => response.send(gameData))
  .catch( e => {
    console.error(e)
    response.status(500)
    .send("I'm sorry an internal server error occured. Trying again, if the problem persists call support at Fake-Num-Ber")
  })
}
// function weatherHandler(request, response) {
//   let lat = request.query.lat;
//   let lon = request.query.lon;
//   // let searchQuery = request.query.searchQuery;

//  getWeather(lat, lon)
//   .then(summaries => response.send(summaries))
//   .catch(error => {
//     console.log(error);
//     response.status(500).send('meow meow your request failed.');
//   })
// };
// Mongo database for later
// const db = mongoose.connection;
// const Book = require("./models/books");

// mongoose.connect(process.env.MONGO_CONNECT);
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", (_) => {
//   console.log("Mongo Atlas connection sucessful");
// });