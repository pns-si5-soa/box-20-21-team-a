const axios = require('axios')

class API {

    constructor() {
        this.axios = axios.create({baseURL: 'http://marin.jb.free.fr'})
    }

    generate(data) {
        let len = 0;
        let dataStr = "ok=" + encodeURIComponent("ok")
        for(const element of Object.keys(data))
        {
            if(dataStr.length != 0) dataStr += "&"
            dataStr += element + "=" + encodeURIComponent(data[element])
            len += element.length + data[element].length
        }
        return this.axios({method: 'post',
                            url:'/wsdl/index.php',
                            data: dataStr,
                            headers: {'Content-type': 'application/x-www-form-urlencoded', "Content-length": len
                        }});
    }
}

module.exports = new API();