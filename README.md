# blue-origin-x-20-21-soa-20-21-a [![Build Status](https://travis-ci.com/pns-si5-soa/box-20-21-team-a.svg?token=iVy7SupLvEyaRHecrkoc&branch=develop)](https://travis-ci.com/pns-si5-soa/box-20-21-team-a)

[![Build Status](https://travis-ci.com/pns-si5-soa/box-20-21-team-a.svg?token=iVy7SupLvEyaRHecrkoc&branch=develop)](https://travis-ci.com/pns-si5-soa/box-20-21-team-a)
[![Build Status](https://badgen.net/badge/version/6.0/purple)](https://badgen.net/badge/version/6.0/purple)

# FINAL DELIVERY

### Points repartition
Younes Abdennadher : 100 <br/>
Alexis Lefebvre : 100 <br/>
Alexandre Longordo : 100 <br/>
Thomas Colomban : 100

All members worked equally and had the same level of involvement.

### What should be expected when running
`~$ ./prepare.sh`
Runs docker-compose build to load and build all dockers images

`~$ ./run.sh`
Runs docker-compose up and the acceptance scenarios associated to the project and the APIs. 

When run.sh is started, all services are up, and it starts cucumber's scenario. You can see logs in real time to understand what each service is doing. 
Once run.sh is finished logs are available in the [container-logs](container-logs) folder.

#### Notes : 
We removed logs from mission in order to improve the logs readability. Mission is just forwarding missions status received from rocket to the kafka bus

Sometimes (very rarely) we have a timeout error on the integration tests because of kafka. We didn't succeed to prevent it from loading old messages when the consumer is created.
This leads to a problem because the tests are running during this loading, and it could trigger a timeout error if kafka is taking too long to load messages.

> If you encounter a problem with the integration scenario when running, logs can be found [here](LOGS.md).

# Other infos

## Description

This project is a class project realized during the 5th year of engineering school. The aim of this project is to create a micro services architecture to set up a system respecting the Blue Galactic X ambitions.

## Installation

To install each service, follow the README of each service.

- [Front](front/README.md)
- [Mission-Service](back/mission-service/README.md)
- [Weather-Service](back/weather-service/README.md)
- [Rocket-Service](back/rocket-service/README.md)
- [Booster-Service](back/booster-service/README.md)
- [Payload-Service](back/payload-service/README.md)
- [Telemetry-Service](back/telemetry-writer-service/README.md)
- [Mission-Coordinator-Service](back/missions-coordinator-service/README.md)
- [Poll-Service](back/poll-service/README.md)
- [Real-Time-Service](back/real-time-service/README.md)
- [Telemetry-Analyser-Service](back/telemetry-analyser-service/README.md)
- [Telemetry-Listener-Service](back/telemetry-listener-service/README.md)
- [Telemetry-Writer-Service](back/telemetry-writer-service/README.md)

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

## To run kafka 
Go to kafka_2.* directory on your terminal

First run zookeeper with :
`bin/zookeeper-server-start.sh config/zookeeper.properties`

Then run kafka with :
`bin/kafka-server-start.sh config/server.properties`
