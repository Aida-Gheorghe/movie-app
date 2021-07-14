const express = require('express')
const db = require('./db')
const users = require('./routes/users')
const favorite = require('./routes/favorite')
require('dotenv').config()

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/api/favorite', favorite)
app.use('/users', users)

app.listen(process.env.PORT || port, () => {
    console.log(`Server started on http://localhost:${port}`)
    db.init()
})