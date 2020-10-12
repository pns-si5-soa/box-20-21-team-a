#!/usr/bin/env node
const API = require('./API/API')
const Soap = require('./models/Soap')
const fs = require('fs');

const arg = require('arg');
const { exit } = require('process');
 
const args = arg({
    // Types
    '--help':    Boolean,
    '--input':   String,      
    '--host':    String,      
    '--port':    String,      
 
    // Aliases
    '-i':        '--input',
    '-p':        '--port',    
    '-h':        '--host'     
});

if(args["--help"])
{
    console.log("Usage: wsdlgen [options]")
    console.log("")
    console.log("Options:")
    console.log("   --help          Print this message")
    console.log("   --input, -i     Input file of json")
    console.log("   --port, -p      Port of the wsdl")
    console.log("   --host, -h      Host of the wsdl")
    exit(0);
}

if(args["--input"] == undefined || args["--host"] == undefined || args["--port"] == undefined)
{
    console.log("input, host or port is undefined")
    exit(-1)
}

const inputfile = args["--input"]
const outputfile = inputfile.split(".json")[0] + ".wsdl"
const host = args["--host"]
const port = args["--port"]

const soap = new Soap(host, port);
soap.readFile(inputfile)
API.generate(soap.toJSONObject(), host, port).then(res => {
    fs.writeFileSync(outputfile, res.data);
}).catch(err => {
    console.log(err)
})