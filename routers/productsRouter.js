const express = require('express');
const router = express.Router();
const path = require ('path')
const multer = require('multer');
const authMiddleware = require ('../middlewares/authMiddleware')

const productbd = require('../controllers/productbd');



// ************ MULTER ************
const upload = require('../middlewares/multerProductsmiddleware');

router.get('/', productbd.list);
//router.get('/carrito', authMiddleware,productbd.productCart);
router.get('/detalle-de-producto/:id', productbd.detail);
//router.get('/categorias', productbd.categorias);
router.get('/categoria/:category_id', productbd.categories);

// /*** EDIT ONE PRODUCT ***/ 
router.get('/editar-producto/:id', authMiddleware,productbd.edit); 
router.put('/editar-producto/:id', upload.any(), productbd.update); 


// // CREATE ONE PRODUCT //
router.get('/crear-producto', authMiddleware,productbd.add);
router.post('/crear-producto', upload.any(), productbd.create);

// DELETE ONE PRODUCT //
router.delete('/borrar-producto/:id', authMiddleware,productbd.destroy);



module.exports = router;