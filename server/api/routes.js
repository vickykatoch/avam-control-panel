const router = require('express').Router();
const userController = require('./controllers/user-controller');
const roleController = require('./controllers/role-controller');
const resourceController = require('./controllers/resource-controller');

router.get('/users', userController.fetchAll);
router.get('/users/:id', userController.fetchById);
router.get('/roles', roleController.fetchAll);
router.get('/roles/:id', roleController.fetchById);
router.get('/resources', resourceController.fetchAll);
router.get('/resources/:id', resourceController.fetchById);

module.exports = router;
