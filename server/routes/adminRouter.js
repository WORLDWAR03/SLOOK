var express  = require('express');
const { addProduct, remonveProduct } = require('../controllers/adminController');
var router = express.Router();
// const adminAuth = require('')

router.post('/addProduct', addProduct)
router.post('/removeProduct', remonveProduct)


module.exports =router;