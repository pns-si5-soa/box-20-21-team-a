import express = require('express')
import indexRouter from "./routes";
const cors = require('cors');
var http = require('http');
import rocketService from "./services/rocket-service";
var soap = require('soap');
var bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config()

require('dotenv').config()
const app: express.Application = express();
const port = normalizePort(process.env.PORT) ?? 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

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
 * Create SOAP server.
 */

var myService = {
    rocket: {
        rocket_0: {

            launch : function(args : any){
              return {launch : rocketService.launch()};
            },
            /*stageRocketMidFlight : function(args : any){
                return {stageRocketMidFlight : rocketService.stageRocketMidFlight()};
            },
            deliverPayload : function(args : any){
                return {deliverPayload : rocketService.deliverPayload()};
            },*/
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
        console.log('SOAP server initialized');
    });
  });