const express = require('express')
const controller = require('../controllers/favorite')
const router = express.Router();

router.post('/favoriteNumber', controller.favoriteNumber)

router.post('/favorited', controller.favorited)

router.post("/addToFavorite", controller.addToFavorite)

router.post("/removeFromFavorite", controller.removeFromFavorite)

router.post("/getFavoriteMovie", controller.getFavoriteMovie)

module.exports = router