const router = require('express').Router();
const userController = require('../controllers/user-controller');

router.get('/', userController.fetchAll);
router.get('/:id', userController.fetchById);
router.post('/save', userController.addUpdateEntity);
router.delete('/remove', userController.removeEntity);

module.exports = router;