const db = require('../database/models');
const usersController = require('../controllers/userController');



async function userLoggedMiddleware (req, res, next) {
  
    res.locals.isLogged = false;
    emailSession = req.session.userLogueado

    if (emailSession){
        res.locals.isLogged = true
        user = emailSession;
    }
        
        
        
       

    next();

}

module.exports = userLoggedMiddleware
    
    
 
        
        
           
    