const express = require('express');
const router = express.Router();
const path = require ('path')

const productsController = require('../controllers/productsController');


router.get('/', productsController.index);
router.get('/productCart', productsController.productCart);
router.get('/productDetail/:id', productsController.productDetail);
// router.get('/categories', productsController.categories);
router.get('/:categoria', productsController.categoriaProducto);




module.exports = router;