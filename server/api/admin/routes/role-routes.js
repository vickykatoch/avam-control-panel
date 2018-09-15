const router = require('express').Router();
const roleController = require('../controllers/user-controller');

router.get('/', roleController.fetchAll);
router.get('/:id', roleController.fetchById);
router.post('/new', roleController.addEntity);
router.put('/update', roleController.updateEntity);
router.delete('/remove', roleController.removeEntity);

module.exports = router;