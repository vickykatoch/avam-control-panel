const userRouter = require('./controllers/admin/user-routes');
const router = require('express').Router();
router.use('/users', userRouter);



const roleController = require('./controllers/admin/role-controller');
const resourceController = require('./controllers/admin/resource-controller');



// router.get('/roles', roleController.fetchAll);
// router.get('/roles/:id', roleController.fetchById);
// router.post('/roles/new', roleController.addEntity);
// router.put('/roles/update', roleController.updateEntity);
// router.delete('/roles/remove', roleController.removeEntity);


// router.get('/resources', resourceController.fetchAll);
// router.get('/resources/:id', resourceController.fetchById);
// router.post('/resources/new', resourceController.addEntity);
// router.put('/resources/update', resourceController.updateEntity);
// router.delete('/resources/remove', resourceController.removeEntity);

module.exports = router;
