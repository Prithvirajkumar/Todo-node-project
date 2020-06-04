const configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@clusters-6nkgv.gcp.mongodb.net/`
    }
}