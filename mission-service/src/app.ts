import express = require('express');
import mission from "./mission-service"

const app: express.Application = express();
const port = 3002;



app.post('/mission/createpoll', (req,res) => {
	try {
		res.send(mission.createPoll())
	}
	catch (e: any) {
		res.send(500).json({
			message : e.message
		})
	}

})

app.put('/mission/setweather', (req,res) => {

})

app.put('/mission/setrockets', (req,res) => {
	
})

app.listen(port, () => {
	console.log(`Mission : Listening at http://localhost:${port}`);
})




module.exports = app;