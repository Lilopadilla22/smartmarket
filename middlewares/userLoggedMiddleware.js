const user = require('../database/models/users');

function userLoggedMiddleware(req, res, next) {
    
    res.locals.isLogged = false;
    let emailCookie = req.cookies.email;
    let userFrontCookie = user.findByfield('email', emailCookie)

    if(userFrontCookie){
        req.session.userLogueado = userFrontCookie
    };

    if(req.session && req.session.userLogueado) {
        res.locals.isLogged = true;
    }
    

    next();
}

module.exports = userLoggedMiddleware