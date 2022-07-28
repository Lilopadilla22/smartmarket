const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controllers/userController');
const guestMiddleware = require ('../middlewares/guestMiddleware')
const authMiddleware = require ('../middlewares/authMiddleware')

const uploadFile = require('../middlewares/multerUsersmiddlewares')
const validations = require ('../middlewares/validateRegistermiddlewares')
const validationsEditUser = require('../middlewares/validateEditUserMiddleware')


router.get('/login', guestMiddleware, usersController.login);

router.post('/login', usersController.processLogin );

router.get('/logout', usersController.logout);

router.get('/mi-perfil/:id', authMiddleware, usersController.detail);

router.get('/registro', guestMiddleware, usersController.register);

router.post('/registro', uploadFile.single('profile_image'), validations, usersController.create);

router.get('/editar-usuario/:id', authMiddleware,usersController.edit);

router.put('/editar-usuario/:id', uploadFile.any(), validationsEditUser,usersController.update);


router.delete('/eliminar-perfil/:id', authMiddleware, usersController.destroy)

module.exports = router;