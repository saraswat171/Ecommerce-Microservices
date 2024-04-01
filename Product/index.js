const express = require('express');
const cors = require('cors');
require("dotenv").config();
const connectDB = require('./config/db');
const Consumer = require('./workers/Consumer')
const Producer = require('./workers/Producer')

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
app.listen(8085, () => {
    console.log(`App is running on port 8085`);
});