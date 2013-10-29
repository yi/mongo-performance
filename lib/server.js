// Generated by CoffeeScript 1.6.3
(function() {
  var app, express;

  express = require('express');

  app = module.exports = express.createServer();

  app.configure(function() {
    return app.use(express.logger());
  });

  app.configure('development', function() {
    return app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  });

  app.configure('production', function() {
    return app.use(express.errorHandler());
  });

  require('./config/routes')(app);

  app.listen(8885);

}).call(this);