const { Kafka, logLevel,CompressionTypes } = require('kafkajs')
const host = process.env.HOST_IP ?? '127.0.0.1';


// Create the client with the broker list
const kafka = new Kafka({
    logLevel: logLevel.ERROR,
    clientId: 'blue-app',
    brokers: [`${host}:9092`],

});

const topic = 'mission-topic'
const errorTypes = ['unhandledRejection', 'uncaughtException']
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2']


class Producer{

    producer : any;
    kafka : any;

     constructor(){
      this.kafka = new Kafka({
        logLevel: logLevel.DEBUG,
        brokers: [`${host}:9092`],
        clientId: 'example-producer',
      });
      this.producer = this.kafka.producer()
    }

    async sendMissionStatus(message : Object,topic : string) {
     // this.sendMissionStatus().catch(e => console.error(`[example/producer] ${e.message}`, e))
      
      /*errorTypes.map(type => {
        process.on(type, async () => {
          try {
            console.log(`process.on ${type}`)
            await this.producer.disconnect()
            process.exit(0)
          } catch (_) {
            process.exit(1)
          }
        })
      })*/
      console.log("before connect");
        await this.producer.connect()
        this.sendMessage(message,topic);
      
    }

    sendMessage (message : Object,topic : string ) {
      console.log("send message");
      return this.producer
        .send({
          topic,
          compression: CompressionTypes.GZIP,
          messages: [{value:JSON.stringify(message)}],
        })
        .then(console.log('sent ' +JSON.stringify(message)))
        .catch((e: { message: any; }) => console.error(`[example/producer] ${e.message}`, e))
    }

}
export default Producer;



