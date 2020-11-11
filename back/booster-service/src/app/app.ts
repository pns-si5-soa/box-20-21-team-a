import express = require('express');

require('dotenv').config()
import BoosterController from './controller/index';
import path from 'path';
import bodyParser from 'body-parser'
import indexRouter from "./routes";

require("logs-module");

const cors = require('cors');
var soap = require('soap');

const app: express.Application = express();
if (process.env.PORT == undefined) throw Error("port is missing on .env file");
const port = normalizePort(process.env.PORT)
if (process.env.PORT_HTTP == undefined) throw Error("port http is missing on .env file");
const portHttp = normalizePort(process.env.PORT_HTTP)

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Here it's any because everything can be insert on .env file, the goal is verify 
function normalizePort(val: any) {
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
 * Create SOAP server.
 */


var myService = {
    booster: {
        booster_0: {
            destroy: function (args: any) {
                if (BoosterController.boosters[args.id] != undefined) {
                    BoosterController.destroy(args.id);
                    return {booster: BoosterController.boosters[args.id].getBoosterData().toObjectJSON()};
                }
                return {booster: 'This booster doesn\'t exist'};
            },
        }
    }
};

var pathWsdl = path.resolve("./src/app/wsdl/", "myservice.wsdl");

var xml = require('fs').readFileSync(pathWsdl, 'utf8');

//body parser middleware are supported (optional)
app.use(bodyParser.raw({
    type: function () {
        return true;
    }, limit: '5mb'
}));
app.listen(port, function () {
    //Note: /wsdl route will be handled by soap module
    //and all other routes & middleware will continue to work
    soap.listen(app, '/wsdl', myService, xml, function () {
        console.log('SOAP server listening on port ' + port);
    });
});

/**
 * Create HTTP server.
 */
app.use('/', indexRouter);
var http = require('http');

var server = http.createServer(app);


server.listen(portHttp);
/**
 * Listen on provided port, on all network interfaces.
 */

server.on('error', onError);
server.on('listening', onListening);


/**
 * Event listener for HTTP server "error" events.
 */

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof portHttp === 'string'
        ? 'Pipe ' + portHttp
        : 'Port ' + portHttp;

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
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Booster : Listening on ' + bind);
    if (process.env.CI !== undefined) {
        process.exit(0);
    }
}