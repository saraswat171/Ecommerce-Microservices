const amqp = require('amqplib')
const config = require('../config/rabbit')

class Producer {
    channel;

    async createChannel() {
        const connection = await amqp.connect(config.rabbitMQ.url);
        this.channel = await connection.createChannel();
    }

    async publishMessage(routingKey, message, signature) {
        if (!this.channel) {
            await this.createChannel()
        }
        const exchangeName = config.rabbitMQ.exchangeName;
        await this.channel.assertExchange(exchangeName, "direct");
        const properties = {
            type: signature
        };
        const productDetails = {
            key: routingKey,
            message: message,
            
        }
        await this.channel.publish(
            exchangeName,
            routingKey,
            Buffer.from(JSON.stringify(productDetails)),
            properties
        );

        console.log(`the message ${message.email} is sent to exchange ${exchangeName} and routing key is ${routingKey} AND SIGNATURE IS ${signature}`);
    }

}
module.exports = Producer;