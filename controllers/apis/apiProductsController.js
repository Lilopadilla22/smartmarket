const DB = require("../../database/models");
const Op = DB.Sequelize.Op;

module.exports = {
    listProducts: (req,res) => {
        
        DB.Product
              .findAll()
              .then(products => {
                let listaProductos = [{
                    count: products.length,
                    data: products  
                }]
                res.json(listaProductos)              
        })
    },
    listCategories: (req,res) => {
        DB.Category
             .findAll()
             .then(categories => {
                 res.json({
                    total: categories.length,
                    data: categories
                })
        })
    },
    showProduct: (req,res) => {
        DB.Product
             .findByPk(req.params.id)
             .then(product => {

                res.json({
                    data: product
                })
        })
    }

}
