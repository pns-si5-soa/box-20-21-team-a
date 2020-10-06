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

