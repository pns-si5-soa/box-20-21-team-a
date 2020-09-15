const axios = require('axios')

axios.get('http://localhost:3000/weather').then(res => {
    console.log("The weather is : " + res.data)
}).catch(err => {
    console.log('There are an error : ', err)
})