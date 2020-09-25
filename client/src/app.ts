#!/usr/bin/env node

import RocketAPI from './API/rocketAPI'
import weatherAPI from './API/weatherAPI'
import MissionAPI from './API/missionAPI'
import FlagList from './Flag/FlagList'
import { exit } from 'process';
import execute from './Services/Execute';


require('dotenv').config();


const chalk = require('chalk');
const figlet = require('figlet');
const program = require('commander');

const weatherAPIInstance = new weatherAPI();
const rocketAPIInstance = new RocketAPI();
const commandAPIInstance = new MissionAPI();

const flags = new FlagList();

console.log(
    chalk.blueBright(
        figlet.textSync('BLUE HORIZON', {horizontalLayout: 'full'})
    )
);

program
    .version('0.0.1')
    .description("The client of blue horizon project!");

flags.build(program);

program.parse(process.argv);

flags.execute(program) 

execute.execute()