import { ISubscriptions } from "./consumer";

// KAFKA
const { Kafka, logLevel } = require('kafkajs');
const host = process.env.HOST_IP ?? '127.0.0.1';

const kafka = new Kafka({
	logLevel: logLevel.NOTHING,
	brokers: [`${host}:9092`],
	clientId: 'example-consumer',
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async (subscriptions: ISubscriptions[]) => {
	await consumer.connect();
	for(const subscription of subscriptions) {
		await consumer.subscribe({ topic: subscription.topic, fromBeginning: true });
	}
	await consumer.run({
		eachBatch: async ({ batch }: any) => {
			console.log(batch);
		},
		eachMessage: async ({ topic, partition, message }: any) => {
			const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;

			console.log(`- ${prefix} ${message.key}#${message.value}`);
			var msg = message.value;
			var json = JSON.parse(msg);
			for(const subscription of subscriptions) {
				if (topic == subscription.topic) {
					subscription.callback(json)
				}
			}
		},
	});
};

// run().catch((e) => console.error(`[example/consumer] ${e.message}`, e));

const errorTypes = ['unhandledRejection', 'uncaughtException'];
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

errorTypes.map((type) => {
	process.on(type, async (e) => {
		try {
			console.log(`process.on ${type}`);
			console.error(e);
			await consumer.disconnect();
			process.exit(0);
		} catch (_) {
			process.exit(1);
		}
	});
});

export {run};
