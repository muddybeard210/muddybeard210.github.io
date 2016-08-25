'use strict';
//DEBUG=auth* node server.js
//npm modules
const express = require('express');
const debug = require('debug')('shooter:server');




//module constants
const app = express();
const port = process.env.PORT || 3000;




// app.use('/api', userRouter);

app.all('*', function(req, res){
  debug('entered app.all route in server.js:  this route is not registered');
});

const server = app.listen(port, function(){
  debug('listen');
  debug('express app up on port: ', port);
});

server.isRunning = true;
module.exports = server;
