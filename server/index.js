const express = require('express');
const appRouter = require('./api/routes');
const bodyParser =  require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const db = require('./db');

const app = express();
const router = express.Router();
app.use(router);
app.use(cors());
app.use(bodyParser.json());
appRouter.registerRoutes(app);

app.get('/', (req, res) => {
    res.json({ status: 'OK' });
});

app.listen(config.port, () => {
    console.log('Control Panel server is listening on port: ' + config.port);
});