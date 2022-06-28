const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controllers/usersController');
const guestMiddleware = require ('../middlewares/guestMiddleware')
const authMiddleware = require ('../middlewares/authMiddleware')

const uploadFile = require('../middlewares/multerUsersmiddlewares')
const validations = require ('../middlewares/validateRegistermiddlewares')

router.get('/login', guestMiddleware, usersController.login);


router.post('/login', usersController.processLogin );

router.get('/logout', usersController.logout);

router.get('/mi-perfil', authMiddleware, usersController.profile);

router.get('/registro', guestMiddleware, usersController.registro);

router.post('/registro', uploadFile.single('fotoPerfil'), validations, usersController.nuevoRegistro);

module.exports = router;