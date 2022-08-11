const path = require('path');
const { body } = require('express-validator');
  
  
  
  const validationsProducts = [
    body('name').notEmpty().withMessage('Debe agregar nombre del producto').isLength({ min: 5 }),
    body('price').notEmpty().withMessage('Debe agregar un precio'),
    body('categories_id').notEmpty().withMessage('Debe agregar una categoría'),
    body('descriptions').notEmpty().withMessage('Debe agregar una descripción').isLength({ min: 5, max:20}),
    body('image').custom((value, { req }) => {
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
  
  module.exports = validationsProducts