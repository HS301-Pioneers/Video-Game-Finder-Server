'use strict';

const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    gameName: {type: String},
    genres: {type: Array},
    gameTags: {type: Array},
    platforms: {type: Array},
    backgroundImg: {type: String},
    gameStores: {type: Array},
    release_date: {type: String},
    gameStars: {type: Number},
    rating: {type: Object},
    screenshot1: {type: Object},
    screenshot2: {type: Object},
})
const wishlistModel = mongoose.model('wishlistItem', wishlistSchema)
module.exports = wishlistModel;