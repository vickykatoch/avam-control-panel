const router = require('express').Router();
const userController = require('./user-controller');

router.get('/', userController.fetchAll);
router.get('/:id', userController.fetchById);
router.post('/new', userController.addEntity);
router.put('/update', userController.updateEntity);
router.delete('/remove', userController.removeEntity);

module.exports = router;