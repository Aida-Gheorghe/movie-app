const express = require('express')
const controller = require('../controllers/users')
const router = express.Router();

router.get('/all', controller.getAll) //get all
router.post('/new', controller.postUser)// add new user
router.get('/byid/:id', controller.gedUserId)  //  get one
router.patch('/edit/:id', controller.patchUser) // if exist edit else error
router.put('/update/:id', controller.putUser) // if exist edit else add a new user
router.delete('/delete/:id', controller.deleteUser) // delete user



module.exports = router
