# WSDL-Generator

This is a wsdl generator who use [http://marin.jb.free.fr](http://marin.jb.free.fr)

## Install 

```npm install```

## How to use

Create a json file with this model :

```
{
    "copyright": "(c) World Corp",
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
node src/index.js <output> <input> <host> <port>
```

Example

```
node src/index.js ./out/out2.wsdl ./src.json telemetry-service 3002
```

```
node src/index.js ./out.wsdl ./json/src.json localhost 3001
```