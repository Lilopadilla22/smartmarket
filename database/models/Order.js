module.exports = (sequelize, dataTypes) => {
    let alias = 'Order';
    let cols = {
        order_id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        users_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false 
        },
        order_address: {
            type: dataTypes.STRING(80),
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false
        },
        order_status: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    };

    let config = {
        tableName: 'orders',
        timestamps: false
    };
    
    
    const Order = sequelize.define(alias, cols, config);
    Order.associate = function (models) {

        Order.belongsTo(models.User, {

            as: "users",
            foreignKey: "users_id"

        })
        Order.belongsToMany(models.Product, {

            as: "products",
            through: 'order_details',
            foreignKey: "order_id",
            otherKey: 'product_id',
            timestamps: false

        })
        
    }

    return Order
}