const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
const mainRouter = require ('./routers/mainRouters');
app.use(express.static(publicPath));
app.set('view engine', 'ejs');


app.listen(3000, () => {
    console.log('Servidor corriendo');
});




app.use('/', mainRouter);
app.use('/products', productsRouter);



