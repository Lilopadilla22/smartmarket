const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const publicPath = path.resolve(__dirname, './public');
const session = require('express-session');
const userLoggedMiddleware = require ('./middlewares/userLoggedMiddleware');
const cookies = require ('cookie-parser');




app.use(express.static(publicPath));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "El secreto de sus ojos",
    resave: false, 
    saveUninitialized: false
}));
app.use(cookies());
app.use(userLoggedMiddleware);


app.listen(3000, () => {
    console.log('Servidor corriendo');
});



const usersRouter = require('./routers/usersRouter');
const productsRouter = require('./routers/productsRouter'); 
const mainRouters = require('./routers/mainRouters'); 



app.use('/', mainRouters);
app.use('/productos', productsRouter);
app.use('/usuarios', usersRouter);



