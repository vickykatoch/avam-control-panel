const router = require('express').Router();
const userController = require('./controllers/user-controller');
const roleController = require('./controllers/role-controller');

router.get('/users', userController.fetchAll);
router.get('/users/:id', userController.fetchById);
router.get('/roles', roleController.fetchAll);
router.get('/roles/:id', roleController.fetchById);

module.exports = router;
