const orderService = require('../services/orderService');
const orderController = {
  async createOrder(req, res) {
    const { customerId, productId } = req.query;
    try {
      const order = await orderService.createOrder(customerId, productId);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async getOrderById(req, res) {
    const { orderId } = req.params;
    try {
      const order = await orderService.getOrderById(orderId);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async deleteOrder(req, res) {
    const { orderId } = req.params;
    try {
      await orderService.deleteOrder(orderId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
module.exports = orderController;