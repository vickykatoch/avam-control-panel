const express = require('express');
var logger = require('morgan');
const db = require('./db');
const apiRoutes = require('./api/api-routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');


const app = express();
const router = express.Router();
app.use(logger('dev'));
app.use(router);
app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.json({ status: 'OK' });
});

db.sequelize.sync({ 
    logging : console.log,
    force : true
}).then(() => {
    console.log('Database connection established successfully');
    require('./config/data-builder')(db);
    app.listen(config.port, () => {
        console.log('Control Panel server is listening on port: ' + config.port);
    });
});
// db.sequelize.authenticate().then(() => {
//     console.log('Database connection established successfully');
//     app.listen(config.port, () => {
//         console.log('Control Panel server is listening on port: ' + config.port);
//     });
// });