const path = require('path');
const fs = require('fs');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const db = require('../database/models')

const mainController = {

    home: (req, res) =>{
        res.render('home', {
            user: req.session.userLogueado
        });
}
}

module.exports = mainController;