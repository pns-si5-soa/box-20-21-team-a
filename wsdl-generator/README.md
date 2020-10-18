# WSDL-Generator

This is a wsdl generator who use [http://marin.jb.free.fr](http://marin.jb.free.fr)

## Install 

```npm install```

## How to use

Create a json file with this model :

```
{
    "copyright": "(c) TeamA",
    "service": "booster",
    "provider": "booster",
    "domain": "fr.teamA",
    "brief": "description",

    "ports": [
        "/wsdl?wsdl"
    ],

    "types": [
        "string text"
    ],

    "functions": [
        "text toString()"
    ]
}
```

Execute the program like 

```
node src/index.js --input <input> --host <host> --port <port>
```

Example

```
node src/index.js --input ./src.json --host telemetry-service --port 3002
```

```
node src/index.js -i ./json/src.json -h localhost -p 3001
```