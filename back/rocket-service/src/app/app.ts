import express = require('express')
import createError = require('http-errors');
import indexRouter from "./routes";
const cors = require('cors');
var http = require('http');

require('dotenv').config()
const app: express.Application = express();
const port = normalizePort(process.env.PORT) ?? 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

//Here it's any because everything can be insert on .env file, the goal is verify
function normalizePort(val: any) {
    let port = parseInt(val, 10);

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
 * Event listener for HTTP server "error" events.
 */

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

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
 * Event listener for HTTP server "listening" events.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Rocket : Listening on ' + bind);
    if (process.env.CI !== undefined) {
        process.exit(0);
    }
}

// SOAP:

// import express = require('express')
// import createError = require('http-errors');
// import rocketService from "./services/rocket-service";
//
// import indexRouter from "./routes";
// const cors = require('cors');
// var http = require('http');
// var soap = require('soap');
// var bodyParser = require('body-parser');
// const path = require('path');
//
// require('dotenv').config()
// const app: express.Application = express();
// const port = normalizePort(process.env.PORT) ?? 3000;
//
//
// app.use(cors())
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
//
// app.use('/', indexRouter);
//
// // catch 404 and forward to error handler
//
//
//
//
// //Here it's any because everything can be insert on .env file, the goal is verify
// function normalizePort(val: any) {
//     var port = parseInt(val, 10);
//
//     if (isNaN(port)) {
//         // named pipe
//         return val;
//     }
//
//     if (port >= 0) {
//         // port number
//         return port;
//     }
//
//     return false;
// }
//
//
// /**
//  * Create SOAP server.
//  */
//
// var myService = {
//     rocket: {
//         rocket_0: {
//
//             launch : function(args : any){
//               return {launch : rocketService.launch()};
//             },
//             stageRocketMidFlight : function(args : any){
//                 return {stageRocketMidFlight : rocketService.stageRocketMidFlight()};
//             },
//         }
//     }
//   };
//
//   var pathWsdl = path.resolve("./src/app/wsdl/", "myservice.wsdl");
//
//   var xml = require('fs').readFileSync(pathWsdl, 'utf8');
//
//   //body parser middleware are supported (optional)
//   app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));
//   app.listen(port, function(){
//   //Note: /wsdl route will be handled by soap module
//   //and all other routes & middleware will continue to work
//   soap.listen(app, '/wsdl', myService, xml, function(){
//   console.log('server SOAP initialized');
//   });
//   });