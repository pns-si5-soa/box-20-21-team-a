require('dotenv').config()
import RocketAPI from './API/rocketAPI'
import weatherAPI from './API/weatherAPI'

const weatherAPIInstance = new weatherAPI()
const rocketAPIInstance = new RocketAPI()


weatherAPIInstance.getWeather().then(res => {
    console.log("The weather is : " + res.data)
}).catch(err => {
    console.log('There are an error : ', err)
})

rocketAPIInstance.getRocketStatus().then(res => {
    console.log("The rocket status is : " + res.data)
}).catch(err => {
    console.log('There are an error : ', err)
})