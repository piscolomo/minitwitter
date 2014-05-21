var app = require('./app');
var http = require('http');
var server = http.createServer(app);
require('./routes/sockets').initialize(server);
server.listen(3000);