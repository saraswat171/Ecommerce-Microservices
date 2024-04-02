const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirm", "reject"],
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model("order", OrderSchema)