const DB = require('../../../db');


//#region ASSOCIATION INCLUDES
const roleIncludes = {
    model: DB.Role,
    as: 'roles',
    through: {
        attributes: []
    },
    include: [{
        model: DB.Resource,
        as: 'resources',
        through: {
            as: 'acl',
            attributes: ['permissions']
        }
    }]
};

//#endregion

//#region CRUD OPERATIONS
const fetchById = (req, res) => {
    const userId = req.params.id;
    DB.User.findById(userId, { include: [roleIncludes] })
        .then(user => {
            res.json(user);
        }).catch(error => {
            res.json({
                error: error.message,
                stack: error.stack
            });
        });
};
const fetchAll = (req, res) => {
    DB.User.findAll({ include: [roleIncludes] })
        .then(users => {
            res.json(users);
        }).catch(error => {
            res.status(400).json({
                error: error.message,
                stack: error.stack
            });
        });
};
const addUpdateEntity = (req, res) => {
    DB.User.upsert(req.body).then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(400).json({
            error: err.message,
            stack: err.stack
        });
    });
};

const removeEntity = (req, res) => {
    res.status(200);
}
//#endregion

//#region EXPORTS
module.exports = {
    fetchById,
    fetchAll,
    addUpdateEntity,
    removeEntity
};
//#endregion