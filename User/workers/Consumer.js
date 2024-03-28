const amqp = require('amqplib')
const config = require('../config/rabbit')
const { productProcessor } = require('../processor');

const processors = {
    "NewUser": productProcessor.createUser,
};
class Consumer {
    async consumeMessage() {
        const connection = await amqp.connect(config.rabbitMQ.url)
        const channel = await connection.createChannel();

        await channel.assertExchange("authExchange", "direct");

        const q = await channel.assertQueue("UserQueue");

        await channel.bindQueue(q.queue, "authExchange", "Auth");

        channel.consume(q.queue, async (msg) => {
            const handle_processor = processors[msg?.properties?.type];
            if (handle_processor) {
                try {
                    const data = JSON.parse(msg?.content?.toString());
                    console.log("data", data.message);
                    await handle_processor(data.message);
                    channel.ack(msg);
                } catch (error) {
                    console.log(error.message);
                    channel.nack(msg, false, true);
                }
            } else {
                console.log(`Messages ignore with id: ${msg?.properties?.messageId}`);
                channel.nack(msg, false, false);
            }
        });
    }

}
module.exports = Consumer;