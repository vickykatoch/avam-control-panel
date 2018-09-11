const path = require('path');

module.exports = {
    dbType: 'sqlite',
    dbPath : path.join(__dirname,'../db/app-database.db'),
    port : 5000,
    instances : 4
};