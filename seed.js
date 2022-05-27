'use strict';

require('dotenv').config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_CONNECT);

const Wishlist = require("./model/wishlist.js");

async function wishlistAdd() {
    console.log("Wonderful wishes for games loading...!");

    await Wishlist.create({
        nameName: "nam",
        genres: ["wow", "this", "an", "array"],
        gameTags: ["wow", "gametags"],
        platforms: ["You can play this game on", "JK YOU CAN'T HAHAHAHHAHA"],
        backgroundImg: "https://http.cat/404",
        gameStores: ["You can buy this game on", "https://www.thisworldthesedays.com/neural-mapping.html"],
        release_date: "We was released on May 27th, 2022",
        gameStars: 0,
        rating: {esrb: "this isn't rated", reccomend: "No one should play this"},
        screenshot1: {item: 1, url: "https://http.cat/500"},
        screenshot2: {item: 2, url: "https://http.cat/200"},
    });
    console.log("Wonderful wishes for games loaded!");
    mongoose.disconnect()
}

wishlistAdd();
const returnData = [
    {
      "gameName": "Minecraft",
      "genres": [
        {
          "id": 4,
          "name": "Action",
          "slug": "action"
        },
        {
          "id": 11,
          "name": "Arcade",
          "slug": "arcade"
        },
        {
          "id": 14,
          "name": "Simulation",
          "slug": "simulation"
        },
        {
          "id": 51,
          "name": "Indie",
          "slug": "indie"
        },
        {
          "id": 59,
          "name": "Massively Multiplayer",
          "slug": "massively-multiplayer"
        }
      ],
      "gameTags": [
        {
          "id": 7,
          "name": "Multiplayer",
          "slug": "multiplayer",
          "language": "eng",
          "games_count": 30958,
          "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
        },
        {
          "id": 37,
          "name": "Sandbox",
          "slug": "sandbox",
          "language": "eng",
          "games_count": 4836,
          "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
        },
        {
          "id": 125,
          "name": "Crafting",
          "slug": "crafting",
          "language": "eng",
          "games_count": 2600,
          "image_background": "https://media.rawg.io/media/games/436/436201bdffb5e27c9ea883a8fd026f69.jpg"
        },
        {
          "id": 39,
          "name": "Building",
          "slug": "building",
          "language": "eng",
          "games_count": 4234,
          "image_background": "https://media.rawg.io/media/games/02f/02f775a806c6cd64c28d5aeca928dc76.jpg"
        },
        {
          "id": 571,
          "name": "3D",
          "slug": "3d",
          "language": "eng",
          "games_count": 61268,
          "image_background": "https://media.rawg.io/media/screenshots/bc5/bc50266c05f2cc473bf98c4033c2f285.jpg"
        },
        {
          "id": 62349,
          "name": "vr mod",
          "slug": "vr-mod",
          "language": "eng",
          "games_count": 17,
          "image_background": "https://media.rawg.io/media/games/645/64578c2a6daa30995692525172fd13ef.jpg"
        },
        {
          "id": 43574,
          "name": "open-world",
          "slug": "open-world-2",
          "language": "eng",
          "games_count": 8,
          "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
        },
        {
          "id": 4441,
          "name": "cube",
          "slug": "cube",
          "language": "eng",
          "games_count": 2043,
          "image_background": "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg"
        },
        {
          "id": 14973,
          "name": "modding",
          "slug": "modding",
          "language": "eng",
          "games_count": 4,
          "image_background": "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg"
        },
        {
          "id": 1372,
          "name": "procedural-generation",
          "slug": "procedural-generation-2",
          "language": "eng",
          "games_count": 41,
          "image_background": "https://media.rawg.io/media/screenshots/bfd/bfd5f710aa2e85cefdcc2497587d1401.jpg"
        }
      ],
      "platforms": [
        {
          "platform": {
            "id": 4,
            "name": "PC",
            "slug": "pc"
          }
        },
        {
          "platform": {
            "id": 18,
            "name": "PlayStation 4",
            "slug": "playstation4"
          }
        },
        {
          "platform": {
            "id": 1,
            "name": "Xbox One",
            "slug": "xbox-one"
          }
        },
        {
          "platform": {
            "id": 7,
            "name": "Nintendo Switch",
            "slug": "nintendo-switch"
          }
        },
        {
          "platform": {
            "id": 3,
            "name": "iOS",
            "slug": "ios"
          }
        },
        {
          "platform": {
            "id": 21,
            "name": "Android",
            "slug": "android"
          }
        },
        {
          "platform": {
            "id": 8,
            "name": "Nintendo 3DS",
            "slug": "nintendo-3ds"
          }
        },
        {
          "platform": {
            "id": 5,
            "name": "macOS",
            "slug": "macos"
          }
        },
        {
          "platform": {
            "id": 6,
            "name": "Linux",
            "slug": "linux"
          }
        },
        {
          "platform": {
            "id": 14,
            "name": "Xbox 360",
            "slug": "xbox360"
          }
        },
        {
          "platform": {
            "id": 16,
            "name": "PlayStation 3",
            "slug": "playstation3"
          }
        },
        {
          "platform": {
            "id": 19,
            "name": "PS Vita",
            "slug": "ps-vita"
          }
        },
        {
          "platform": {
            "id": 10,
            "name": "Wii U",
            "slug": "wii-u"
          }
        }
      ],
      "backgroundImg": "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg",
      "gameStores": [
        {
          "store": {
            "id": 3,
            "name": "PlayStation Store",
            "slug": "playstation-store"
          }
        },
        {
          "store": {
            "id": 2,
            "name": "Xbox Store",
            "slug": "xbox-store"
          }
        },
        {
          "store": {
            "id": 4,
            "name": "App Store",
            "slug": "apple-appstore"
          }
        },
        {
          "store": {
            "id": 6,
            "name": "Nintendo Store",
            "slug": "nintendo"
          }
        },
        {
          "store": {
            "id": 8,
            "name": "Google Play",
            "slug": "google-play"
          }
        }
      ],
      "release_date": "2009-05-10",
      "gameStars": 4.43,
      "rating": {
        "id": 2,
        "name": "Everyone 10+",
        "slug": "everyone-10-plus",
        "name_en": "Everyone 10+",
        "name_ru": "С 10 лет"
      },
      "screenshot1": {
        "id": -1,
        "image": "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg"
      },
      "screenshot2": {
        "id": 565530,
        "image": "https://media.rawg.io/media/screenshots/324/32454b11adde40d87c046f310f0d710d.jpg"
      }
    }
  ]