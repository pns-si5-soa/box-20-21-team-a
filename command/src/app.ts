import express = require('express');
import command from "./command"

const app: express.Application = express();
const port = 3002;



app.post('/command/createpoll', (req,res) => {
	try {
		res.send(command.createPoll())
	}
	catch (e: any) {
		res.send(500).json({
			message : e.message
		})
	}

})

app.put('/command/setweather', (req,res) => {

})

app.put('/command/setrockets', (req,res) => {
	
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
})




module.exports = app;