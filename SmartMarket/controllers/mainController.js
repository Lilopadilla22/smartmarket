const path = require('path');

const bebidasConAlcohol = require('./productsController');

const mainController = {

    home: (req, res) =>{
        res.render('home');
    },
    login: (req, res) =>{
        res.render('login');
    },
    register: (req, res) =>{
        res.render('register');
    },
    productCart: (req, res) =>{
        res.render('productCart');
    },
    productDetail: (req, res) =>{
        res.render('productDetail');
    },
    allProducts: (req, res) =>{
        res.render('all-products');
    },
    almacen: (req, res) =>{
        res.render('almacen');
    },
    bebidasConAlcohol: (req, res) =>{
        res.render('bebidas-con-alcohol', {bebidasConAlcohol: bebidasConAlcohol});
    },
    bebidas: (req, res) =>{
        res.render('bebidas');
    },
    carnes: (req, res) =>{
        res.render('carnes');
    },
    categories: (req, res) =>{
        res.render('categories');
    },
    higiene: (req, res) =>{
        res.render('higiene');
    },
    lacteos: (req, res) =>{
        res.render('lacteos');
    },
    limpieza: (req, res) =>{
        res.render('limpieza');
    },
    verduleria: (req, res) =>{
        res.render('verduleria');
    },
    
};




module.exports = mainController;