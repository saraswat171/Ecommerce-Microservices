const express = require('express');
const cors = require('cors');
require("dotenv").config();
const connectDB = require('./config/db');
const Consumer = require('./worker/consumer')
const Producer = require('./worker/producer')

connectDB()
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors());
app.use('/uploads', express.static('uploads'))

const produce = new Producer()
const consumer = new Consumer();
consumer.consumeMessage()

app.use('/', require('./routes'))
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});