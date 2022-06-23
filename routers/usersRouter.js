const express = require('express');
const multer = require('multer');
const router = express.Router();

// const path = require ('path');
const usersController = require ('../controllers/usersController');

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


router.get('/login', usersController.login);


router.get('/registro', usersController.registro);


router.post('/registro', usersController.nuevoRegistro)

module.exports = router;