const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require ('path')

const { body } = require('express-validator')

const usersController = require ('../controllers/usersController');

const validations = [
  body('nombreYApellido').notEmpty().withMessage('Debe agregar nombre y apellido'),
  body('usuario').notEmpty().withMessage('Debe agregar un nombre de usuario'),
  body('password').notEmpty().withMessage('Debe ingresar una contraseña'),
  body('repeat-password').equals('repeat-password').withMessage('La contraseña debe coincidir'),
  body('pais').notEmpty().withMessage('Debe agregar un país'),
  body('direccion').notEmpty().withMessage('Debe agregar una dirección'),
  body('fotoPerfil').notEmpty().withMessage('Debe agregar una foto de perfil'),
  body('terminos').notEmpty().withMessage('Debe aceptar los términos y condiciones')
]

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/users')
    },

    filename: function (req, file, cb) {
    //   
      cb(null, file.fieldname + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })


router.get('/login', usersController.login);


router.get('/registro', usersController.registro);


router.post('/registro',upload.any(), validations, usersController.nuevoRegistro)

module.exports = router;