'use strict';
//DEBUG=auth* node server.js
//npm modules
const express = require('express');
//module constants
const app = express();


const port = process.env.PORT || 3000;
const morgan = require('morgan');


app.use(morgan('dev'));




// app.use('/api', userRouter);
app.use(express.static(`${__dirname}/build`));

app.listen(port, function(){
  console.log('server up', port);
});
