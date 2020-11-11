// KAFKA
const { Kafka, logLevel } = require('kafkajs');
const host = process.env.HOST_IP ?? '127.0.0.1';

export default class Consumer {

	consumer: any;
	kafka: any;
	uuid:string;

	constructor(uuid : string){
		this.kafka = new Kafka({
			logLevel: logLevel.NOTHING,
			brokers: [`${host}:9092`],
			clientId: 'consumer-payload',
		});
		this.consumer = this.kafka.consumer({ groupId: 'consumer-payload-'+uuid });
		this.uuid = uuid;

	}
	
	run = async (topic_name : string, callback: (response: string) => void) =>   {
		// First connect 
		await this.consumer.connect();

		// Then subscribe
		await this.consumer.subscribe({ topic: topic_name, fromBeginning: true });


		// Finaly listen 
		await this.consumer.run({
			eachMessage: async ({ topic, partition, message }: any) => {
				var msg = message.value;
				var json = JSON.parse(msg);
				if (topic == topic_name) {
					callback(json)
				}
			},
		});
	};

}
