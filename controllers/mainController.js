const path = require('path');
const fs = require('fs');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');


const mainController = {

    home: (req, res) =>{
        
        res.render('home', {
            user: req.session.userLogueado
        });

    },
    
}


module.exports = mainController;