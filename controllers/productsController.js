const path = require('path');
const fs = require('fs')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {

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

module.exports = productController;