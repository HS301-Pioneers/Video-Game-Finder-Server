"use strict";
let cache = require('./cache.js');
const axios = require("axios");
module.exports = findGames;

async function findGames(gameName) {
    const key = "game- " + gameName;
    const query = gameName;
    const url = `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search="${query}"`
    console.log(url);
    if (cache[key] && Date.now() - cache[key].timestamp < 10800000) {
        console.log("Cache hit");
      } else {
        console.log("Cache miss");
        cache[key] = {};
        cache[key].timestamp = Date.now();
        cache[key].data = axios
          .get(url)
          .then((response) => getGames(response.data));
      }
      console.log("Data: ", cache[key].data);
      return cache[key].data;
}

function getGames(gameData) {
  console.log("GetGames Called");
    try {
      console.log("GameData: ", gameData);
      const gameSummary = gameData.data.results.map((game) => {
        return new Forecast(game);
      });
      console.log("Data: ", gameSummary);
      // return Promise.resolve(gameSummary);
    } catch (e) {
      console.log(e);
      // return Promise.reject(e);
    }
  }
  
  function Forecast(game) {
    this.gameName = game.name;
    this.genres = game.genres;
    this.gameTags = game.tags;
    this.platforms = game.platforms;
    this.backgroundImg = game.background_image;
    this.gameStores = game.stores;
    this.release_date = game.released
  }