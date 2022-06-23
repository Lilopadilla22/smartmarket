const path = require('path');
const fs = require('fs')



const usersController = {
    
    login: (req, res) =>{
        res.render('login');
    },
    registro: (req, res) =>{
        res.render('register');
    },
    nuevoRegistro: (req, res) => {

     res.send(req.body)
    //     let newRegister = {
    //     id: users[users.length - 1].id + 1,
    //     ...req.body
    // }

    // users.push(newRegister)

    // fs.writeFileSync(usersFilePath, JSON.stringify(users));
    // res.redirect('/')
    }
}


module.exports = usersController;