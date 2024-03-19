module.exports = {
    rabbitMQ: {
      url: "amqp://localhost",
      exchangeName: "cartExchange",
    },
  };

  /*

const amqp = require('amqplib');
const PRODUCT_UPDATES_EXCHANGE = 'product_updates_exchange';
const ORDER_FULFILLED_EXCHANGE = 'order_fulfilled_exchange';
const publishProductUpdate = async (product) => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertExchange(PRODUCT_UPDATES_EXCHANGE, 'fanout');
    channel.publish(PRODUCT_UPDATES_EXCHANGE, '', Buffer.from(JSON.stringify(product)));
    console.log('Product update message published');
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error('Error publishing product update message:', error);
  }
};
const publishOrderFulfilled = async (orderId) => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertExchange(ORDER_FULFILLED_EXCHANGE, 'fanout');
    channel.publish(ORDER_FULFILLED_EXCHANGE, '', Buffer.from(orderId.toString()));
    console.log('Order fulfilled message published');
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error('Error publishing order fulfilled message:', error);
  }
};
module.exports = {
  publishProductUpdate,
  publishOrderFulfilled
};











Jot something down
















const amqp = require('amqplib');
const CART_QUEUE = 'cart_queue';
const ORDER_QUEUE = 'order_queue';
const consumeMessages = async () => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(CART_QUEUE);
    await channel.assertQueue(ORDER_QUEUE);
    channel.consume(CART_QUEUE, (msg) => {
      const product = JSON.parse(msg.content.toString());
      // Handle product update message
    });
    channel.consume(ORDER_QUEUE, (msg) => {
      const orderId = msg.content.toString();
      // Handle order fulfilled message
    });
  } catch (error) {
    console.error('Error consuming messages:', error);
  }
};
consumeMessages();
*/