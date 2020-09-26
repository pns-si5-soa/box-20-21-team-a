import express = require('express');
import mission from "./mission-service"
require('dotenv').config()
const app: express.Application = express()
const port = process.env.PORT ?? 3002;


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

app.put('/mission/modifypoll/:serviceName/:answer', (req,res) => {
	try {
		const result = mission.modifyPoll(req.params.serviceName, JSON.parse(req.params.answer));
		res.send(result);
	}
	catch (e: any) {
		res.send(500).json({
			message : e.message
		})
	}
})

app.get('/mission/getpoll', (req, res) => {
	try {
		res.send(mission.getPoll());
	}
	catch (e: any) {
		res.send(500).json({
			message : e.message
		})
	}
})

app.listen(port, () => {
	console.log(`Mission : Listening at http://localhost:${port}`);
})