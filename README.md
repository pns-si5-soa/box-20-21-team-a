# blue-origin-x-20-21-soa-20-21-a [![Build Status](https://travis-ci.com/pns-si5-soa/blue-origin-x-20-21-soa-20-21-a.svg?token=iVy7SupLvEyaRHecrkoc&branch=develop)](https://travis-ci.com/pns-si5-soa/blue-origin-x-20-21-soa-20-21-a)

## Description

_todo create description_

## Installation

To install each services, following the README to each services.

- [Client](client/README.md)
- [Mission-Service](mission-service/README.md)
- [Weather-Service](weather-service/README.md)
- [Mission-Service](mission-service/README.md)

## To use

You can use the script at the root of project, to start it, run :
`./run.sh --help` to show help

## Docker compose 

You can simply run `docker-compose up` or `docker-compose up --build` to rebuild 
Or
First run `docker-compose run --rm waitforservices` to laucnh services 
Then run `docker-compose up client`

