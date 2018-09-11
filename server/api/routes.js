const roleController = require('./controllers/role-controller');


class ApplicationRouter {
    registerRoutes(app) {
        app.use('/api/roles', roleController);
    }
}

module.exports = new ApplicationRouter();