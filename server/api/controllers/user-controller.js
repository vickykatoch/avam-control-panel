const db = require('../../db');

const fetchById = (req, res) => {
    const userId = req.params.id;
    db.User.findById(userId)
        .then(user => {
            res.json(user);
        }).catch(error => {
            res.json({ error: 'Error occurred' });
        });
};
const fetchAll = (req, res) => {
    db.User.findAll()
        .then(users => {
            res.json(users);
        }).catch(error => {
            res.json({ error: 'Error occurred' });
        });
};

module.exports = {
    fetchById,
    fetchAll
};