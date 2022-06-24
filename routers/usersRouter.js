const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');
const usersController = require('../controllers/usersController');
const {
  body
} = require('express-validator');



const validations = [
  body('nombreYApellido').notEmpty().withMessage('Debe agregar nombre y apellido'),
  body('usuario').notEmpty().withMessage('Debe agregar un nombre de usuario'),
  body('password').notEmpty().withMessage('Debe ingresar una contraseña').bail()
  .custom((value, {
    req
  }) => {
    console.log(req.body);
    let contraseña = req.body.password;
    let repeat = req.body["repeat-password"];

    if (contraseña != repeat) {
      throw new error('Las contraseñas deben coincidir')
    }
    return true;
  }),
  body('pais').notEmpty().withMessage('Debe agregar un país'),
  body('direccion').notEmpty().withMessage('Debe agregar una dirección'),
  body('terminos').notEmpty().withMessage('Debe aceptar los términos y condiciones'),
  body('fotoPerfil').custom((value, {
    req
  }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.JPEG', '.JPG', '.PNG', '.png', '.gif'];

    if (!file) {
      throw new Error('Debes subir una imágen')
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
      }
    }
    return true;
  })

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

const uploadFile = multer({
  storage: storage
})


router.get('/login', usersController.login);


router.get('/registro', usersController.registro);


router.post('/registro', uploadFile.single('fotoPerfil'), validations, usersController.nuevoRegistro)

module.exports = router;