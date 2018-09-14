const db = require('../../db');

const fetchById = (req, res) => {
    const id = req.params.id;
    db.Role.findById(id, {
            include: [{
                model: db.User,
                as: 'users'
            },{
                model: db.Resource,
                as: 'resources',
                // include : [{
                //     model : db.RoleResource,

                // }]
            }]
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
    db.Role.findAll({
            include: [{
                model: db.User,
                as: 'users'
            },{
                model: db.Resource,
                as: 'resources'
            }]
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

module.exports = {
    fetchById,
    fetchAll
};