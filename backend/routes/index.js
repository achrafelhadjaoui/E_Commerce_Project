const express = require('express')
const userSignUpController = require('../controller/user/userSignUp')
const userSigninController = require('../controller/user/userSignin')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProductController = require('../controller/product/getCategoryProduct')

const router = express.Router()

router.post('/signup', userSignUpController)
router.post('/signin', userSigninController)
router.get('/user-details', authToken , userDetailsController)
router.get('/userLogout', userLogout)

//admin panel
router.get("/all-users", authToken , allUsers)
router.post("/update-user", authToken, updateUser)

//product
router.post("/upload-product", authToken, UploadProductController)
router.get("/get-product", getProductController)
router.post("/update-product", authToken , updateProductController)
router.get("/get-categoryProduct", getCategoryProductController)


module.exports = router;