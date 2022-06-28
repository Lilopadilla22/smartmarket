function guestMiddleware (req, res, next) {

    if(req.session.userLogueado){
        return res.redirect('/usuarios/mi-perfil')
    }
    next();
}

module.exports = guestMiddleware