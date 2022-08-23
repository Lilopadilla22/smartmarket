const express = require('express')
const router = express.Router();

const controller = require('../../controllers/apis/apiProductsController');

router.get('/list-products', controller.listProducts)
router.get('/list-categories', controller.listCategories)
router.get('/show-product/:id', controller.showProduct)

module.exports = router;