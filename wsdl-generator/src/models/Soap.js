const fs = require('fs');

class Soap {

    constructor(host, port) {
        /**
         * General informations
         */
        this.copyright = "";
        this.service = "";
        this.provider = "";
        this.domain = "";
        this.brief = "";
        /**
         * Service access
         */
        this.ports = ""

        /**
         * Types definitions
         */
        this.types = "";
        this.functions = "";

        this.host = host;
        this.port = port;
    }

    readFile(filename) {
        const rawdata = fs.readFileSync(filename);
        const json = JSON.parse(rawdata);
        this.copyright = json.copyright
        this.service = json.service
        this.provider = json.provider
        this.domain = json.domain
        this.brief = json.brief
        this.ports = json.ports.map(e => "http://" + this.host + ":" + this.port + e).join("\n")
        this.types = json.types.join("\n")
        this.functions = json.functions.join("\n")
    }

    toJSONObject() {
        return {
            copyright: this.copyright,
            service: this.service,
            provider: this.provider,
            domain: this.domain,
            brief: this.brief,
            ports: this.ports,
            types: this.types,
            functions: this.functions
        }
    }

}

module.exports = Soap;