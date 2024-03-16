var express  = require('express');
const { addProduct, remonveProduct, getProducts, getSingleProduct } = require('../controllers/adminController');
var router = express.Router();
// const adminAuth = require('')

router.post('/addProduct', addProduct)
router.post('/removeProduct', remonveProduct)
router.get('/getProducts', getProducts)
router.get('/product',getSingleProduct)


module.exports =router;