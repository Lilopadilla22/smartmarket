module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },

        categories_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false 
        },
        name: {
            type: dataTypes.STRING(80),
            allowNull: false 
        },
        price: {
            type: dataTypes.DECIMAL(10,0),
            allowNull: false 
        },
        descriptions: {
            type: dataTypes.STRING(60),
            allowNull: false 
        },
        image: {
            type: dataTypes.STRING(150),
            allowNull: false 
        },
        stock: {
            type: dataTypes.INTEGER(11),
            allowNull: false 
        },

    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    
    const Product = sequelize.define(alias, cols, config)

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as:"categories",
            foreignKey: "categories_id"
        })
        Product.belongsToMany(models.Order, {

            as: "orders",
            through: 'order_details',
            foreignKey: "product_id",
            otherKey: 'order_id',
            timestamps: false

        })
    }

    return Product
}