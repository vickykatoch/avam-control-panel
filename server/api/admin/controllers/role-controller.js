const DB = require('../../../db');

//#region ASSOCIATION INCLUDES
const userIncludes = {
    model: DB.User,
    as: 'users',
    through: {
        attributes: []
    }
};
const resourceInclude = {
    model: DB.Resource,
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
    DB.Role.findById(id, {
            include: [userIncludes, resourceInclude]
        })
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
    DB.Role.findAll({
            include: [userIncludes, resourceInclude]
        })
        .then(roles => {
            res.json(roles);
        }).catch(error => {
            res.json({
                error: error.message,
                stack: error.stack
            });
        });
};
const addEntity = (req, res) => {
    DB.Role.create(req.body).then(role => {
        res.status(200).json(role);
    }).catch(err => {
        res.status(400).json({
            error: err.message,
            stack: err.stack
        });
    });

}
const updateEntity = (req, res) => {
    const roleId = req.body.id;
    DB.Role.update(req.body, {
        where: {
            id: roleId
        }
    }).then(role => {
        res.status(200).json(role);
    }).catch(err => {
        res.status(400).json({
            error: err.message,
            stack: err.stack
        });
    });
}
const removeEntity = (req, res) => {
    const roleId = req.body.id;
    res.status(200).json({
        status : 'Method not yet implemented'
    });
}
//#endregion

//#region EXPORTS
module.exports = {
    fetchById,
    fetchAll,
    addEntity,
    updateEntity,
    removeEntity
};
//#endregion