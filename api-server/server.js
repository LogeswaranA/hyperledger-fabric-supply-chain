var express = require('express');
const https = require('https');
var http = require('http');
var cors = require('cors');
require('dotenv').config();
var util = require('util');
var bodyParser = require('body-parser');
var log4js = require('log4js');
var logger = log4js.getLogger('servicepr-admin');
var debug = require('debug')('secure:server');
const passport = require('passport');
var app = express();
const InitiateMongoServer = require("./config/db");

//Routes Declaration 
const participantAPI = require('./routes/participantAPI');
const assetAPI = require('./routes/assetAPI');
const transactionAPI = require('./routes/transactionAPI');
const usermgmt = require('./routes/usermgmt');


//MongoDb Connection
InitiateMongoServer();

//Body Parser Middleware

//support parsing of application/json type post data
app.use(bodyParser.json({limit: "50mb"}));
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({limit:"50mb",extended:true,parameterLimit:50000}));

//Passport Middleware
app.use(passport.initialize());
//Passport  Config
require('./config/passport')(passport);

//cors
app.options('*', cors());
app.use(cors());


//Use Routes
// app.use('/api/blockchain', participantAPI);
app.use('/api/v1', participantAPI);
app.use('/api/v1', assetAPI);
app.use('/api/v1', transactionAPI);
app.use('/api/v1', usermgmt);


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

app.use(
	'/api-docs',
	swaggerUi.serve, 
	swaggerUi.setup(swaggerDocument),
  );


///////////////////////////////////////////////////////////////////////////////
//////////////////////////////// START SERVER /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
var host = process.env.HOST;
var port = normalizePort(process.env.PORT);
app.set('port', port);
var server = http.createServer(app).listen(port);
//console.log("Server info is",server);
logger.info('------------------- SERVER STARTED -----------------------');
logger.info('***************  http://%s:%s  ******************', host, port);
server.timeout = 240000;
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ?
    'pipe ' + addr :
    'port ' + addr.port;
  debug('Listening on ' + bind);
}
//////////////////////////////// END START SERVER /////////////////////////////////

