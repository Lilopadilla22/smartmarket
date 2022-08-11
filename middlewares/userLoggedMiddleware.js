const db = require('../database/models');
const usersController = require('../controllers/userController');



async function userLoggedMiddleware(req, res, next) {

    res.locals.isLogged = false;
    idCookie = req.cookies.recordame
    if (req.session.userLogueado) {
        res.locals.isLogged = true;
        user = req.session.userLogueado
    }
    if (idCookie) {
       const user = await db.User.findByPk(idCookie)
            
                res.locals.isLogged = true
                req.session.userLogueado = user;
            

    }


    next();

}




module.exports = userLoggedMiddleware