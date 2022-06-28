function authMiddleware(req, res, next) {
    if(!req.session.userLogueado) {
        return res.redirect('/usuarios/login')
    }
    next();
}

module.exports = authMiddleware