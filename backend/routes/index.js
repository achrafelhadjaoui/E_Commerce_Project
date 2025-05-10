const express = require('express')
const userSignUpController = require('../controller/userSignUp')
const userSigninController = require('../controller/userSignin')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')
const allUsers = require('../controller/allUsers')
const updateUser = require('../controller/updateUser')

const router = express.Router()

router.post('/signup', userSignUpController)
router.post('/signin', userSigninController)
router.get('/user-details', authToken , userDetailsController)
router.get('/userLogout', userLogout)

//admin panel
router.get("/all-users", authToken , allUsers)
router.post("update-user", authToken, updateUser)

module.exports = router;