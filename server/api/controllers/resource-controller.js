const db = require('../../db');

//#region ASSOCIATION INCLUDES
const roleIncludes = {
    model: db.Role,
    as: 'roles',
    through: {
        attributes: []
    }
};
//#endregion

//#region CRUD OPERATIONS
const fetchById = (req, res) => {
    const id = req.params.id;
    db.Resource.findById(id, { include: [roleIncludes] })
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
    db.Resource.findAll( { include: [roleIncludes] })
        .then(resources => {
            res.json(resources);
        }).catch(error => {
            res.json({
                error: 'Error occurred'
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