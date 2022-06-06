"use strict";
let cache = require('./cache.js');
const axios = require("axios");
module.exports = findGenres;

async function findGenres(query) {
    const key = "genre- " + query;
    const url = `https://api.rawg.io/api/games?key=${process.env.API_KEY}&genre=${query}`
    console.log(url);
    if (cache[key] && (Date.now() - cache[key].timestamp < 10800000)) {
        console.log("Cache hit");
      } else {
        console.log("Cache miss");
        cache[key] = {};
        cache[key].timestamp = Date.now();
        cache[key].data = await axios.get(url)
          .then((response) => getGenres(response.data));
      }
      console.log("Cache: ", cache);
      return cache[key].data;
}

async function getGenres(query) {
  console.log("GetGenres Called");
    try {
      const genreSummary = query.results.map((game) => {
        return new Genrecast(game);
      });
      console.log("Data: ", genreSummary);
      return Promise.resolve(genreSummary); 
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
  
  function Genrecast(game) {
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