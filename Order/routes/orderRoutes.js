const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
// POST request to create order
router.post('/', orderController.createOrder);
// GET request to get order by orderId
router.get('/:orderId', orderController.getOrderById);
// DELETE request to delete order by orderId
router.delete('/:orderId', orderController.deleteOrder);
module.exports = router;