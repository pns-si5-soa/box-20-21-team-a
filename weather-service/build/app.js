"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var weather_service_1 = __importDefault(require("./weather-service"));
require('dotenv').config();
var app = express();
var port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001;
app.get('/weather', function (req, res) {
    res.send(weather_service_1.default());
});
app.listen(port, function () {
    console.log("Weather : Listening at http://localhost:" + port);
    if (process.env.CI !== undefined) {
        process.exit(0);
    }
});
