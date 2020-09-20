
require('dotenv').config()
import RocketAPI from './API/rocketAPI'
import weatherAPI from './API/weatherAPI'
import CommandAPI from './API/commandAPI'

const weatherAPIInstance = new weatherAPI()
const rocketAPIInstance = new RocketAPI()
const commandAPIInstance = new CommandAPI()


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

commandAPIInstance.getCommandStatus().then(res => {
    console.log("The launching status is : " + res.data)
}).catch(err => {
    console.log('There are an error : ', err)
})