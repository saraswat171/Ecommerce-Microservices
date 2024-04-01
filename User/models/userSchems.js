const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    uuid: { //uuid from auth publish data
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
    username: {
        type: String,
     
    },
    house_no:{
       type:Number,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    pincode:{
        type:Number,
     },
    phone: {
        type: Number,
    },
    image: {
        type: String,
    }
}, { timestamps: true })
module.exports = mongoose.model("users", UserSchema)