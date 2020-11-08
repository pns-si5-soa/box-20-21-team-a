import axios, {AxiosInstance} from 'axios'

class API {
    axios: AxiosInstance;

    constructor(host: String, port: String) {
        this.axios = axios.create({baseURL: 'http://'+ host +':' + port})
    }
}

export default API;