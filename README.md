# blue-origin-x-20-21-soa-20-21-a [![Build Status](https://travis-ci.com/pns-si5-soa/box-20-21-team-a.svg?token=iVy7SupLvEyaRHecrkoc&branch=develop)](https://travis-ci.com/pns-si5-soa/box-20-21-team-a)

[![Build Status](https://travis-ci.com/pns-si5-soa/box-20-21-team-a.svg?token=iVy7SupLvEyaRHecrkoc&branch=develop)](https://travis-ci.com/pns-si5-soa/box-20-21-team-a)
[![Build Status](https://badgen.net/badge/version/6.0/purple)](https://badgen.net/badge/version/6.0/purple)

# FINAL DELIVERY

### Points repartition
Younes Abdennadher : 100 <br/>
Alexis Lefebvre : 100 <br/>
Alexandre Longordo : 100 <br/>
Thomas Colomban : 100

### What should be expected when running
`~$ ./prepare.sh`
Load dependencies, compile if necessary, prepare the environment and starts the docker images.

`~$ ./run.sh`
Runs docker-compose up and the acceptance scenarios associated to the project and the APIs. 

It must show each step of your acceptance scenarios in a comprehensive manner and include enough logs/traces for us to get a grasp of your architecture as a whole (request payloads, etc...).

# Other infos

## Description

This project is a class project realized during the 5th year of engineering school. The aim of this project is to create a micro services architecture to set up a system respecting the Blue Galactic X ambitions.

## Installation

To install each service, follow the README of each service.

- [Front](front/README.md)
- [Mission-Service](mission-service/README.md)
- [Weather-Service](weather-service/README.md)
- [Rocket-Service](rocket-service/README.md)
- [Booster-Service](booster-service/README.md)
- [Payload-Service](payload-service/README.md)
- [Telemetry-Service](telemetry-writer-service/README.md)

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

## Logs for Release

Voici les logs censés s'afficher une fois que le run.sh a été exécuté. 
Les logs de tous les services s'affichent tous sur un même fichier dans le dossier logs. 
Pour avoir ce scénario, il faut exécuter  :

`./sas.sh` pour lancer tous les services, puis dans le dossier front : `npm run demo`
