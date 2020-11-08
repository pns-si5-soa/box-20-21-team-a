#!/usr/bin/env node
const arg = require('arg');
const { exit } = require('process');
 
const args = arg({
    // Types
    '--help':    Boolean,
    '--topic':   String,      
    '--host':    String,      
    '--port':    String,      
 
    // Aliases
    '-t':        '--topic',
    '-p':        '--port',    
    '-h':        '--host',      
});

if(args["--help"])
{
    console.log("Usage: kafka-debug [options]")
    console.log("")
    console.log("Options:")
    console.log("   --help          Print this message")
    console.log("   --topic, -i     Topic to listen")
    console.log("   --port, -p      Port kafka")
    console.log("   --host, -h      Host kafka")
    exit(0);
}

// KAFKA
const { Kafka, logLevel } = require('kafkajs');
const host = args['--host'] ?? '127.0.0.1';
const port = args['--port'] ?? '9092';

if(args["--topic"] == undefined) {
	console.error("missing topic")
	exit(-1);
}

const kafka = new Kafka({
	logLevel: logLEVEL.NOTHING,
	brokers: [`${host}:${port}`],
	clientId: 'example-consumer',
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async (topic_name) => {
	await consumer.connect();
	await consumer.subscribe({ topic: topic_name, fromBeginning: true });
	await consumer.run({
		eachBatch: async ({ batch }) => {
			console.log(batch);
		},
		eachMessage: async ({ topic, partition, message }) => {
			const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;

			console.log(`- ${prefix} ${message.key}#${message.value}`);
			var msg = message.value;
			var json = JSON.parse(msg);
			if (topic == topic_name) {
				console.log(json)
			}
		},
	});
};

run().catch((e) => console.error(`[example/consumer] ${e.message}`, e));

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
