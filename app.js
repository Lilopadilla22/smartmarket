const express = require('express');
const app = express();
const path = require('path');
// const methodOverride = require('method-override');
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));
app.set('view engine', 'ejs');
// app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor corriendo');
});

const mainRouters = require('./routers/mainRouters'); 
const productsRouter = require('./routers/productsRouter'); 
const usersRouter = require('./routers/usersRouter');


app.use('/', mainRouters);
app.use('/products', productsRouter);
app.use('/users', usersRouter);



