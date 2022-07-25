module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        users_id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        status_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false 
        },
        email: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(80),
            allowNull: false
        },
        full_name: {
            type: dataTypes.STRING(80),
            allowNull: false
        },
        country: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        profile_image: {
            type: dataTypes.STRING(150),
            allowNull: false
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    
    
    const User = sequelize.define(alias, cols, config)
    
    User.associate = function (models) {

        User.belongsTo(models.Status, {

            as: "status",
            foreignKey: "status_id"

        })

    }

    return User
}