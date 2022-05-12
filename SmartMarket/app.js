const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
const mainRouter = require ('./routers/mainRouters');
app.use(express.static(publicPath));


app.listen(3000, () => {
    console.log('Servidor corriendo');
});




app.use('/', mainRouter);
app.use('/login', mainRouter);
app.use('/register', mainRouter);
app.use('/productCart', mainRouter);
app.use('/productDetail', mainRouter);
app.use('/all-products', mainRouter);
app.use('/almacen', mainRouter);
app.use('/bebidas-con-alcohol', mainRouter);
app.use('/bebidas', mainRouter);
app.use('/carnes', mainRouter);
app.use('/categories', mainRouter);
app.use('/higiene', mainRouter);
app.use('/lacteos', mainRouter);
app.use('/limpieza', mainRouter);
app.use('/verduleria', mainRouter);


