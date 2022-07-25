module.exports = (sequelize, dataTypes)=>{
    let alias = "Status"
    let cols = {
        status_id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        status: {
            type: dataTypes.STRING(60),
            allowNull: false
        }
    
    }

    let config = {
        tableName: "users_status",
        timestamps: false
    }

    const Status = sequelize.define(alias, cols, config)

    Status.associate = function(models){
        Status.hasMany(models.User, {
            as: "users",
            foreignKey: "status_id"
        })
    }
   return Status
}