const path = require('path');
const fs = require('fs')
const bcryptjs = require('bcryptjs')
const {
    validationResult
} = require('express-validator')

const users = require('../models/users')

const usersController = {


    
    login: (req, res) => {
        res.render('login');
    },
    
    processLogin: (req, res) => {
        let userInDB = users.findByfield('email', req.body.email);
        if (userInDB) {
            let passwordCorrecta = bcryptjs.compareSync(req.body.password, userInDB.password);
            if (passwordCorrecta) {
                delete userInDB.password
                req.session.userLogueado = userInDB;
                    if(req.body.recordarUsuario){
                        res.cookie('email', req.body.email, {maxAge: (1000 * 60)*1440})
                    }
                return res.redirect("/usuarios/mi-perfil")
            } else {
                
                return res.render("login", {
                    errors: {
                        password: {
                            msg: "Contraseña incorrecta"
                        }
                    }
                })
            }
        }
        if (!userInDB) {
            
            return res.render("login", {
                errors: {
                    email: {
                        msg: "Ingrese un email válido"
                    }
                }
            })
        }


        
    },
    profile: (req, res) => {
        console.log(req.cookies.email)
        res.render('profile', {
            user: req.session.userLogueado
        })
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

    },
    logout: (req, res) => {
        res.clearCookie('email');

        req.session.destroy();
        
        return res.redirect('/')
    }
}


module.exports = usersController;