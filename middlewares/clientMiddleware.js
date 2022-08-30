function clientMiddleware(req, res, next) {
    if(req.session.userLogueado.status_id !== 3) {
        return res.redirect('/')
    }
    next();
}

module.exports = clientMiddleware