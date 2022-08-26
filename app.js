const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const publicPath = path.resolve(__dirname, './public');
const session = require('express-session');
const userLoggedMiddleware = require ('./middlewares/userLoggedMiddleware');
const cookieParser = require ('cookie-parser');




app.use(express.static(publicPath));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "Secret"
    ,
    resave: false, 
    saveUninitialized: false
}));
app.use(cookieParser());
app.use(userLoggedMiddleware);


app.listen(3001, () => {
    console.log('Servidor corriendo');
});



const usersRouter = require('./routers/usersRouter');
const productsRouter = require('./routers/productsRouter'); 
const mainRouters = require('./routers/mainRouters'); 
const routerAPIusers = require('./routers/apis/routerAPIusers')
const routerAPIproducts = require('./routers/apis/routerAPIproducts')



app.use('/', mainRouters);
app.use('/productos', productsRouter);
app.use('/usuarios', usersRouter);
app.use('/api', routerAPIusers)
app.use('/api', routerAPIproducts)



