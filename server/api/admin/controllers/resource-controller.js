const DB = require('../../../db');

//#region ASSOCIATION INCLUDES
const roleIncludes = {
    model: DB.Role,
    as: 'roles',
    through: {
        attributes: []
    }
};
//#endregion

//#region CRUD OPERATIONS
const fetchById = (req, res) => {
    const id = req.params.id;
    DB.Resource.findById(id, { include: [roleIncludes] })
        .then(resource => {
            res.json(resource);
        }).catch(error => {
            res.json({
                error: error.message,
                stack: error.stack
            });
        });
};
const fetchAll = (req, res) => {
    DB.Resource.findAll({ include: [roleIncludes] })
        .then(resources => {
            res.json(resources);
        }).catch(error => {
            res.json({
                error: 'Error occurred'
            });
        });
};
const addEntity = (req, res) => {
    DB.Resource.create(req.body).then(resource => {
        res.status(200).json(resource);
    }).catch(err => {
        res.status(400).json({
            error: err.message,
            stack: err.stack
        });
    });

}
const updateEntity = (req, res) => {
    const resourceId = req.body.id;
    DB.Resource.update(req.body, {
        where: {
            id: resourceId
        }
    }).then(updates => {
        res.status(200).json({ recordsUpdated: updates.length });
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
        status: 'Method not yet implemented'
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