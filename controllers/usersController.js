const path = require('path');
const fs = require('fs')
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')

const users = require('../models/users')

const usersController = {

    
    profile: (req, res) => {
        res.render('profile')
    },

    login: (req, res) => {
        res.render('login');
    },
    registro: (req, res) => {
        res.render('register');
    },
    nuevoRegistro: (req, res) => {

        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userToCreate = {
            nombreYApellido: req.body.nombreYApellido,
            usuario: req.body.usuario,
            password: bcryptjs.hashSync(req.body.password, 10),
            pais: req.body.pais,
            direccion:req.body.direccion,
            fotoPerfil: req.file.filename
        }

        users.create(userToCreate);
        return res.send("Funciona el formulario");

    }
}


module.exports = usersController;