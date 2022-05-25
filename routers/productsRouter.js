const express = require('express');
const router = express.Router();
const controllers = require ('../controllers/productsController');



router.get('/', controllers.allProducts);
router.get('/productCart', controllers.productCart);
router.get('/productDetail/:id', controllers.productDetail);
router.get('/categories/:categoria', controllers.productDetail);
router.get('/categories', controllers.categories);





router.get('/almacen', controllers.almacen);
router.get('/bebidas-con-alcohol', controllers.bebidasConAlcohol);
router.get('/bebidas', controllers.bebidas);
router.get('/carnes', controllers.carnes);
router.get('/higiene', controllers.higiene);
router.get('/lacteos', controllers.lacteos);
router.get('/limpieza', controllers.limpieza);
router.get('/verduleria', controllers.verduleria);
router.get('/agregarProductos', controllers.agregarProductos);


module.exports = router;