# Client Blue-Origin

## Description

Our client is a CLI who use flags to run it. There are flags to specify what action the client must do. 

## Installation

To install the client you must to install all dependencies npm with
`npm run install`
Ensure you must create .env from .env.example and fill your host and port for each back-end services. 
To default the host is `localhost` and the port is `3000` for rocket-service, `3001` for weather-service, and `3002` for mission-service

## To use

You can start with 
`npm run start`

You can run dev with
`npm run test`

You can run at development mode (with auto-loader) with
`npm run dev`

To adding flags for client you must add `--` like :
`npm run dev -- <args>`

## List of flags

* `--help` to show help
* `--service` to specify which service to call
* `--service_action` to specify which action to do for this service
* `--service_name` to specify wich service is concerned for the poll (only with service mission and action put)
* `--vote` to specify result of the poll (only with service mission and action put)

## List of services and its actions

* rocket : Rocket-service
    * get : Get the statut of the rocket
    * run : Launch the rocket
* weather : Weather-service
    * get : Get the weather
* mission : Mission-service
    * create : Create a poll
    * put : Fill the poll
    * get : Get the result of the poll