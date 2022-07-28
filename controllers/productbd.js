const db = require('../database/models');
const sequelize = db.sequelize;
const path = require("path");
const {
    validationResult
} = require('express-validator');
const {
    Op
} = require("sequelize");
const bcryptjs = require('bcryptjs');



const productbd = {
    'list': (req, res) => {
        db.Product.findAll()
            .then(products => {
                res.render('all-products.ejs', {products})
            })
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                res.render('productDetail.ejs', {product});
            });
    },

    categories: (req,res) => {

        db.Product.findAll({include: [{model: db.Category, as: "categories"}]})        
        
        .then (  (products)=>{
            let categoria = products.filter(producto => {
                return producto.categories.name == req.params.category_id}
                )
            if (categoria [0] != undefined){
                res.render("x-categoria", {categoria})
            }

    }) .catch(error=>{res.send(error)})
},
     
    add: function (req, res) {
        db.Category.findAll()
        .then((categories) => {
            return res.render("productCreate", {categories} )
        })
    },
    create: function (req, res) {
    db.Product.create({
        categories_id : req.body.categories_id,
        name : req.body.name,
        price : req.body.price,
        descriptions : req.body.descriptions,
        image: req.files[0].filename,
        stock: 0
    })
    
    
    .then((product) =>{
                
            
            res.redirect("/productos")
                
            }) 

    },
    edit: function(req, res) {
        
        let productId = req.params.id

        db.Product.findByPk(productId, {include: [{model: db.Category, as: "categories"}]})

        .then(product => res.render("productEdit", {product}))
    },


    update: function (req,res) {

        let productId = req.params.id

        db.Product.update({

            ...req.body

        }, 
        {

            where: { id: productId }

        })
        
        .then((product) => res.redirect("/productos"))

    },

    destroy: function (req, res) {
        
        let productId = req.params.id

        db.Product.destroy({

            where: { id: productId}

        } ).then(() => res.redirect("/productos"))


    }

}

module.exports = productbd;