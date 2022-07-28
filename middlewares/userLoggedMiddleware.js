const db = require('../database/models');
const usersController = require('../controllers/userController');



 function userLoggedMiddleware(req, res, next) {

    res.locals.isLogged = false;
    idCookie = req.cookies.recordame
    if (req.session.userLogueado) {
        res.locals.isLogged = true;
        user = req.session.userLogueado
    }
    if (idCookie) {
        db.User.findByPk(idCookie)
            .then((user) => {
                res.locals.isLogged = true
                req.session.userLogueado = user;
            })

    }


    next();

}




module.exports = userLoggedMiddleware