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

edit: (req, res) => {
		
    let id = req.params.id
    let product = products.find(product => product.id == id)

    res.render('productEdit', {product})

},

update: (req, res) => {
    
    let id = req.params.id
    let productToEdit = products.find(product => product.id == id)

    let image 

    if(req.files[0] != undefined){

        image = req.files[0].filename

    }else{

        image = productToEdit.image

    }


    productToEdit = {
        id: productToEdit.id,
        ...req.body,
        image: image,
    }


    let newProduct = products.map(product => {

        if (product.id == productToEdit.id) {

            return product = {...productToEdit};
        }

        return product
    })


    fs.writeFileSync(productsFilePath, JSON.stringify(newProduct));

    res.redirect("/products/detail/" + productToEdit.id)

}

};

module.exports = productsController;