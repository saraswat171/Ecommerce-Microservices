const amqp = require('amqplib')
const config = require('../config/rabbit');
const { productProcessor } = require('../processor');


const processors = {
    "Order": productProcessor.updateStockOrder,
    "NewUserVendor": productProcessor.createUser,
};
class Consumer {
    async consumeMessage() {
        const connection = await amqp.connect(config.rabbitMQ.url)
        const channel = await connection.createChannel();

        await channel.assertExchange("orderExchange", "direct");
        await channel.assertExchange("authExchange", "direct");
        await channel.assertExchange("cartExchange", "direct");

        const product = await channel.assertQueue("OrderQueue");

        await channel.bindQueue(product.queue, "orderExchange", "Order");
        await channel.bindQueue(product.queue, "authExchange", "Auth");
       // await channel.bindQueue(product.queue, "cartExchange", "Cart");

        channel.consume(product.queue, async (msg) => {
            const handle_processor = processors[msg?.properties?.type];
            if (handle_processor) {
                try {
                    const data = JSON.parse(msg?.content?.toString());
                    console.log("data", data.message);
                    await handle_processor(data.message);
                    channel.ack(msg);
                } catch (error) {
                    console.log(error.message);
                    channel.nack(msg, false, false);
                }
            } else {
                console.log(`Messages ignore with id: ${msg?.properties?.messageId}`);
                channel.nack(msg, false, false);
            }
        });
    }

}
module.exports = Consumer;