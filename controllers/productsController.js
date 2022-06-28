const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {

index: (req, res) =>{
   
    res.render('all-products', {products, user: req.session.userLogueado})
},
categorias: (req, res) => {
    res.render('provis-categorias')
},
categoriaProducto: (req, res) =>{
    let categoriaURL = req.params.categoria;
    let categoria = products.filter(producto => producto.categoria == categoriaURL);
    
    if (categoria[0] != undefined){

        res.render('x-categoria', {categoria, user: req.session.userLogueado})
    
    } 
   
    
},
productCart: (req, res) =>{
    res.render('productCart', {user: req.session.userLogueado});
},
productDetail: (req, res) =>{
    let id = req.params.id
	let product = products.find(product => product.id == id)
    
    
    res.render('productDetail', {product, user: req.session.userLogueado});
},
create: (req, res) => {
    res.render('productCreate', {user: req.session.userLogueado})
},
store: (req, res) => {
    let imagen 

	if(req.files[0] != undefined){

		imagen = req.files[0].originalname

	}else{

		imagen = 'default-image.png'

	}

	let newProduct = {
		id: products[products.length - 1].id + 1, 
		...req.body,  
		imagen : imagen
	}

	products.push(newProduct)

	fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

	res.redirect("/productos/categoria/" + newProduct.categoria);
},
edit: (req, res) => {
		
    let id = req.params.id
    let product = products.find(product => product.id == id)

    res.render('productEdit', {product, user: req.session.userLogueado})

},

update: (req, res) => {
    
    let id = req.params.id
    let productToEdit = products.find(product => product.id == id)

    let imagen 

    if(req.files[0] != undefined){

        imagen = req.files[0].originalname

    }else{

        imagen = productToEdit.imagen

    }


    productToEdit = {
        id: productToEdit.id,
        ...req.body,
        imagen: imagen,
    }


    let newProduct = products.map(product => {

        if (product.id == productToEdit.id) {

            return product = {...productToEdit};
        }

        return product
    })


    fs.writeFileSync(productsFilePath, JSON.stringify(newProduct, null, ' '));

    res.redirect("/productos/detalle-de-producto/" + productToEdit.id)

},
destroy: (req, res) => {
    let id = req.params.id
    let productToEliminate = products.find(product => product.id == id)
    
    products.splice(products.indexOf(productToEliminate), 1)
    
    fs.writeFileSync(productsFilePath, JSON.stringify(products));

    res.redirect("/productos/categoria/" + productToEliminate.categoria)
}

};

module.exports = productsController;