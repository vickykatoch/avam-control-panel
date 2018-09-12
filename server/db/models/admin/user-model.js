module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userId: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    User.associate = (models) => {
        models.User.belongsToMany(models.Role, {
            through: 'UserRoles',
            foreignKey: 'userId'
        });
    };
    return User;
};
