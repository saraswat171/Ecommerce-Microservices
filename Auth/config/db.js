const mongoose = require('mongoose');

const connectDB = async () => {
  try {
   
    await mongoose.connect(process.env.Mongo_Url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;