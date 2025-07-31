const express = require('express')
const { loginControlller, registerController } = require('../controllers/userControllers')

//router object
const router = express.Router()

//routers
// POST || LOGIN
router.post('/login',loginControlller)

//POST || REGISTER USER
router.post('/register',registerController)


module.exports = router