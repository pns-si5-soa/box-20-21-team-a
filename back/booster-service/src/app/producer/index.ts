const { Kafka, logLevel, CompressionTypes } = require('kafkajs');
const host = process.env.HOST_IP ?? '127.0.0.1';

class Producer {
	producer: any;
	kafka: any;
	uuid:string

	constructor(uuid:string) {
		this.uuid=uuid
		this.kafka = new Kafka({
			logLevel: logLevel.NOTHING,
			brokers: [`${host}:9092`],
			clientId: 'producer-booster-'+uuid,
		});
		this.producer = this.kafka.producer();
	}

	async sendMessage(message: Object, topic: string) {
		await this.producer.connect();
		return this.producer
			.send({
				topic,
				compression: CompressionTypes.GZIP,
				messages: [{ value: JSON.stringify(message) }],
			})
			.then(console.log('sent - - - - - - - - - - - - -: ' + JSON.stringify(message)+' on topic '+topic))
			.catch((e: { message: any }) =>
				console.error(`[example/producer] ${e.message}`, e)
			);
	}
}
export default Producer;
