const DB = require("../../database/models");
const Op = DB.Sequelize.Op;

module.exports = {
    listProducts: async (req, res) => {
        const productsSum = await DB.Product
            .findAll({
                attributes: ["id", "name", "descriptions", 'categories_id', [DB.Sequelize.fn("CONCAT", '/api/product/', DB.Sequelize.col("id")), "detail"]],
            })

        const categorySum = await DB.Product
            .findAll({
                include: {
                    model: DB.Category,
                    as: 'categories'
                },
                group: ['Product.categories_id'],
                attributes: ['categories.name',[DB.Sequelize.fn('COUNT', DB.Sequelize.col('categories.categories_id')), 'countByCategorie']],

            });

        const productsTotalCount = await DB.Product.count()
        let listaProductos = {
            count: productsTotalCount,
            data: productsSum,
            categoriesByCount: categorySum


        }
        res.json(listaProductos)
    },

    
    showProduct: (req, res) => {
        DB.Product
            .findByPk(req.params.id, {attributes: [ "id", "categories_id", "name", "price", "descriptions",
             [DB.Sequelize.fn('CONCAT',"http://localhost:3001/img/", DB.Sequelize.col('image')), 'image']]})
            .then(product => {

                res.json({
                    data: product
                })
            })
    },

    showProductImage: (req, res) => {
        DB.Product
            .findByPk(req.params.id)
    
            .then(Product => {
    
                return res.send(Product.image)
            })
    }, 
    LastProduct: async (req, res) => {
        await DB.Product
         .findOne({
            order: [['id', 'DESC']],
            limit: 1,
            offset: 0,
            attributes: ["id", "name", "descriptions", 'categories_id', [DB.Sequelize.fn('CONCAT',"http://localhost:3001/img/", DB.Sequelize.col('image')), 'image']]
         })
        .then(product => {
            let listaProductos = {data: product}
            res.json(listaProductos)
        })
    }    
}

