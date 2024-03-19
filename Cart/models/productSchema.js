const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,

        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,

        required: true
    },

    name: { type: String,
         require: true 
    },
    desc: { type: String,
         require: true 
    },
    price: { type: Number,
         require: true 
    },
    stock: { type: Number,
         require: true 
    },
    images: { type: Array, 
        require: true
    },
    category: { type: Array, 
        require: true 
    },

}, { timestamps: true })

module.exports = mongoose.model("posts", ProductSchema)