var express  = require('express');
const {userRegister} =require('../controllers/authController')
var router = express.Router();
// const adminAuth = require('')

router.post('/userRegister', userRegister)




module.exports =router;