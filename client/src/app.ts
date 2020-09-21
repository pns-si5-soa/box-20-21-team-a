#!/usr/bin/env node

import RocketAPI from './API/rocketAPI'
import weatherAPI from './API/weatherAPI'
import MissionAPI from './API/missionAPI'


require('dotenv').config();


const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

const weatherAPIInstance = new weatherAPI();
const rocketAPIInstance = new RocketAPI();
const commandAPIInstance = new MissionAPI();


clear();
console.log(
    chalk.blueBright(
        figlet.textSync('BLUE HORIZON', {horizontalLayout: 'full'})
    )
);

program
    .version('0.0.1')
    .description("The client of blue horizon project!")
    .option('-w, --weather', 'Gets weather status')
    .option('-r, --rocket', 'Gets rocket status')
    .option('-m, --mission', 'Gets mission status')
    // .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
    .parse(process.argv);

if (program.weather) {
    weatherAPIInstance.getWeather().then(res => {
        console.log("The weather is : " + res.data);
    }).catch(err => {
        console.log('There is an error : ', err);
    });
} else if(program.rocket) {
    rocketAPIInstance.getRocketStatus().then(res => {
        console.log("The rocket status is : " + res.data);
    }).catch(err => {
        console.log('There is an error : ', err);
    });
} else if (program.mission) {
    commandAPIInstance.createPoll().then(res => {
        console.log("The poll is created, poll: " + res.data)
    }).catch(err => {
        console.log('There is an error : ', err)
    });
}
// const cheese: string = true === program.cheese ? 'marble' : program.cheese || 'no';
// console.log('  - %s cheese', cheese);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}

