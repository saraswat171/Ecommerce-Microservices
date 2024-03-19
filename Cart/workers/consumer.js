const  amqp = require('amqplib')
const config = require('../config/rabbit');
const {  cartProcessor } = require('../processor');


const processors = {
   
    "Product":cartProcessor.updateProductbyCart,
   "Order":cartProcessor.updateCartbyOrder
};
class Consumer {
    async consumeMessage() {
        const connection = await amqp.connect(config.rabbitMQ.url)
        const channel = await connection.createChannel();

        await channel.assertExchange("orderExchange", "direct");
      
        await channel.assertExchange("productExchange", "direct");

        const ProOrderQueue = await channel.assertQueue("ProOrderQueue");

        await channel.bindQueue(ProOrderQueue.queue, "orderExchange", "Order");
        await channel.bindQueue(ProOrderQueue.queue, "productExchange", "Product");
       

        channel.consume(ProOrderQueue.queue, async (msg) => {
            const handle_processor = processors[msg?.properties?.type];
            if (handle_processor) {
                try {
                    const data = JSON.parse(msg?.content?.toString());
                    console.log("data is", data.productDetails.message);
                    await handle_processor(data.productDetails.message);
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
module.exports = Consumer;``