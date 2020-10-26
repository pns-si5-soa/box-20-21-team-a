// KAFKA
const { Kafka, logLevel } = require('kafkajs');
const host = process.env.HOST_IP ?? '127.0.0.1';

export default class Consumer {

	consumer: any;
	kafka: any;

	constructor(){
		this.kafka = new Kafka({
			logLevel: logLevel.DEBUG,
			brokers: [`${host}:9092`],
			clientId: 'consumer-booster',
		});
		this.consumer = this.kafka.consumer({ groupId: 'consumers-booster' });
		

	}
	
	run = async (topic_name : string, callback: (response: string) => void) =>   {
		// First connect 
		await this.consumer.connect();

		// Then subscribe
		await this.consumer.subscribe({ topic: topic_name, fromBeginning: true });
		console.log("Booster consumer subscribing to topic : "+topic_name);
		console.log("-  - -- - - - - - - - - - - - -  - - - - -  - - - - - - -  - - -  -");
	

		// Finaly listen 
		await this.consumer.run({
			eachBatch: async ({ batch }: any) => {
				console.log(batch);
			},
			eachMessage: async ({ topic, partition, message }: any) => {
				const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;

				console.log(`- ${prefix} ${message.key}#${message.value}`);
				console.log(' - - - - - - - - - - - - - -- - - - - - - - - - -');
				var msg = message.value;
				var json = JSON.parse(msg);
				if (topic == topic_name) {
					callback(json)
				}
			},
		});
	};

}
