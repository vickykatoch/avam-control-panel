const router = require('express').Router();
const resourceController = require('../controllers/resource-controller');

router.get('/', resourceController.fetchAll);
router.post('/new', resourceController.addEntity);
router.put('/update', resourceController.updateEntity);
router.delete('/remove', resourceController.removeEntity);
router.post('/roles',resourceController.fetchByRoles);
router.get('/query', resourceController.query);
router.get('/:id', resourceController.fetchById);

module.exports = router;