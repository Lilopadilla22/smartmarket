const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

app.get('/categories', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/categories.html'))
});
app.get('/all-products', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/all-products.html'))
});
app.get('/bebidas', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/bebidas.html'))
});
app.get('/bebidas-con-alcohol', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/bebidas-con-alcohol.html'))
});
app.get('/almacen', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/almacen.html'))
});
app.get('/lacteos', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/lacteos.html'))
});
app.get('/limpieza', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/limpieza.html'))
});
app.get('/higiene', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/higiene.html'))
});
app.get('/verduleria', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/verduleria.html'))
});
app.get('/carnes', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/carnes.html'))
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
});
app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/productCart.html'))
});

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/productDetail.html'))
});
app.listen(3000, () => {
    console.log('Servidor corriendo');
});