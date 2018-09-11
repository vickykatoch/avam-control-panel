const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');


const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.db')
});

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
const Role = sequelize.define('Role', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});
User.belongsToMany(Role, {
    through: 'UserRoles',
    foreignKey: 'userId'
});
Role.belongsToMany(User, {
    through: 'UserRoles',
    foreignKey: 'roleId',
    sourceKey : 'id'
});

const Resource = sequelize.define('Resource', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
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

const RoleResource = sequelize.define('RoleResource', {
    permissions: {
        type: Sequelize.DataTypes.INTEGER,
        defaaultValue : 0
    }  
});

Role.belongsToMany(Resource, {
    through: RoleResource,
    foreignKey: 'roleId',
    sourceKey : 'id'
});
Resource.belongsToMany(Role, {
    through: RoleResource,
    foreignKey: 'resourceId',
    sourceKey : 'id'
});



sequelize.sync({
    force: true
}).then(() => {
    User.create({
        userId: 'bk',
        password: '45325',
        name: 'Balwinder Katoch'
    });
}).catch(error => {
    console.error(error);
})