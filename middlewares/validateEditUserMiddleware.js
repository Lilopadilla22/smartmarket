const path = require('path');
const { body } = require('express-validator');
  
  
  
  const validationsEditUser = [
    body('full_name').notEmpty().withMessage('Debe agregar nombre y apellido'),
    body('email').notEmpty().withMessage('Debe agregar un email').bail()
    .isEmail().withMessage('Debe ingresar un email válido'),
    body('country').notEmpty().withMessage('Debe agregar un país'),
    body('address').notEmpty().withMessage('Debe agregar una dirección'),
    body('password').notEmpty().withMessage('Debe ingresar una contraseña').bail()
    .custom((value, { req }) => {
        let contraseña = req.body.password;
        let repeat = req.body.repeatPassword;
        if (contraseña != repeat) {
          throw new Error('Las contraseñas deben coincidir')
        }
        return true;
      }),
    
  
    body('profile_image').custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.JPEG', '.JPG', '.PNG', '.png', '.gif'];
  
      if(file){

        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
        }
      }
      
      return true;
    })
  
  ]
  
  module.exports = validationsEditUser 