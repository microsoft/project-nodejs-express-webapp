const app = require('./app');
const debug = require('debug');

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
