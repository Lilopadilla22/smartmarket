const express = require('express');
const router = express.Router();
const path = require ('path')
const multer = require('multer');

const productsController = require('../controllers/productsController');

// ************ MULTER ************

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },

    filename: function (req, file, cb) {
    //   
      cb(null, file.fieldname + 'img' + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })


router.get('/', productsController.index);
router.get('/productCart', productsController.productCart);
router.get('/productDetail/:id', productsController.productDetail);
router.get('/categories', productsController.categorias);
router.get('/:categoria', productsController.categoriaProducto);

// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', upload.any(), productsController.update); 




module.exports = router;