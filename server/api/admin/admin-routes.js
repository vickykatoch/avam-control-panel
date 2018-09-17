const userRouter = require('./routes/user-routes');
const roleRouter = require('./routes/role-routes');
const resourceRouter = require('./routes/resource-routes');

const router = require('express').Router();


router.use('/users', userRouter);
router.use('/roles', roleRouter);
router.use('/resources', resourceRouter);

module.exports = router;



