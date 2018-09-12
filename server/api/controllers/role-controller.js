const db = require('../../db');

const fetchById = (req, res) => {
    const id = req.params.id;
    db.Role.findById(id)
        .then(role => {
            res.json(role);
        }).catch(error => {
            res.json({ error: 'Error occurred' });
        });
};
const fetchAll = (req, res) => {
    db.Role.findAll()
        .then(roles => {
            res.json(roles);
        }).catch(error => {
            res.json({ error: 'Error occurred' });
        });
};

module.exports = {
    fetchById,
    fetchAll
};