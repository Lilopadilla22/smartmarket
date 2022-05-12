const path = require('path');

const mainController = {

    home: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/home.html'));
    },
    login: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/login.html'))
    },
    register: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/register.html'));
    },
    productCart: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/productCart.html'));
    },
    productDetail: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/productDetail.html'));
    },
    allProducts: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/all-products.html'));
    },
    almacen: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/almacen.html'));
    },
    bebidasConAlcohol: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/bebidas-con-alcohol.html'));
    },
    bebidas: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/bebidas.html'));
    },
    carnes: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/carnes.html'));
    },
    categories: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/categories.html'));
    },
    higiene: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/higiene.html'));
    },
    lacteos: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/lacteos.html'));
    },
    limpieza: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/limpieza.html'));
    },
    verduleria: (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/verduleria.html'));
    },
    
};

module.exports = mainController;