const express = require('express');
const router = express.Router();
const path = require ('path')
const multer = require('multer');

const productsController = require('../controllers/productsController');

// ************ MULTER ************

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img')
    },

    filename: function (req, file, cb) {
    //   
      cb(null, file.fieldname + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })


router.get('/', productsController.index);
router.get('/carrito', productsController.productCart);
router.get('/detalle-de-producto/:id', productsController.productDetail);
router.get('/categorias', productsController.categorias);
router.get('/:categoria', productsController.categoriaProducto);

// /*** EDIT ONE PRODUCT ***/ 
router.get('/editar-producto/:id', productsController.edit); 
router.put('/editar-producto/:id', upload.any(), productsController.update); 


// // CREATE ONE PRODUCT //
router.get('/crear-producto', productsController.create);
router.post('/crear-producto', upload.any(), productsController.store);



module.exports = router;