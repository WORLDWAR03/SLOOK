var express  = require('express');
const { getProducts } = require('../controllers/userController');
var router = express.Router();
// const userAuth = require('')

router.get('/getProducts',getProducts)

module.exports =router;