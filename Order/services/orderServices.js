

const Order = require('../models/Order');
const orderService = {
  async createOrder(customerId, productId) {
    try {
      const order = new Order({ customerId, productId });
      await order.save();
      return order;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async getOrderById(orderId) {
    try {
      const order = await Order.findById(orderId);
      return order;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async deleteOrder(orderId) {
    try {
      await Order.findByIdAndDelete(orderId);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};
module.exports = orderService;