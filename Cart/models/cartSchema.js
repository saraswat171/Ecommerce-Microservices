const mongoose = require('mongoose')

const Cart = mongoose.Schema({
    uuid: {
        type: String,
        required: true,
    },
    productId: {
        type:  mongoose.Schema.Types.ObjectId,
        required: true,
        required : true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required : true
    },
    quantity: {
        type: Number,
        default: 1
    },
    deleteStatus:{
        type:Boolean,
        default:false
    }
}, {timestamps: true})


const CartModel =  mongoose.model('CartModel', Cart);
module.exports = CartModel;