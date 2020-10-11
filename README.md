# blue-origin-x-20-21-soa-20-21-a [![Build Status](https://travis-ci.com/pns-si5-soa/box-20-21-team-a.svg?token=iVy7SupLvEyaRHecrkoc&branch=develop)](https://travis-ci.com/pns-si5-soa/box-20-21-team-a)

[![Build Status](https://travis-ci.com/pns-si5-soa/box-20-21-team-a.svg?token=iVy7SupLvEyaRHecrkoc&branch=develop)](https://travis-ci.com/pns-si5-soa/box-20-21-team-a)
[![Build Status](https://badgen.net/badge/version/2.0/purple)](https://badgen.net/badge/version/2.0/purple)

## Description

This project is a class project realized during the 5th year of engineer school. The aim of this project is to create a micro services architecture to set up a system respecting the Blue Galactic X ambitions.

## Installation

To install each service, follow the README of each service.

- [Front](front/README.md)
- [Mission-Service](mission-service/README.md)
- [Weather-Service](weather-service/README.md)
- [Mission-Service](mission-service/README.md)
- [Booster-Service](booster-service/README.md)

## PM2 

You can use PM2 to start all services with the command line 
```
./sas.sh start
```

You can stop all services with the command line
```
./sas.sh stop
```

You can show logs with the command line
```
./sas.sh -p <project> logs 
```

### Install

To use pm2 you must install it on your system, to do it you can run 
```
npm install -g pm2
```
and run 
```
pm2 --help
```
to check if it has been correctly installed

Now adding ts on pm2
```
pm2 install typescript
```

## To use

You can use the script at the root of project, to start it, run :
`./run.sh --help` to show help

## Docker compose 

You can simply run `docker-compose up` or `docker-compose up --build` to rebuild 

Or

First run `docker-compose run --rm waitforservices` to launch services 

Then run `docker-compose up front`


##Log Release

[2020-10-11T20:50:21.222] [INFO] From service front - Richard creates the poll to start the mission
[2020-10-11T20:50:21.309] [INFO] From service mission - A poll was created
[2020-10-11T20:50:21.332] [INFO] From service front - Once the poll is created, Tory checks the weather
[2020-10-11T20:50:21.344] [INFO] From service weather - The weather is currently : Cloudy
[2020-10-11T20:50:21.348] [INFO] From service front - If the weather is good, Tory answers "Go" to the poll
[2020-10-11T20:50:21.356] [INFO] From service mission - The weather department response for the poll is true
[2020-10-11T20:50:21.357] [INFO] From service front - Elon checks the rocket status
[2020-10-11T20:50:21.364] [INFO] From service telemetry - 				{"rocketStatus":1,"fuelLevel":30,"altitude":0,"speed":0,"pressure":0,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:50:21.365] [INFO] From service front - Once the weather response is "Go" and the rocket status is Ready, Elon answers "Go" to the poll
[2020-10-11T20:50:21.371] [INFO] From service mission - The rocket department response for the poll is true
[2020-10-11T20:50:21.372] [INFO] From service front - Once the weather and rocket responses are "Go",Richard answers "Go" to the poll
[2020-10-11T20:50:21.377] [INFO] From service mission - The mission department response for the poll is true
[2020-10-11T20:50:21.481] [INFO] From service front - Once the poll is good, Elon launches the rocket
[2020-10-11T20:50:21.588] [INFO] From service booster - Launching booster
[2020-10-11T20:50:21.591] [INFO] From service booster - Booster launched
[2020-10-11T20:50:21.747] [INFO] From service rocket - Rocket has been launched!
[2020-10-11T20:50:24.384] [INFO] From service telemetry - 				{"rocketStatus":2,"fuelLevel":30,"altitude":0,"speed":0,"pressure":0,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:50:24.386] [INFO] From service telemetry - 				{"boosterStatus":1,"fuelLevel":46,"altitude":46,"speed":14}
[2020-10-11T20:50:24.388] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:50:27.384] [INFO] From service telemetry - 				{"rocketStatus":2,"fuelLevel":30,"altitude":0,"speed":0,"pressure":0,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:50:27.385] [INFO] From service telemetry - 				{"boosterStatus":1,"fuelLevel":40,"altitude":145,"speed":20}
[2020-10-11T20:50:27.387] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:50:30.385] [INFO] From service telemetry - 				{"rocketStatus":2,"fuelLevel":30,"altitude":0,"speed":0,"pressure":0,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:50:30.386] [INFO] From service telemetry - 				{"boosterStatus":1,"fuelLevel":34,"altitude":280,"speed":26}
[2020-10-11T20:50:30.387] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:50:33.386] [INFO] From service telemetry - 				{"rocketStatus":2,"fuelLevel":30,"altitude":0,"speed":0,"pressure":0,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:50:33.390] [INFO] From service telemetry - 				{"boosterStatus":1,"fuelLevel":28,"altitude":451,"speed":32}
[2020-10-11T20:50:33.391] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:50:36.391] [INFO] From service telemetry - 				{"rocketStatus":2,"fuelLevel":30,"altitude":0,"speed":0,"pressure":0,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:50:36.393] [INFO] From service telemetry - 				{"boosterStatus":1,"fuelLevel":22,"altitude":658,"speed":38}
[2020-10-11T20:50:36.395] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:50:39.390] [INFO] From service telemetry - 				{"rocketStatus":2,"fuelLevel":30,"altitude":0,"speed":0,"pressure":0,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:50:39.391] [INFO] From service telemetry - 				{"boosterStatus":1,"fuelLevel":16,"altitude":901,"speed":44}
[2020-10-11T20:50:39.392] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:50:42.396] [INFO] From service telemetry - 				{"rocketStatus":2,"fuelLevel":30,"altitude":0,"speed":0,"pressure":0,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:50:42.399] [INFO] From service telemetry - 				{"boosterStatus":1,"fuelLevel":10,"altitude":1180,"speed":50}
[2020-10-11T20:50:42.402] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:50:45.392] [INFO] From service telemetry - 				{"rocketStatus":2,"fuelLevel":30,"altitude":0,"speed":0,"pressure":0,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:50:45.394] [INFO] From service telemetry - 				{"boosterStatus":1,"fuelLevel":4,"altitude":1495,"speed":56}
[2020-10-11T20:50:45.395] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:50:46.687] [INFO] From service booster - Initializing booster detachment.
[2020-10-11T20:50:46.688] [INFO] From service booster - Landing booster
[2020-10-11T20:50:46.706] [INFO] From service rocket - Initializing rocket engines.
[2020-10-11T20:50:46.707] [INFO] From service rocket - Rocket engines started.
[2020-10-11T20:50:46.710] [INFO] From service rocket - Second stage of flight initialized.
[2020-10-11T20:50:48.389] [INFO] From service telemetry - 				{"rocketStatus":3,"fuelLevel":29,"altitude":50,"speed":52,"pressure":5,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:50:48.390] [INFO] From service telemetry - 				{"boosterStatus":2,"fuelLevel":0,"altitude":1606,"speed":58}
[2020-10-11T20:50:48.392] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:50:51.388] [INFO] From service telemetry - 				{"rocketStatus":3,"fuelLevel":26,"altitude":212,"speed":58,"pressure":20,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:50:51.390] [INFO] From service telemetry - 				{"boosterStatus":2,"fuelLevel":0,"altitude":1273,"speed":52}
[2020-10-11T20:50:51.391] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:50:54.389] [INFO] From service telemetry - 				{"rocketStatus":3,"fuelLevel":23,"altitude":392,"speed":64,"pressure":35,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:50:54.391] [INFO] From service telemetry - 				{"boosterStatus":2,"fuelLevel":0,"altitude":976,"speed":46}
[2020-10-11T20:50:54.393] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:50:57.397] [INFO] From service telemetry - 				{"rocketStatus":3,"fuelLevel":20,"altitude":590,"speed":70,"pressure":50,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:50:57.400] [INFO] From service telemetry - 				{"boosterStatus":2,"fuelLevel":0,"altitude":715,"speed":40}
[2020-10-11T20:50:57.403] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:51:00.390] [INFO] From service telemetry - 				{"rocketStatus":3,"fuelLevel":17,"altitude":806,"speed":76,"pressure":65,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:51:00.394] [INFO] From service telemetry - 				{"boosterStatus":2,"fuelLevel":0,"altitude":490,"speed":34}
[2020-10-11T20:51:00.395] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:51:00.718] [INFO] From service rocket - Going through MAX Q. Throttling down...
[2020-10-11T20:51:03.390] [INFO] From service telemetry - 				{"rocketStatus":4,"fuelLevel":14,"altitude":1038,"speed":78,"pressure":70,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:51:03.391] [INFO] From service telemetry - 				{"boosterStatus":2,"fuelLevel":0,"altitude":301,"speed":28}
[2020-10-11T20:51:03.392] [INFO] From service telemetry - 				{"payloadStatus":0,"speed":-1,"altitude":-1}
[2020-10-11T20:51:03.409] [INFO] From service front - Gwynne delivers the payload
[2020-10-11T20:51:03.669] [INFO] From service payload - Detaching Payload...
[2020-10-11T20:51:03.675] [INFO] From service payload - Progressing to orbital position ...
[2020-10-11T20:51:06.391] [INFO] From service telemetry - 				{"rocketStatus":4,"fuelLevel":11,"altitude":1272,"speed":78,"pressure":70,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:51:06.392] [INFO] From service telemetry - 				{"boosterStatus":2,"fuelLevel":0,"altitude":148,"speed":22}
[2020-10-11T20:51:06.393] [INFO] From service telemetry - 				{"speed":20,"altitude":36975,"payloadStatus":1}
[2020-10-11T20:51:09.388] [INFO] From service telemetry - 				{"rocketStatus":4,"fuelLevel":8,"altitude":1506,"speed":78,"pressure":70,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:51:09.389] [INFO] From service telemetry - 				{"boosterStatus":2,"fuelLevel":0,"altitude":31,"speed":16}
[2020-10-11T20:51:09.390] [INFO] From service telemetry - 				{"speed":35,"altitude":36900,"payloadStatus":1}
[2020-10-11T20:51:09.707] [INFO] From service booster - Booster landed
[2020-10-11T20:51:09.708] [INFO] From service booster - Booster stopped
[2020-10-11T20:51:12.390] [INFO] From service telemetry - 				{"rocketStatus":4,"fuelLevel":5,"altitude":1740,"speed":78,"pressure":70,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:51:12.392] [INFO] From service telemetry - 				{"boosterStatus":3,"fuelLevel":0,"altitude":0,"speed":0}
[2020-10-11T20:51:12.394] [INFO] From service telemetry - 				{"speed":50,"altitude":36780,"payloadStatus":1}
[2020-10-11T20:51:15.394] [INFO] From service telemetry - 				{"rocketStatus":4,"fuelLevel":2,"altitude":1974,"speed":78,"pressure":70,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:51:15.395] [INFO] From service telemetry - 				{"boosterStatus":3,"fuelLevel":0,"altitude":0,"speed":0}
[2020-10-11T20:51:15.396] [INFO] From service telemetry - 				{"speed":65,"altitude":36615,"payloadStatus":1}
[2020-10-11T20:51:18.396] [INFO] From service telemetry - 				{"rocketStatus":4,"fuelLevel":0,"altitude":2130,"speed":78,"pressure":70,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:51:18.397] [INFO] From service telemetry - 				{"boosterStatus":3,"fuelLevel":0,"altitude":0,"speed":0}
[2020-10-11T20:51:18.398] [INFO] From service telemetry - 				{"speed":80,"altitude":36405,"payloadStatus":1}
[2020-10-11T20:51:21.391] [INFO] From service telemetry - 				{"rocketStatus":4,"fuelLevel":0,"altitude":2130,"speed":78,"pressure":70,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:51:21.392] [INFO] From service telemetry - 				{"boosterStatus":3,"fuelLevel":0,"altitude":0,"speed":0}
[2020-10-11T20:51:21.393] [INFO] From service telemetry - 				{"speed":95,"altitude":36150,"payloadStatus":1}
[2020-10-11T20:51:22.692] [INFO] From service payload - Payload is detached
[2020-10-11T20:51:24.391] [INFO] From service telemetry - 				{"rocketStatus":4,"fuelLevel":0,"altitude":2130,"speed":78,"pressure":70,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:51:24.392] [INFO] From service telemetry - 				{"boosterStatus":3,"fuelLevel":0,"altitude":0,"speed":0}
[2020-10-11T20:51:24.393] [INFO] From service telemetry - 				{"speed":105,"altitude":35955,"payloadStatus":2}
[2020-10-11T20:51:24.420] [INFO] From service front - If something went wrong, the rocket and the booster can be destroyed separately
[2020-10-11T20:51:24.420] [INFO] From service front - Richard wants to destroy the rocket
[2020-10-11T20:51:24.457] [INFO] From service rocket - *BOOM!* - Rocket destroyed!
[2020-10-11T20:51:27.393] [INFO] From service telemetry - 				{"rocketStatus":5,"fuelLevel":0,"altitude":2130,"speed":78,"pressure":70,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:51:27.395] [INFO] From service telemetry - 				{"boosterStatus":3,"fuelLevel":0,"altitude":0,"speed":0}
[2020-10-11T20:51:27.397] [INFO] From service telemetry - 				{"speed":105,"altitude":35955,"payloadStatus":2}
[2020-10-11T20:51:27.422] [INFO] From service front - Richard wants to destroy the booster too
[2020-10-11T20:51:27.433] [INFO] From service booster - *BOOM!* - Booster destroyed!
[2020-10-11T20:51:30.396] [INFO] From service telemetry - 				{"rocketStatus":5,"fuelLevel":0,"altitude":2130,"speed":78,"pressure":70,"dataUpdateDelay":1000,"acceleration":2,"pressureIncrease":5}
[2020-10-11T20:51:30.402] [INFO] From service telemetry - 				{"boosterStatus":3,"fuelLevel":0,"altitude":0,"speed":0}
[2020-10-11T20:51:30.403] [INFO] From service telemetry - 				{"speed":105,"altitude":35955,"payloadStatus":2}

