const express = require('express');
const router = express.Router();

let dataprovider;

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json([{
        id :1,
        name :'Administrator',
        isAdmin: true,
        isActive: true
    },{
        id :2,
        name :'SuperAmin',
        isActive: true
    }]);
});
router.get('/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({
        id :1,
        name :'Administrator',
        isAdmin: true,
        isActive: true
    });
});

module.exports = router;