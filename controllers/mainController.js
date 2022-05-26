const path = require('path');
const fs = require('fs')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// const productos = require('./productosController')
// const almacen = require('./almacenController');
// const bebidasConAlcohol = require('./bebidasConAlcoholController');
// const bebidas = require('./bebidasController');
// const carnes = require('./carnesController');
// const higiene = require('./higieneController');
// const lacteos = require('./lacteosController');
// const limpieza = require('./limpiezaController');
// const verduleria = require('./verduleriaController');


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
        res.render('all-products', {productos:productos});
    },
    almacen: (req, res) =>{
        res.render('almacen', {almacen:almacen});
    },
    bebidasConAlcohol: (req, res) =>{
        res.render('bebidas-con-alcohol', {bebidasConAlcohol:bebidasConAlcohol});
    },
    bebidas: (req, res) =>{
        res.render('bebidas', {bebidas:bebidas});
    },
    carnes: (req, res) =>{
        res.render('carnes', {carnes:carnes});
    },
    categories: (req, res) =>{
        res.render('categories');
    },
    higiene: (req, res) =>{
        res.render('higiene', {higiene:higiene});
    },
    lacteos: (req, res) =>{
        res.render('lacteos', {lacteos:lacteos});
    },
    limpieza: (req, res) =>{
        res.render('limpieza', {limpieza:limpieza});
    },
    verduleria: (req, res) =>{
        res.render('verduleria', {verduleria:verduleria});
    },
    agregarProductos: (req, res) => {
        res.render('agregarProductos')
    },
    
};




module.exports = mainController;