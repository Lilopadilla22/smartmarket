const sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    let alias = 'products';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },

        category_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false 
        },
        name: {
            type: DataTypes.STRING(80),
            allowNull: false 
        },
        price: {
            type: DataTypes.DECIMAL(10,0),
            allowNull: false 
        },
        descriptions: {
            type: DataTypes.STRING(60),
            allowNull: false 
        },
        image: {
            type: DataTypes.STRING(150),
            allowNull: false 
        },
        stock: {
            type: DataTypes.INTEGER(11),
            allowNull: false 
        },

    };
    let config = {
        tableName: 'products',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true
    };
    
    const products = sequelize.define(alias, cols, config)

    return products
}