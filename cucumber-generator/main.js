#!/usr/bin/env node
const fs = require('fs')
const arg = require('arg');
const { exit } = require('process');

const args = arg({
    // Types
    '--help': Boolean,
    '--output': String,

    // Aliases
    '-o': '--output',
    '-h': '--help'
});

if (args["--help"]) {
    console.log("Usage: feature2js [options] file")
    console.log("")
    console.log("Options:")
    console.log("   --help          Print this message")
    console.log("   --output, -o    Output file, if not specified, print strout")
    exit(0);
}

if (args["_"].length < 1) {
    console.log("error: no input file")
    exit(-1)
}

const inputfile = args["_"][0]
const outputfile = args["--output"]
const isTS = outputfile === undefined ? false : outputfile.split('.')[1] == 'ts'

function Line(text) {

    this.text = text;
    this.len = 0;
    this.types = []

    this.replaceAndCount = (regex, value) => {
        while (true) {
            const text = this.text.replace(regex, value)
            if (text == this.text) break;
            this.text = text
            this.len++;
            this.types.push(value.replace('{', '').replace('}', ''))
        }
        return this;
    }

    this.getText = () => {
        return this.text
    }

    this.getLength = () => {
        return this.len;
    }

    this.getTypes = () => {
        return this.types
    }
}

fs.readFile(inputfile, 'utf8', function (err, data) {
    if (err) {
        return console.error(err);
    }
    let last = null;
    const scenario = data
        .split("\n")
        .filter(e => e.length > 0)
        .map(e => e.trim())
        .map(e => [e.split(' ')[0], e.split(' ').splice(1).join(' ').trim()])
        .filter(e => e[0].toLowerCase() == 'given' || e[0].toLowerCase() == 'when' || e[0].toLowerCase() == 'and' || e[0].toLowerCase() == 'then')
        .map(line => {
            const lineObject = new Line(line[1])
                .replaceAndCount('"false"', "{boolean}")
                .replaceAndCount('"true"', "{boolean}")
                .replaceAndCount("'true'", "{boolean}")
                .replaceAndCount("'false'", "{boolean}")

                .replaceAndCount(/[+-]?([0-9]*[.])?[0-9]+/, '{number}')
                .replaceAndCount(/"[^"]+"/, '{string}')
                .replaceAndCount(/'[^']+'/, '{string}')

            const args = new Array(lineObject.getLength())
                .fill("arg")
                .map((element, index) => {
                    if(isTS) return element + index + ': ' + lineObject.getTypes()[index]
                    else return element + index
                })
                .join(', ')
            if(line[0].toLowerCase() !== 'and') last = line[0].toLowerCase().charAt(0).toUpperCase() + line[0].toLowerCase().slice(1)
            if(last == null) last = "Given"
            const str = last + '("' + lineObject.getText() + '", function(' + args + ') {\n'
                + '\t//do something\n'
                + '})\n'
            return str;
        })
        .join('')
    if(outputfile !== undefined)
        fs.writeFileSync(outputfile, "const {\n" +
            "\tWhen,\n" +
            "\tThen,\n" +
            "\tGiven,\n" +
            "} = require('cucumber');\n\n" + scenario);
    else 
        console.log("const {\n" +
        "\tWhen,\n" +
        "\tThen,\n" +
        "\tAnd,\n" +
        "} = require('cucumber');\n\n" + scenario);
});