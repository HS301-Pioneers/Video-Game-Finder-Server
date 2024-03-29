"use strict";
let cache = require('./cache.js');
const axios = require("axios");
module.exports = findGames;

async function findGames(query) {
    const key = "game- " + query;
    const url = `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search="${query}"`
    console.log(url);
    if (cache[key] && (Date.now() - cache[key].timestamp < 10800000)) {
        console.log("Cache hit");
      } else {
        console.log("Cache miss");
        cache[key] = {};
        cache[key].timestamp = Date.now();
        cache[key].data = await axios.get(url)
          .then((response) => getGames(response.data));
      }
      console.log("Cache: ", cache);
      return cache[key].data;
}

async function getGames(query) {
  // const url = `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search="${query}"`
  console.log("GetGames Called");
    try {
      // const gameData = await axios.get(url)
      // console.log("GameData: ", query);
      const gameSummary = query.results.map((game) => {
        return new Gamecast(game);
      });
      console.log("Data: ", gameSummary);
      return Promise.resolve(gameSummary); 
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
  
  function Gamecast(game) {
    this.gameName = game.name;
    this.genres = game.genres;
    this.gameTags = game.tags;
    this.platforms = game.platforms;
    this.backgroundImg = game.background_image;
    this.gameStores = game.stores;
    this.release_date = game.released
    this.gameStars = game.rating
    this.rating = game.esrb_rating
    this.screenshot1 = game.short_screenshots[0]
    this.screenshot2 = game.short_screenshots[1]
  }