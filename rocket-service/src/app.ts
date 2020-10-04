import express = require('express');
import rocketService from "./rocket-service";
require('dotenv').config();
const app: express.Application = express();
const port = process.env.PORT ?? 3000;
var soap = require('soap');
var bodyParser = require('body-parser');
const path = require('path');

var myService = {
  rocket: {
      rocket_0: {
        
          launch : function(args : any){
            return {launch : rocketService.launch()};
          },
      }
  }
};

var pathWsdl = path.resolve("./src/", "myservice.wsdl"); 

var xml = require('fs').readFileSync(pathWsdl, 'utf8');

//body parser middleware are supported (optional)
app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));
app.listen(3000, function(){
//Note: /wsdl route will be handled by soap module
//and all other routes & middleware will continue to work
soap.listen(app, '/wsdl', myService, xml, function(){
console.log('server SOAP initialized');
});
});