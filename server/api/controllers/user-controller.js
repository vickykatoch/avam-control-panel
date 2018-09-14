const db = require('../../db');

const fetchById = (req, res) => {
    const userId = req.params.id;
    db.User.findById(userId, {
        include: [{
            model: db.Role,
            as: 'roles',
            // // include : [
            // //     {
            // //         model : db.RoleResource
            // //     }
            // ]
        }]
    }).then(user => {
        res.json(user);
    }).catch(error => {
        res.json({
            error: error.message,
            stack: error.stack
        });
    });
};
const fetchAll = (req, res) => {
    db.User.findAll({
            include: [{
                model: db.Role,
                as: 'roles'
            }]
        })
        .then(users => {
            res.json(users);
        }).catch(error => {
            res.json({
                error: 'Error occurred'
            });
        });
};

module.exports = {
    fetchById,
    fetchAll
};