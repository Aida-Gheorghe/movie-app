const User = require('../models/user')

const getAll = (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error: ${err}`))
}

const postUser = (req, res) => {
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    const birthday = Date.parse(req.body.birthday)
    const country = req.body.country
    const city = req.body.city
    const about = req.body.about

    const newUser = new User({ fname, lname, email, birthday, country, city, about })

    newUser.save().then(() => res.json('User added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

const gedUserId = (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error: ${err}`))
}


const patchUser = (req, res) => { // edit only if it does exist!
    User.findById(req.params.id)
        .then(user => {
            user.fname = req.body.fname
            user.lname = req.body.lname
            user.email = req.body.email
            user.birthday = Date.parse(req.body.birthday)
            user.country = req.body.country
            user.city = req.body.city
            user.about = req.body.about

            user.save()
                .then(() => res.json('User Patch edit!'))
                .catch(err => res.status(400).json(`Error: ${err}`))

        })
        .catch(err => res.status(400).json(`Error: ${err}`))
}

const putUser = (req, res) => {
    const id = req.params.id
    User.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                birthday: Date.parse(req.body.birthday),
                country: req.body.country,
                city: req.body.city,
                about: req.body.about,
            }
        },
        { upsert: true }
    )
        .then(() => {
            res.json('User update!')
        })
        .catch(err => res.status(400).json(`Error: ${err}`))

}


const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted'))
        .catch(err => res.status(400).json(`Error: ${err}`))
}

module.exports = {
    getAll,
    postUser,
    gedUserId,
    patchUser,
    putUser,
    deleteUser,

}