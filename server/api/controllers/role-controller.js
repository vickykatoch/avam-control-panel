const db = require('../../db');

//#region ASSOCIATION INCLUDES
const userIncludes = {
    model: db.User,
    as: 'users',
    through: {
        attributes: []
    }
};
const resourceInclude = {
    model: db.Resource,
    as: 'resources',
    through: {
        as: 'acl',
        attributes: ['permissions']
    }
};
//#endregion

//#region CRUD OPERATIONS
const fetchById = (req, res) => {
    const id = req.params.id;
    db.Role.findById(id, { include: [userIncludes, resourceInclude] })
        .then(role => {
            res.json(role);
        }).catch(error => {
            res.json({
                error: error.message,
                stack: error.stack
            });
        });
};

const fetchAll = (req, res) => {
    db.Role.findAll({ include: [userIncludes, resourceInclude] })
        .then(roles => {
            res.json(roles);
        }).catch(error => {
            res.json({
                error: error.message,
                stack: error.stack
            });
        });
};

//#endregion

//#region EXPORTS
module.exports = {
    fetchById,
    fetchAll
};
//#endregion