const fs = require ('fs');

const users = {
    fileName: "./data/usersDataBase.json",

    getData: function(){ 
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))

    },
    
    generateId: function(){
        let allUsers = this.findAll()
        let lastUsers = allUsers.pop()
        if (lastUsers){
            return lastUsers.id + 1
        }
        return 1;        

    },


    findAll: function (){
        return this.getData();
    },

    findByPk: function (id){
        let allUsers = this.findAll();
        let userFound= allUsers.find(oneUser => oneUser[field] === text);
        return userFound;

    },

    findByfield: function (field, text){
        let allUsers = this.findAll();
        let userFound= allUsers.find(oneUser => oneUser.email === text);
        return userFound;

    },

    create: function (usersData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...usersData
        }

        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser

    },

    delete: function (id){
        let allUsers = this.findAll();
        let userToEliminate = allUsers.find(user => user.id === id)
    
    allUsers.splice(allUsers.indexOf(userToEliminate), 1)
    
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));

    return true

    },
}

module.exports = users
