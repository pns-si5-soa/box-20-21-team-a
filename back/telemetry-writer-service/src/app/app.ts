import express = require('express')
import createError = require('http-errors');
import BoosterData from './entities/Booster/BoosterData';
import PayloadData from './entities/Payload/PayloadData';
import RocketData from './entities/Rocket/RocketData';
require('dotenv').config()
import indexRouter from "./routes";
import telemetryController from './services/telemetry-controller';
var http = require('http');
var cors = require('cors');
require ("logs-module");

const consumer = require('./consumer/consumer')

const app: express.Application = express();
const port = normalizePort(process.env.PORT) ?? 3007;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/telemetry', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

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
 * Event listener for HTTP server "error" events.
 */

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
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
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Telemetry : Listening on ' + bind);
    if (process.env.CI !== undefined) {
        process.exit(0);
    }
}

consumer.run('telemetry-booster', (value: BoosterData) => {
    telemetryController.addBoosterData(value);
})

consumer.run('telemetry-payload', (value: PayloadData) => {
    telemetryController.addPayloadData(value);
})

consumer.run('telemetry-rocket', (value: RocketData) => {
    telemetryController.addRocketData(value);
})