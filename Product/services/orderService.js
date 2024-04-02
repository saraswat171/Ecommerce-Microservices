const ProductModel = require('../models/productSchema')
const OrderModel = require('../models/orderSchema')
const { v4: uuidv4 } = require('uuid');
const Producer = require('../worker/producer')
const produce = new Producer()

exports.updateStockOrder = async (payload) => {
    const { productId, stock, uuid } = payload.data;
    const data = await ProductModel.findByIdAndUpdate(productId, { stock: stock });
    const order = await OrderModel.findOneAndUpdate({ uuid }, { status: "confirm" }, { new: true })
    console.log('order: ', order);
    return data;
}

exports.createOrder = async (payload) => {
    const userId = payload.userId;
    const productId = payload.query.productId;
    const { stock } = payload.body
    if (!stock)
        throw new CustomError("Stock is empty in body", 401)
    //find
    const product = await ProductModel.findById(productId);
    if (!product)
        throw new CustomError("No data exist for this id", 401)
    if (stock > product.stock)
        throw new CustomError("Not enough stock present", 401)
    const uuid = uuidv4();
    //order create status pending
    const order = await OrderModel.create({ uuid, status: "pending" })
    if (!order)
        throw new CustomError("Order is not made", 401)
    //publish
    produce.publishMessage("Order", { product, userId, stock, uuid: order.uuid }, "Order")
    // timeout -> find by order id status confirm
    setTimeout(async () => {
        const data = await OrderModel.find({ uuid: uuid });
        if (data.status === "confirm")
            return { message: "success" }
    }, "2000");
    //return 
    throw new CustomError("Order not created", 401)
}