import express = require('express')
import createError = require('http-errors');
import indexRouter from "./routes";
import Payload from "./aggregate/Payload"
import PayloadController from './controller/PayloadController';
const cors = require('cors');
const path = require('path');
var bodyParser = require('body-parser');
const soap = require('soap');
require ("logs-module");




require('dotenv').config()
const app: express.Application = express();
const port = normalizePort(process.env.PORT) ?? 3005;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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

 const payloadController = new PayloadController();

var myService = {
    payload: {
        payload_0: {
            deliverPayload : function(args : any){
                payloadController.detachThePayload();
                return {deliverPayload : payloadController.payload.payloadData.toObjectJSON()};
            },
        }
    }
  };

  var pathWsdl = path.resolve("./src/app/wsdl/", "myservice.wsdl");

  var xml = require('fs').readFileSync(pathWsdl, 'utf8');

  //body parser middleware are supported (optional)
  app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));
  app.listen(port, function(){
  //Note: /wsdl route will be handled by soap module
  //and all other routes & middleware will continue to work
    soap.listen(app, '/wsdl', myService, xml, function(){
        console.log('SOAP server listening on port ' + port);
    });
  });