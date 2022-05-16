const express = require('express');
const router = express.Router();
const controllers = require ('../controllers/mainController');


router.get('/', controllers.home);
router.get('/login', controllers.login);
router.get('/productCart', controllers.productCart);
router.get('/register', controllers.register);
router.get('/productDetail', controllers.productDetail);
router.get('/all-products', controllers.allProducts);
router.get('/almacen', controllers.almacen);
router.get('/bebidas-con-alcohol', controllers.bebidasConAlcohol);
router.get('/bebidas', controllers.bebidas);
router.get('/carnes', controllers.carnes);
router.get('/categories', controllers.categories);
router.get('/higiene', controllers.higiene);
router.get('/lacteos', controllers.lacteos);
router.get('/limpieza', controllers.limpieza);
router.get('/verduleria', controllers.verduleria);
router.get('/agregarProductos', controllers.agregarProductos);


module.exports = router;