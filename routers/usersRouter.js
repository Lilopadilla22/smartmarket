const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controllers/userController');
const guestMiddleware = require ('../middlewares/guestMiddleware')
const authMiddleware = require ('../middlewares/authMiddleware')

const uploadFile = require('../middlewares/multerUsersmiddlewares')
const validations = require ('../middlewares/validateRegistermiddlewares')


router.get('/login', guestMiddleware, usersController.login);

router.post('/login', usersController.processLogin );

router.get('/logout', usersController.logout);

router.get('/mi-perfil/:id', authMiddleware, usersController.detail);

router.get('/registro', guestMiddleware, usersController.register);

router.post('/registro', uploadFile.single('profile_image'), validations, usersController.create);

router.delete('/eliminar-perfil/:id', authMiddleware, usersController.destroy)

module.exports = router;