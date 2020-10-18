import express = require('express');

const cors = require('cors');
import rocketService from "./controller";

let soap = require('soap');
let bodyParser = require('body-parser');
const path = require('path');
require("logs-module");

require('dotenv').config()

require('dotenv').config()
const app: express.Application = express();
const port = normalizePort(process.env.PORT) ?? 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

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

let myService = {
    rocket: {
        rocket_0: {
            putRocketOnInternalPower: function (args: any) {
                rocketService.putRocketOnInternalPower();
                return {rocketService: rocketService.rocket.getRocketData().toJsonObject()};
            },

            initializeStartupProcess: function (args: any) {
                rocketService.initializeStartupProcess();
                return {rocketService: rocketService.rocket.getRocketData().toJsonObject()};
            },

            notifyLaunch: function (args: any) {
                rocketService.notifyOfBoosterLaunch();
                return {rocket: rocketService.rocket.getRocketData().toJsonObject()};
            },

            initializeSecondEngineForSecondStage: function (args: any) {
                rocketService.initializeSecondEngineForSecondStage();
                return {rocket: rocketService.rocket.getRocketData().toJsonObject()};
            },

            destroy: function (args: any) {
                rocketService.destroy();
                return {rocketService: rocketService.rocket.getRocketData().toJsonObject()};
            },
        }
    }
};

let pathWsdl = path.resolve("./src/app/wsdl/", "myservice.wsdl");

let xml = require('fs').readFileSync(pathWsdl, 'utf8');

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