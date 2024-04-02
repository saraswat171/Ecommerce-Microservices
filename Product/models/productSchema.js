const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    stock: {
        type: Number
    },
    price: {
        type: Number
    },
    vendorId: {
        type: String,
        required: true
    },
  
    productImages: [{
        type: String,
        default: []
    }],
   
    
}, {timestamps: true})

module.exports = mongoose.model('products', productSchema)