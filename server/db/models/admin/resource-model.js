module.exports = (sequelize, DataTypes) => {
    const Resource = sequelize.define('Resource', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        } 
    });

    Resource.associate = (models) => {
        models.Resource.belongsToMany(models.Role, {
            through: models.RoleResource,
            foreignKey: 'resourceId',
            sourceKey: 'id'
        });
    };
    return Resource;
};
