const express = require('express')
const router = express.Router();

const controller = require('../../controllers/apis/apiProductsController');

router.get('/products', controller.listProducts)
router.get('/product/:id', controller.showProduct)
router.get('/product/:id/image', controller.showProductImage)

module.exports = router;