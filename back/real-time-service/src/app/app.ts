require('dotenv').config()
import express = require('express')
import createError = require('http-errors');
import mission from './controller/mission';
import indexRouter from "./routes";
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
    console.log('Real Time : Listening on ' + bind);
    if (process.env.CI !== undefined) {
        process.exit(0);
    }
}


// KAFKA 
const { Kafka, logLevel } = require('kafkajs')
const host = process.env.HOST_IP;



const kafka = new Kafka({
  logLevel: logLevel.INFO,
  brokers: [`${host}:9092`],
  clientId: 'real-time',
})

const topicRocket = 'rocket-topic'
const topicBooster = 'booster-topic'
const consumer = kafka.consumer({ groupId: 'group-realtime' })

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic : topicRocket })
  await consumer.subscribe({ topic : topicBooster})
  await consumer.run({
     eachBatch: async ({ batch } : any) => {
       console.log(batch)
     },
    eachMessage: async ({ topic, partition, message } : any) => {

      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`

      console.log(`- ${prefix} ${message.key}#${message.value}`)
      var msg = message.value; 
      var json = JSON.parse(msg)  
      if(topic =='rocket-topic'){
        mission.updateStatusRocketInRealTime(json.rocketStatus,json.missionId);
      console.log("rocket status : "+json.rocketStatus);

      }
      else if (topic =='booster-topic'){


        mission.updateStatusBoosterInRealTime(json.boosterStatus,json.missionId);

      }
      else{
        console.log('topic :'+topic+' ignored');
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
