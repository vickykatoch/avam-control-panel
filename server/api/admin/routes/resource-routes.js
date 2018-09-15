const router = require('express').Router();
const resourceController = require('../controllers/resource-controller');

router.get('/', resourceController.fetchAll);
router.get('/:id', resourceController.fetchById);
router.post('/new', resourceController.addEntity);
router.put('/update', resourceController.updateEntity);
router.delete('/remove', resourceController.removeEntity);

module.exports = router;