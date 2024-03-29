const Favorite = require('../models/Favorite')

const favoriteNumber = (req, res) => {
    Favorite.find({ "movieId": req.body.movieId })
        .exec((err, favorite) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, favoriteNumber: favorite.length })
        })
}

const favorited = (req, res) => {
    Favorite.find({ "movieId": req.body.movieId, "userForm": req.body.userForm })
        .exec((err, favorite) => {
            if (err) return res.status(400).send(err)

            let result = false
            if (favorite.length !== 0) {
                result = true
            }

            res.status(200).json({ success: true, favorited: result })
        })
}

const addToFavorite = (req, res) => {
    const favorite = new Favorite(req.body)
    favorite.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })

}

const removeFromFavorite = (req, res) => {
    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err })
            res.status(200).json({ success: true, doc })
        })
}

const getFavoriteMovie = (req, res) => {
    Favorite.find({ 'userForm': req.body.userFrom })
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, favorites })
        })
}

module.exports = {
    favoriteNumber,
    favorited,
    addToFavorite,
    removeFromFavorite,
    getFavoriteMovie,
}