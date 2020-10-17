const { Kafka, logLevel,CompressionTypes } = require('kafkajs')
const host = '192.168.1.47'

// Create the client with the broker list
const kafka = new Kafka({
    logLevel: logLevel.DEBUG,
    clientId: 'blue-app',
    brokers: [`${host}:9092`],

});
const topic = 'mission-topic'
const errorTypes = ['unhandledRejection', 'uncaughtException']
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2']


class Producer{

    producer : any;

    constructor(){
        this.producer = kafka.producer()
    }

     async sendMissionStatus() {
       
        await this.run().catch((e: { message: any; }) => console.error(`[example/producer] ${e.message}`, e))
        console.log(" - - - - - - - - - sent -  - - - - - -  -");
    }

    getRandomNumber = () => Math.round(Math.random() * 1000)
    createMessage = (num: any) => ({
        key :'hellllooooooooooooooo',
        value : 'woooooooorld'
    })

    sendMessage(){
        return this.producer
            .send({
            topic,
            compression: CompressionTypes.GZIP,
            messages: this.createMessage(this.getRandomNumber()),
            })
            .then(console.log)
            .catch((e: { message: any; }) => console.error(`[example/producer] ${e.message}`, e))
    }

    async run (){
        await this.producer.connect()
        console.log("connected or not ..................")
        this.sendMessage;
        this.sendMessage;

        errorTypes.map(type => {
            process.on(type, async () => {
              try {
                console.log(`process.on ${type}`)
                console.log("exit")
                await this.producer.disconnect()
                process.exit(0)
              } catch (_) {
                process.exit(1)
              }
            })
          })
    }

}
export default Producer;



