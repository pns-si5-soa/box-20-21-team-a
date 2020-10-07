import express = require('express')
import createError = require('http-errors');
import BoosterData from './entities/BoosterData';
import indexRouter  from './routes';
import path from 'path';
import bodyParser from 'body-parser'

const cors = require('cors');
var soap = require('soap');

require('dotenv').config()
const app: express.Application = express();
const port = normalizePort(process.env.PORT) ?? 3001;

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

const booster = new BoosterData();

var myService = {
    booster: {
        booster_0: {
            launchBooster : function(args : any){
                booster.launch()
                return {booster : booster.toObjectJSON()};
            },
            destroy : function(args : any){
                booster.destroy()
                return {booster : booster.toObjectJSON()};
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
        console.log('SOAP server initialized');
    });
  });