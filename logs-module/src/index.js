const log4js = require("log4js");
const name = require('project-name');

const logger = log4js.getLogger('From service ' + name());
logger.level = "info";
const datetime = new Date();

log4js.configure({
    appenders: {
        logs: {
            type: "file",
            filename: __dirname + "/../../logs/" + datetime.toISOString().slice(0, 10) + ".log"
        }
    },
    categories: {default: {appenders: ["logs"], level: "trace"}}
});

const log = console.log;
const error = console.error;
const warn = console.warn;

const consolelog = function (msg) {
    log(msg);
    logger.info(msg);
}

const consoleerror = function (msg) {
    error(msg);
    logger.error(msg);
}

const consolewarn = function (msg) {
    warn(msg);
    logger.warn(msg);
}

console.log = consolelog;
console.error = consoleerror;
console.warn = consolewarn;

module.export = {log, error, warn}