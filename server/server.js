'use strict';

var loopback  = require('loopback');
var boot      = require('loopback-boot');
var app       = module.exports = loopback();
var path      = require('path');

// Set up the /favicon.ico
app.use(loopback.favicon());

// request pre-processing middleware
app.use(loopback.compress());

// boot scripts mount components like REST API
boot(app, __dirname);

// -- Mount static files here--
// All static middleware should be registered at the end, as all requests
// passing the static middleware are hitting the file system
// Example:

var staticPath = null;

if (process.env.NODE_ENV !== 'production') {
  staticPath = path.resolve(__dirname, '../client/src/');
  console.log("Running app in development mode");
} else {
  staticPath = path.resolve(__dirname, '../client/dist/');
  console.log("Running app in production mode");
}

app.use(loopback.static(staticPath));

// Requests that get this far won't be handled
// by any middleware. Convert them into a 404 error
// that will be handled later down the chain.
app.use(loopback.urlNotFound());

// The ultimate error handler.
app.use(loopback.errorHandler());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
