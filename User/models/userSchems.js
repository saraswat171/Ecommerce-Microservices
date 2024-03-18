const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    uuid: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["User", "Admin", "Vendor"]
    },
    address: {
        type: String,
    },
    phone: {
        type: Number,
    },
    image: {
        type: String,
    }
}, { timestamps: true })
module.exports = mongoose.model("users", UserSchema)