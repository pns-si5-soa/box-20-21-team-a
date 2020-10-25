const {Kafka, logLevel} = require('kafkajs');
const host = process.env.HOST_IP ?? '127.0.0.1';

const kafka = new Kafka({
    logLevel: logLevel.INFO,
    brokers: [`${host}:9092`],
    clientId: 'blue-app',
});

const consumer = kafka.consumer({groupId: 'test-group'});

const run = async (topic_name: string, callback: (response: string) => void) => {
    await consumer.connect();
    await consumer.subscribe({topic: topic_name, fromBeginning: true});
    await consumer.run({
        eachBatch: async ({batch}: any) => {
            console.log(batch);
        },
        eachMessage: async ({topic, partition, message}: any) => {
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

// run().catch((e) => console.error(`[example/consumer] ${e.message}`, e));

const errorTypes = ['unhandledRejection', 'uncaughtException'];
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

errorTypes.forEach((type) => {
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
