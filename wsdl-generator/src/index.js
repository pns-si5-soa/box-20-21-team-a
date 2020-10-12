const API = require('./API/API')
const Soap = require('./models/Soap')
const fs = require('fs');

const args = process.argv;

if(args.length < 6) return;

const outputfile = args[2]
const inputfile = args[3]
const host = args[4]
const port = args[5]

const soap = new Soap(host, port);
soap.readFile(inputfile)
API.generate(soap.toJSONObject(), host, port).then(res => {
    console.log(res)
    fs.writeFileSync(outputfile, res.data);
}).catch(err => {
    console.log(err)
})