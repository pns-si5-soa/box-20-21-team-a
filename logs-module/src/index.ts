import { configure, getLogger } from "log4js";
import name = require('project-name');
const logger = getLogger(name());
logger.level = "info";
const datetime = new Date();

configure({
  appenders: { logs: { type: "file", filename: __dirname + "/../../logs/" + datetime.toISOString().slice(0,10) + ".log" } },
  categories: { default: { appenders: ["logs"], level: "trace" } }
});

const log = console.log;
const error = console.error;
const warn = console.warn;

const consolelog = function(msg: any) {
    log(msg);
    logger.info(msg);
}

const consoleerror = function(msg: any) {
    error(msg);
    logger.error(msg);
}

const consolewarn  = function(msg: any) {
    warn(msg);
    logger.warn(msg);
}

console.log = consolelog;
console.error = consoleerror;
console.warn = consolewarn;

export default {consolelog, consoleerror, consolewarn}