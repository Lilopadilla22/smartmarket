const path = require('path');
const fs = require('fs')
const bcryptjs = require('bcryptjs')
const {
    validationResult
} = require('express-validator')

const users = require('../models/users')

const usersController = {


    profile: (req, res) => {
        res.render('profile')
    },

    login: (req, res) => {
        res.render('login');
    },

    processLogin: (req, res) => {
        let userInDB = users.findByfield('email', req.body.email);
       if(userInDB){
        let passwordCorrecta = bcryptjs.compareSync(req.body.password, userInDB.password);
        if(passwordCorrecta){
            return res.send("funciona el login")
        }else{

            return res.render("login", {
                errors: {
                            password: {
                                msg: "Contraseña incorrecta"
                            }
                        }
                    })
        }
       }
       if(!userInDB){
           
           return res.render("login", {
           errors: {
                       email: {
                           msg: "Ingrese un email válido"
                       }
                   }
               })
    }
        
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

        let userInDB = users.findByfield('email', req.body.email);

        if (userInDB) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            nombreYApellido: req.body.nombreYApellido,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            pais: req.body.pais,
            direccion: req.body.direccion,
            fotoPerfil: req.file.filename
        }

        users.create(userToCreate);
        return res.redirect("/usuarios/login");

    }
}


module.exports = usersController;