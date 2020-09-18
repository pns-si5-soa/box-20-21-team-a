require('dotenv').config()
import weatherAPI from './API/weatherAPI'

const weatherAPIInstance = new weatherAPI()

weatherAPIInstance.getWeather().then(res => {
    console.log("The weather is : " + res.data)
}).catch(err => {
    console.log('There are an error : ', err)
})