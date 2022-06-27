const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controllers/usersController');

const uploadFile = require('../middlewares/multerUsersmiddlewares')
const validations = require ('../middlewares/validateRegistermiddlewares')

router.get('/login', usersController.login);

router.post('/login', usersController.processLogin );

router.get('/mi-perfil', usersController.profile);

router.get('/registro', usersController.registro);

router.post('/registro', uploadFile.single('fotoPerfil'), validations, usersController.nuevoRegistro);

module.exports = router;