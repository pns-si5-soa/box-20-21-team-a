import express = require('express');
import createError = require('http-errors');

require('dotenv').config();
import indexRouter from "./routes";
import AnomalyAnalyserService from "./controller/TelemetryAnalyserService";
import {setIntervalConditionPromise} from "./tools/set_intervalx";
import BoosterData from "./entities/Booster/BoosterData";

const cors = require('cors');
var http = require('http');
require ("logs-module");



const app: express.Application = express();
if(process.env.PORT == undefined) throw Error("port is missing on .env file");
const port = normalizePort(process.env.PORT)

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
    console.log('Telemetry Analyser : Listening on ' + bind);
    if (process.env.CI !== undefined) {
        process.exit(0);
    }
}

// KAFKA
const { Kafka, logLevel } = require('kafkajs')
const host = process.env.HOST_IP;



const kafka = new Kafka({
    logLevel: logLevel.NOTHING,
    brokers: [`${host}:9092`],
    clientId: 'consumer-analyser',
})

const topicRocket = 'telemetry-rocket'
const topicBooster = 'telemetry-booster'

const consumer = kafka.consumer({ groupId: 'anomaly-group' })

const run = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic : topicRocket,fromBeginning : true })
    await consumer.subscribe({ topic : topicBooster, fromBeginning : true })
    await consumer.run({
        eachBatchAutoResolve: true,
        eachBatch: async ({ batch } : any) => {
            console.log(batch)
        },
        eachMessage: async ({ topic, partition, message } : any) => {

            const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`

            console.log(`- ${prefix} ${message.key}#${message.value}`)
            var msg = message.value;
            var json = JSON.parse(msg)

            console.log("====>")
            console.log(topic)
            console.log(json)
            
            if(topic =='telemetry-rocket'){
               console.log("oui")
                AnomalyAnalyserService.analyseRocketData(json);
            }
            if(topic == 'telemetry-booster') {
                console.log("non")

                AnomalyAnalyserService.analyseBoosterData(json);
            }


        },
    })

}

run().catch(e => console.error(`[example/consumer] ${e.message}`, e))

const errorTypes = ['unhandledRejection', 'uncaughtException']
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2']

errorTypes.map(type => {
    process.on(type, async e => {
        try {
            console.log(`process.on ${type}`)
            console.error(e)
            await consumer.disconnect()
            process.exit(0)
        } catch (_) {
            process.exit(1)
        }
    })
})


async function mockTelemetryData(){
    /*let boosterDataJSON = {
        missionId: 'a8139e88-0844-4f02-99e0-635e8eec76eb',
        rocketStatus: 0,
        fuelLevel: 10,
        altitude: 100,
        speed: 50,
        pressure: 0
    }*/

    let boosterDataJSON = {
        boosterStatus: 0,
            fuelLevel: 0,
            altitude: 0,
            speed: 0,
            missionId: 'd5f16c28-96d9-4524-9618-c62bd197fdb0'
    };
    
    await setIntervalConditionPromise(() => {
            let boosterData = new BoosterData(boosterDataJSON.altitude,boosterDataJSON.speed,boosterDataJSON.fuelLevel,boosterDataJSON.missionId,boosterDataJSON.boosterStatus)
            boosterDataJSON.altitude = boosterDataJSON.altitude-20;
            boosterData.setAltitude(boosterDataJSON.altitude);
            AnomalyAnalyserService.analyseBoosterData(boosterData);
            boosterDataJSON.altitude = boosterDataJSON.altitude-20;
            console.log(boosterDataJSON.altitude);
        },
        1000,
        () => boosterDataJSON.altitude<=0);
}


//mockTelemetryData();

