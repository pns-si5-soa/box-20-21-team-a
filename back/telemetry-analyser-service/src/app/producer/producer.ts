const { Kafka, logLevel,CompressionTypes } = require('kafkajs')
const host = process.env.HOST_IP ?? '127.0.0.1';


// Create the client with the broker list
const kafka = new Kafka({
    logLevel: logLevel.NOTHING,
    clientId: 'blue-app',
    brokers: [`${host}:9092`],

});


class Producer{

    producer : any;
    kafka : any;

     constructor(){
      this.kafka = new Kafka({
        logLevel: logLevel.NOTHING,
        brokers: [`${host}:9092`],
        clientId: 'example-producer',
      });
      this.producer = this.kafka.producer()
    }

    async sendAnomaly(message : Object,topic : string) {
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



