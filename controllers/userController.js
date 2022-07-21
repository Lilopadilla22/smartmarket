const db = require('../database/models');
const sequelize = db.sequelize;
const path = require('path');
const { Op } = require("sequelize");


const Users = db.users;

const usersController = {
   
    'detail': (req, res) => {
        db.Users.findByPk(req.params.id)
            .then(user => {
                res.render('profile.ejs', {user});
            });
    },

 
    add: function (req, res) {
        
            res.render("register")

    },
    create: function (req, res) {
 
            db.Users.create({

               ...req.body,
            
            })

            .then((user) =>{


            res.redirect("/profile/:id")
                
            }) 

    },
    // edit: function(req, res) {
        
    //     let movieId = req.params.id

    //     db.Movie.findByPk(movieId)

    //     .then(Movie => res.render("moviesEdit", {Movie}))
    // },


    // update: function (req,res) {

    //     let movieId = req.params.id

    //     db.Movie.update({

    //         ...req.body

    //     },
    //     {

    //         where: { id: movieId }

    //     })
        
    //     .then(() => res.redirect("/movies"))

    // },

    // delete: function (req, res) {
        
    //     let movieId = req.params.id

    //     db.Movie.findByPk(movieId)

    //     .then(Movie => res.render("moviesDelete", {Movie}))


    // },
    destroy: function (req, res) {
        
        let userId = req.params.id

        db.Users.destroy({

            where: { id: userId}

        }).then(() => res.redirect("/"))


    }

}

module.exports = usersController;