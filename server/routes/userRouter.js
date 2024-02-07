var express  = require('express');
const { getProducts } = require('../controllers/userControle');
var router = express.Router();
// const userAuth = require('')

router.get('/getProducts',getProducts)


module.exports =router;