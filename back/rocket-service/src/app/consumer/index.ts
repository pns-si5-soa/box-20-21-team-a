// KAFKA
const { Kafka, logLevel } = require('kafkajs');
const host = process.env.HOST_IP ?? '127.0.0.1';

export default class Consumer {

	consumer: any;
	kafka: any;
	uuid:string;

	constructor(uuid:string){
		this.uuid = uuid;
		this.kafka = new Kafka({
			logLevel: logLEVEL.NOTHING,
			brokers: [`${host}:9092`],
			clientId: 'consumer-head-stages-'+uuid,
		});
		this.consumer = this.kafka.consumer({ groupId: 'consumer-rocket-'+uuid });
	}
	
	run = async (topic_name : string, callback: (response: string) => void) =>   {
		// First connect 
		await this.consumer.connect();

		// Then subscribe
		await this.consumer.subscribe({ topic: topic_name, fromBeginning: true });
		console.log("Head stages consumer subscribing to topic : "+topic_name);
	

		// Finaly listen 
		await this.consumer.run({
			eachBatch: async ({ batch }: any) => {
				console.log(batch);
			},
			eachMessage: async ({ topic, partition, message }: any) => {
				const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;

				console.log(`- ${prefix} ${message.key}#${message.value}`);
				var msg = message.value;
				var json = JSON.parse(msg);
				if (topic == topic_name) {
					callback(json)
				}
			},
		});
	};

}
