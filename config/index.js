var config = require('./config.json');
module.exports = {
    getDBConnectionString: function () {
        return `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.db_name}`;
    }
}