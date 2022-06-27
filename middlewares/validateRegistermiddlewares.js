const path = require('path');
const { body } = require('express-validator');
  
  
  
  const validations = [
    body('nombreYApellido').notEmpty().withMessage('Debe agregar nombre y apellido'),
    body('email').notEmpty().withMessage('Debe agregar un email').bail()
    .isEmail().withMessage('Debe ingresar un email válido'),
    body('pais').notEmpty().withMessage('Debe agregar un país'),
    body('direccion').notEmpty().withMessage('Debe agregar una dirección'),
    body('terminos').notEmpty().withMessage('Debe aceptar los términos y condiciones'),
    body('password').notEmpty().withMessage('Debe ingresar una contraseña').bail()
    .custom((value, { req }) => {
      let contraseña = req.body.password;
      let repeat = req.body.repeatPassword;
  
      if (contraseña != repeat) {
        throw new Error('Las contraseñas deben coincidir')
      }
      return true;
    }),
    body('fotoPerfil').custom((value, { req }) => {
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
  
  module.exports = validations 