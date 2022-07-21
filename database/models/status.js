// const { dataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes)=>{
    let alias = "status"
    let cols = {
        status_id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        status: {
            type: DataTypes.STRING(60),
            allowNull: false
        }
    
    }

    let config = {
        timestamps: false
    }

    const status = sequelize.define(alias, cols, config)

    status.associate = function(models){
        status.hasMany(models.users, {
            as: "users",
            foreignKey: "status_id"
        })
}
   
}