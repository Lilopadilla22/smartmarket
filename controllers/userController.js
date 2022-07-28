const db = require('../database/models');
const sequelize = db.sequelize;
const path = require('path');
const {
    validationResult
} = require('express-validator');
const {
    Op
} = require("sequelize");
const bcryptjs = require('bcryptjs');




const usersController = {

    login: (req, res) => {
        res.render('login');
    },
    processLogin: (req, res) => {
        if (req.body.email){
            
           db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
            
                
                if (!user) {
                    return res.render("login", {
                        errors: {
                            email: {
                                msg: "Ingrese un email válido"
                            }
                        }
                    })
                }
                let passwordCorrecta = bcryptjs.compareSync(req.body.password, user.password);
                
                if (!passwordCorrecta) {
                    
                    return res.render("login", {
                        errors: {
                            password: {
                                msg: "Contraseña incorrecta"
                            }
                        }
                    })
                }
                if (req.body.recordarUsuario != undefined) {
                    res.cookie('recordame', user.users_id, {
                       maxAge: (1000 * 60) * 1200
                   })
                } 
                if (passwordCorrecta) {
                    req.session.userLogueado = user;
                }
            })
            .then(user => {
                res.redirect("/")
            })

                
            .catch(err => {
                res.status(500).send('Error --->   ' + err)
            })
                
                
        }if(!req.body.email){
            return res.render("login", {
                errors: {
                    email: {
                        msg: "Ingrese un email válido"
                    }
                }
            })
        }        
    },
    

       







    logout: (req, res) => {
        
        req.session.destroy();
        
        if(req.cookies.recordame){
            res.clearCookie('recordame');
        }

        return res.redirect('/')
    },

    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                res.render('profile', {
                    user
                });
            });
    },


    register: function (req, res) {

        res.render("register")

    },
    create: (req, res) => {
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        db.User.findOne({where: {email: req.body.email}})
        .then(user => {
            if(user){return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }})

       db.User.create({
            
            status_id: 1,
            email:req.body.email,
            password:bcryptjs.hashSync(req.body.password, 10),
            full_name:req.body.full_name,
            country:req.body.country,
            address:req.body.address,
            profile_image:req.file.filename
            
            
            })
            .then((user) => {
                
                res.redirect("/usuarios/login")
                
            })
        },
 
 
        edit: function(req, res) {

        let userId = req.params.id
        

        db.User.findByPk(userId)

        .then(User => res.render("userEdit", {user: User}))
    },

    update: function (req,res) {

        let userId = req.params.id
        db.User.findByPk(userId)
        .then((user) => {
            let oldPic = user.profile_image
            if(!req.body.profile_image){
                req.files.push(oldPic)
            } 
            const resultValidation = validationResult(req)
    
            if (resultValidation.errors.length > 0) {
                return res.render('userEdit', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            }
            db.User.update({
                ...req.body,
                password: bcryptjs.hashSync(req.body.password, 10),
                profile_image:req.files[0].filename
            },
            {
    
                where: { users_id: userId }
    
            })
    
            .then((user) => res.redirect("/usuarios/mi-perfil/" + userId))
        })
        

    },

            

    destroy: function (req, res) {

        let userId = req.params.id

        db.User.destroy({

            where: {
                users_id: userId
            }

        }).then(() => {
            req.session.destroy();
        
        if(req.cookies.recordame){
            res.clearCookie('recordame');
        }
            res.redirect("/")
        })

    }






    // edit: function(req, res) {

    //     let movieId = req.params.id

    //     db.Movie.findByPk(movieId)

    //     .then(Movie => res.render("moviesEdit", {Movie}))
    // },



    // delete: function (req, res) {

    //     let movieId = req.params.id

    //     db.Movie.findByPk(movieId)

    //     .then(Movie => res.render("moviesDelete", {Movie}))


    // },

}

module.exports = usersController;