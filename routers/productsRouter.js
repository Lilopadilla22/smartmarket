const express = require('express');
const router = express.Router();
const controllers = require ('../controllers/productsController');



router.get('/', controllers.allProducts);
router.get('/productCart', controllers.productCart);
router.get('/productDetail/:id', controllers.productDetail);
router.get('/categories/:categoria', controllers.productDetail);
router.get('/categories', controllers.categories);




module.exports = router;