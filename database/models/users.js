module.exports = (sequelize, DataTypes) => {
    let alias = 'users';
    let cols = {
        users_id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        user_status: {
            type: DataTypes.INTEGER(11),
            allowNull: false 
        },
        email: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        full_name: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        country: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        profile_image: {
            type: DataTypes.STRING(150),
            allowNull: false
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false,
        underscored: true
    };
    
    
    const users = sequelize.define(alias, cols, config);
    users.associate = function (models) {

        users.belongsTo(models.status, {

            as: "users_status",
            foreignKey: "status_id"

        })

    }

    return users
}