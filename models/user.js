const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    birthday: { type: Date, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    about: { type: String, required: true },
}, { timestamp: true })

const User = mongoose.model('User', userSchema)
module.exports = User

