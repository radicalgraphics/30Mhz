'use strict';

var restify = require('restify');

// HTTP server
var server = restify.createServer({
    name: "Radical Server"
});

// turns GET url arguments into req.params
server.use(restify.queryParser());
server.use(restify.bodyParser());

// server.get('/', index);
// server.get('/index.html', index);

server.get('/.*', restify.serveStatic({
    'directory': 'app',
    'default': 'index.html'
}));

server.listen(8080, function(){
    console.log('Server %s listening on %s', server.name, server.url);
});