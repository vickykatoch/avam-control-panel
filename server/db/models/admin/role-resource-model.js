module.exports = (sequelize, DataTypes) => {
    const RoleResource = sequelize.define('RoleResource', {
        permissions: {
            type: DataTypes.INTEGER,
            defaaultValue : 0
        }  
    });
    return RoleResource;
};
