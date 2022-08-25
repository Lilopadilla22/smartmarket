const DB = require("../../database/models");
const Op = DB.Sequelize.Op;

module.exports = {


    listUsers: (req, res) => {

        DB.User
            .findAll({
                attributes: ["users_id", "email", "full_name", [DB.Sequelize.fn("CONCAT", '/api/user/', DB.Sequelize.col("users_id")), "detail"]]
            })
            .then(users => {
                return res.json({

                    data: users,
                    count: users.length

                })
            })
    },


    showUser: (req, res) => {

        DB.User

            .findByPk(req.params.id, {
                attributes: ["users_id", "email", "full_name", [DB.Sequelize.fn("CONCAT", '/api/user/', DB.Sequelize.col("users_id"), "/profile_image"), "image"]]
            })
            .then(user => {
                return res.json({
                    data: user
                })
            })
    },

    showUserImage: (req, res) => {
        DB.User
            .findByPk(req.params.id)

            .then(user => {

                return res.send(user.profile_image)
            })
    }

}