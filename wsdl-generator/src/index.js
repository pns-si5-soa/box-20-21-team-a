const API = require('./API/API')
const Soap = require('./models/Soap')
const fs = require('fs');

const arg = require('arg');
 
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

const inputfile = args["--input"]
const outputfile = inputfile.split(".json")[0] + ".wsdl"
const host = args["--host"]
const port = args["--port"]

const soap = new Soap(host, port);
soap.readFile(inputfile)
API.generate(soap.toJSONObject(), host, port).then(res => {
    console.log(res)
    fs.writeFileSync(outputfile, res.data);
}).catch(err => {
    console.log(err)
})