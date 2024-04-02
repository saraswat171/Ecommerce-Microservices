const ProductModel = require('../models/productSchema')
const { v4: uuidv4 } = require('uuid');

exports.createProduct = async (payload) => {
    const images = payload.files.images.map((i) => { return i.path });
    const { name, desc, price, stock, category } = payload.body
    const userId = payload.userId
    const uuid = uuidv4();
    if (name && desc && price && stock && category) {
        const data = await ProductModel.create({ userId, uuid, name, desc, price, stock, category, images })
        return data;
    }
    throw new CustomError("Empty fields", 401);
}

exports.fetchProductsbyVendor = async (payload) => {
    const userId = payload.userId;
    const data = await ProductModel.find({ userId });
    if (!data)
        throw new CustomError("No data found", 204);
    return data;
}

exports.fetchProductbyId = async (payload) => {
    const productId = payload.query.id;
    const data = await ProductModel.findById(productId);
    if (!data)
        throw new CustomError("No such product exist for this product id", 401);
    return data;
}

exports.updateProduct = async (payload) => {
    const productId = payload.query.id;
    const { name, desc, price, stock, category } = payload.body
    const userId = payload.userId
    const product = await ProductModel.findById(productId);
    if (!product)
        throw new CustomError("No product exist", 401)
    if (product.userId == userId) {
        const data = await ProductModel.findByIdAndUpdate(productId, { name, desc, price, stock, category }, { new: true });
        return data;
    }
    throw new CustomError("Invalid User", 400)
}