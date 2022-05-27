const path = require('path');
const fs = require('fs');
// const res = require('express/lib/response');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {

index: (req, res) =>{
    res.render('all-products', {products})
},
categorias: (req, res) => {
    res.render('provis-categorias')
},
categoriaProducto: (req, res) =>{
    let categoriaURL = req.params.categoria;
    let categoria= products.filter(producto => producto.categoria == categoriaURL);
    
    res.render('x-categoria', {categoria})
    
},
productCart: (req, res) =>{
    res.render('productCart');
},
productDetail: (req, res) =>{
    let id = req.params.id
	let product = products.find(product => product.id == id)

		
    res.render('productDetail', {product});
},
agregarProductos: (req, res) => {
    res.render('agregarProductos')
},

};

module.exports = productsController;