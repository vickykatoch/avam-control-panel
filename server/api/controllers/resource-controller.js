const db = require('../../db');

const fetchById = (req, res) => {
    const id = req.params.id;
    db.Resource.findById(id, {
            include: [{
                model: db.Role,
                as: 'roles'
            }]
        })
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
    db.Resource.findAll()
        .then(resources => {
            res.json(resources);
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