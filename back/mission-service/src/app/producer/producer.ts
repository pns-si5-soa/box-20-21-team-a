const { Kafka, logLevel,CompressionTypes } = require('kafkajs')
const host = process.env.HOST_IP ?? '127.0.0.1';


// Create the client with the broker list
const kafka = new Kafka({
    logLevel: logLevel.NOTHING,
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
        logLevel: logLevel.NOTHING,
        brokers: [`${host}:9092`],
        clientId: 'real-time',
      });
      this.producer = this.kafka.producer()
    }

    async sendMissionStatus(message : Object,topic : string) {
     // this.sendMissionStatus().catch(e => console.error(`[example/producer] ${e.message}`, e))
      
      /*errorTypes.map(type => {
        process.on(type, async () => {
          try {
            await this.producer.disconnect()
            process.exit(0)
          } catch (_) {
            process.exit(1)
          }
        })
      })*/
        await this.producer.connect()
        this.sendMessage(message,topic);
      
    }

    sendMessage (message : Object,topic : string ) {
      return this.producer
        .send({
          topic,
          compression: CompressionTypes.GZIP,
          messages: [{value:JSON.stringify(message)}],
        })
        .catch((e: { message: any; }) => console.error(`[example/producer] ${e.message}`, e))
    }

}
export default Producer;



