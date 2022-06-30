const express = require('express');
const router = express.Router();
const path = require ('path')
const multer = require('multer');
const authMiddleware = require ('../middlewares/authMiddleware')

const productsController = require('../controllers/productsController');



// ************ MULTER ************
const upload = require('../middlewares/multerProductsmiddleware');

router.get('/', productsController.index);
router.get('/carrito', authMiddleware,productsController.productCart);
router.get('/detalle-de-producto/:id', productsController.productDetail);
router.get('/categorias', productsController.categorias);
router.get('/categoria/:categoria', productsController.categoriaProducto);

// /*** EDIT ONE PRODUCT ***/ 
router.get('/editar-producto/:id', authMiddleware,productsController.edit); 
router.put('/editar-producto/:id', upload.any(), productsController.update); 


// // CREATE ONE PRODUCT //
router.get('/crear-producto', authMiddleware,productsController.create);
router.post('/crear-producto', upload.any(), productsController.store);

// DELETE ONE PRODUCT //
router.delete('/borrar-producto/:id', authMiddleware,productsController.destroy);



module.exports = router;