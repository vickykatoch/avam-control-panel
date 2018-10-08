const router = require('express').Router();
const roleController = require('../controllers/role-controller');

router.get('/', roleController.fetchAll);
router.get('/:id', roleController.fetchById);
// router.get('/findbyName', roleController.findbyName);
// router.post('/new', roleController.addEntity);
// router.put('/update', roleController.updateEntity);
router.post('/save', roleController.upsertEntity);
router.delete('/remove', roleController.removeEntity);

module.exports = router;