const express = require('express');
const router = express.Router();
const path = require ('path')
const multer = require('multer');

const productsController = require('../controllers/productsController');



// ************ MULTER ************
const upload = require('../middlewares/multerProductsmiddleware');

router.get('/', productsController.index);
router.get('/carrito', productsController.productCart);
router.get('/detalle-de-producto/:id', productsController.productDetail);
router.get('/categorias', productsController.categorias);
router.get('/categoria/:categoria', productsController.categoriaProducto);

// /*** EDIT ONE PRODUCT ***/ 
router.get('/editar-producto/:id', productsController.edit); 
router.put('/editar-producto/:id', upload.any(), productsController.update); 


// // CREATE ONE PRODUCT //
router.get('/crear-producto', productsController.create);
router.post('/crear-producto', upload.any(), productsController.store);

// DELETE ONE PRODUCT //
router.delete('/borrar-producto/:id', productsController.destroy);



module.exports = router;