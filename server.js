'use strict';

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const axios = require("axios");
const findGames = require("./modules/games.js")
const findGenres = require("./modules/genres.js")
app.use(cors());
app.use(express.json());
const Wishlist = require("./model/wishlist");

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
app.get("/genres", getGenres);

function getGenres(request, response) {
  let search = request.query.genreName

  findGenres(search)
  .then(genreData => response.status(200)
  .send(genreData))
  .catch(e => {
    console.error(e)
    response.status(500)
      .send("I'm sorry, an internal server error occured. Please try again, if the problem persists, call Fak-Num-Ber")
  })
}

function getGames(request, response) {
  let search = request.query.gameName
  
  findGames(search)
  .then(gameData => response.status(200)
  .send(gameData))
  .catch( e => {
    console.error(e)
    response.status(500)
    .send("I'm sorry, an internal server error occured. Please try again, if the problem persists call support at Fake-Num-Ber.")
  })
}

app.get("/wishlist", wishlistData);
app.post("/wishlist", newWishlistItem);
app.delete("/wishlist/:id", deleteWishlistItem);

async function wishlistData(request, response) {
  try {
    const wishlist = await Wishlist.find({});
    response.status(200).send(wishlist);
  } catch (e) {
    console.error(e);
    response.status(500).send({message: "Internal Server Error", url: "https://httpstatusdogs.com/500"})
  }
}
async function newWishlistItem(request, response) {
  try {
    const wishlist = await Wishlist.create(request.body);
    response.status(200).send(wishlist);
  } catch(e){
    console.error(e)
    response.status(500).send({message: "Internal Server Error", url: "https://httpstatusdogs.com/500"})
  }
}
async function deleteWishlistItem(request, response) {
  try {
    const id = request.params.id;
    console.log(`Game that is no longer worthy of existing on my wishlist's id: ${id}`);
    await Wishlist.findByIdAndDelete(id);
    response.status(204).send("This game is no longer existing on my wishlist!");
    console.log("Bye bye game")
  } catch(e) {
    console.error(e)
    response.status(500).send({message: "Internal Server Error", url: "https://httpstatusdogs.com/500"})
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));